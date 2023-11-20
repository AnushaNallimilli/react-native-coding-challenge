import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Details.style';

export default function CountryDetails({ route }) {
    const { country } = route.params;

    return (
        <View style={styles.countryText}>
            <Text style={styles.primaryText}>{country.name.official}</Text>
            <View style={styles.imageView}>
                <Image source={{ uri: country.flags.png }} style={styles.imageText} />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>CCN3:</Text>
                <Text style={styles.valueText}>{country.ccn3}</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>Capital:</Text>
                <Text style={styles.valueText}>{country.capital}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>Continent:</Text>
                <Text style={styles.valueText}>{country.continents}</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>status:</Text>
                <Text style={styles.valueText}>{country.status}</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>Languages:</Text>
                {country.languages ? (
                    <Text style={styles.valueText}>
                        {Object.values(country.languages).join(',')}
                    </Text>
                ) : (
                    <Text>Languages not available</Text>
                )}
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>Area:</Text>
                <Text style={styles.valueText}>{country.area}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>Population:</Text>
                <Text style={styles.valueText}>{country.population}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.headingText}>TimeZone:</Text>
                <Text style={styles.valueText}>{country.timezones}</Text>
            </View>
        </View>
    );
}
