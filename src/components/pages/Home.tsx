import {FlatList, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Country, useCountryData} from '../common/useInfiniteCountries';
import CountryCard, {CountryCardProps} from './Home/CountryCard';
import SearchButton from '../../shared/ui/search-button/SearchButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import styles from './Home.style';
import {RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus, faRemove} from '@fortawesome/pro-solid-svg-icons';
import {AddCountryScreenParams} from '../../navigation/type';
import {useCountryHook} from '../common/hooks/useAddCountry';
import {Toast} from 'react-native-toast-notifications';
import {StartupParamsList} from '../../App';
import Constants from '../../assets/constants/Constants';
import Spinner from '../../shared/ui/spinner/Spinner';
import Skeleton from '../../shared/ui/skeleton/Skeleton';

export default function HomeScreen() {
  const {data, isLoading, isError} = useCountryData();
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const {localCountries, setLocalCountries} = useCountryHook();
  const [reloadAsyncStore, setReloadAsyncStore] = useState(true);
  const navigation = useNavigation<NavigationProp<StartupParamsList>>();
  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeperator} />,
    [],
  );

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const storedCountries = await AsyncStorage.getItem('countries');
        if (storedCountries) {
          setLocalCountries(JSON.parse(storedCountries));
        }
      } catch (error) {
        console.error('Error loading countries from AsyncStorage:', error);
      }
    };
    loadCountries();
    setReloadAsyncStore(false);
  }, [reloadAsyncStore, setLocalCountries]);

  const onAddCountry = useCallback(() => {
    Toast.show('Details Added');
    setReloadAsyncStore(true);
  }, []);

  const navigateToAddCountry = () => {
    const params: AddCountryScreenParams = {
      onCountryAdded: async (newCountry: Country) => {
        const newList = [...localCountries, newCountry];
        await AsyncStorage.setItem(
          'countries',
          JSON.stringify(newList),
          onAddCountry,
        );
      },
    };
    navigation.navigate('AddCountry', params);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    isLoading;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [isLoading]);

  const combinedData = (data || []).concat(localCountries || []);

  const filteredData = combinedData?.filter(country => {
    return country.name.official
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  if (isLoading || refreshing) {
    return (
      <View style={styles.spinnerStyle}>
        <Spinner />
      </View>
    );
  }

  if (isError) {
    return <Text>{Constants.home.error}</Text>;
  }

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  const renderItem = ({item}: {item: CountryCardProps['country']}) => (
    <Skeleton isLoading={isLoading} height={150}>
      <CountryCard
        country={item}
        onClick={() => navigation.navigate('Details', {country: item})}
      />
    </Skeleton>
  );
  const onEndReached = () => {
    if (!isLoading && !isError) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
      return filteredData ? pageNumber + 1 : [];
    }
  };

  return (
    <View>
      <View style={styles.headingText}>
        <SearchButton onSearchClick={() => console.log('Search clicked')} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search by country name"
            style={styles.fieldContainer}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
          <View style={styles.crossMark}>
            <TouchableOpacity onPress={clearSearchTerm}>
              <FontAwesomeIcon icon={faRemove} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addItem}>
          <TouchableOpacity onPress={navigateToAddCountry}>
            <FontAwesomeIcon icon={faCirclePlus} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      {filteredData.length === 0 ? (
        <Text>{Constants.home.data}</Text>
      ) : (
        <View>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.ccn3}
            onEndReached={({distanceFromEnd}) => {
              if (distanceFromEnd < 0) {
                return;
              }

              onEndReached();
            }}
            contentContainerStyle={styles.containerStyle}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={ItemSeparatorComponent}
            onEndReachedThreshold={0.4}
          />
        </View>
      )}
    </View>
  );
}
