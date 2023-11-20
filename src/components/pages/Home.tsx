import { FlatList, Text, View, TextInput, Button } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Country, useCountryData } from '../common/useInfiniteCountries';
import CountryCard, { CountryCardProps } from './Home/CountryCard';
import SearchButton from '../../shared/ui/search-button/SearchButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useSearchTerm } from '../common/hooks/useSearchTerm';
import styles from './Home.style';
import { RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type CountryListProps = Readonly<{
    isLoading: boolean;
    isRefetching?: boolean;
    hasNextPage: boolean | undefined;
    refetch: () => void;
    loadNext: () => void;
}>;

export default function HomeScreen({ refetch }: CountryListProps) {
    const { data, isLoading, isError } = useCountryData();
    const navigation = useNavigation();
    const searchTerm = useSearchTerm((term) => term.searchTerm);
    const [pageNumber, setPageNumber] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const [newCountry, setNewCountry] = useState<string>('');
    const [localCountries, setLocalCountries] = useState<Country[]>([]);

    const setSearchTerm = useSearchTerm((term) => term.setsearchTerm);
    const queryClient = useQueryClient();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Country>();

    const ItemSeparatorComponent = useCallback(
        () => <View style={{ paddingVertical: 6 }} />,
        []
    );

    const addCountry = async () => {
        const countryToAdd: Country = {
            name: {
                common: newCountry,
                official: newCountry,
            },
            languages: [],
            flags: {
                png: '',
            },
            status: '',
            ccn3: '',
            cca2: '',
            capital: [],
            population: 0,
        };

        setLocalCountries((prevCountries) => [...prevCountries, countryToAdd]);

        await AsyncStorage.setItem(
            'countries',
            JSON.stringify([...localCountries, countryToAdd])
        );
    };

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
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const filteredData = data?.filter((country) => {
        return country.name.official.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (isError) {
        return <Text>Error fetching data</Text>;
    }

    const renderNewItemForm = () => (
        <View>
            <Text>Name:</Text>
            <TextInput onChangeText={(text) => setNewCountry(text)} />
            {errors.name && <Text>{errors.name.message}</Text>}

            <Button title="Add Country" onPress={addCountry} />
        </View>
    );

    const renderItem = ({ item }: { item: CountryCardProps['country'] }) => (
        <CountryCard
            country={item}
            onClick={() => navigation.navigate('Details', { country: item })}
        />
    );
    const onEndReached = async () => {
        if (!isLoading && !isError) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
            data ? pageNumber + 1 : [];
        }
    };

    return (
        <View>
            <View style={styles.headingText}>
                <SearchButton onSearchClick={() => console.log('Search clicked')} />
                <TextInput
                    placeholder="Search by country name"
                    style={styles.fieldContainer}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                />
            </View>
            <View>
                {renderNewItemForm()}
                <FlatList
                    data={
                        filteredData
                            ? [...filteredData, ...localCountries]
                            : localCountries
                    }
                    renderItem={renderItem}
                    keyExtractor={(item) => item.ccn3}
                    onEndReached={({ distanceFromEnd }) => {
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
        </View>
    );
}
