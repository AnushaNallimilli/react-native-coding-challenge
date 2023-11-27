import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Details.style';
import Constants from '../../assets/constants/Constants';
type CountryDetailProps = Readonly<{
  route: any;
}>;

export default function CountryDetails({route}: CountryDetailProps) {
  const {country} = route.params;

  return (
    <View style={styles.countryText}>
      <Text style={styles.primaryText}>{country.name.official}</Text>
      <View style={styles.imageView}>
        <Image source={{uri: country.flags.png}} style={styles.imageText} />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.cCN3}:</Text>
        <Text style={styles.valueText}>{country.ccn3}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.capital}:</Text>
        <Text style={styles.valueText}>{country.capital}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.continent}:</Text>
        <Text style={styles.valueText}>{country.continents}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.status}:</Text>
        <Text style={styles.valueText}>{country.status}</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.languages}:</Text>
        {country.languages ? (
          <Text style={styles.valueText}>
            {Object.values(country.languages).join(',')}
          </Text>
        ) : (
          <Text>{Constants.details.noLanguages}</Text>
        )}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.area}:</Text>
        <Text style={styles.valueText}>{country.area}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.population}:</Text>
        <Text style={styles.valueText}>{country.population}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.headingText}>{Constants.details.timeZone}:</Text>
        <Text style={styles.valueText}>{country.timezones}</Text>
      </View>
    </View>
  );
}
