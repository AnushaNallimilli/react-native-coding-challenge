import {FlatList, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Country, useCountryData} from '../common/useInfiniteCountries';
import CountryCard, {CountryCardProps} from './Home/CountryCard';
import SearchButton from '../../shared/ui/search-button/SearchButton';
import {useNavigation} from '@react-navigation/native';
import {useSearchTerm} from '../common/hooks/useSearchTerm';
import styles from './Home.style';
import {RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus, faRemove} from '@fortawesome/pro-solid-svg-icons';
import {AddCountryScreenParams} from '../../navigation/type';
import {useCountryHook} from '../common/hooks/useAddCountry';
import {Toast} from 'react-native-toast-notifications';

export type CountryListProps = Readonly<{
  refetch: () => void;
}>;

export default function HomeScreen({refetch}: CountryListProps) {
  const {data, isLoading, isError} = useCountryData();
  const navigation = useNavigation();
  const searchTerm = useSearchTerm(term => term.searchTerm);
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const {localCountries, setLocalCountries} = useCountryHook();
  const [reloadAsyncStore, setReloadAsyncStore] = useState(true);

  const setSearchTerm = useSearchTerm(term => term.setsearchTerm);
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
          setReloadAsyncStore(false);
        }
      } catch (error) {
        console.error('Error loading countries from AsyncStorage:', error);
      }
    };
    loadCountries();
  }, [navigation, reloadAsyncStore, setLocalCountries]);

  const onAddCountry = useCallback(() => {
    Toast.show('Details Added');
    setReloadAsyncStore(true);

    // setRefreshing(true);
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
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const combinedData = (data || []).concat(localCountries || []);

  const filteredData = combinedData?.filter(country => {
    return country.name.official
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  const renderItem = ({item}: {item: CountryCardProps['country']}) => (
    <CountryCard
      country={item}
      onClick={() => navigation.navigate('Details', {country: item})}
    />
  );
  const onEndReached = async () => {
    if (!isLoading && !isError) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
      return data ? pageNumber + 1 : [];
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
        <Text>No Data Found</Text>
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={ItemSeparatorComponent}
            onRefresh={refetch}
          />
        </View>
      )}
    </View>
  );
}
