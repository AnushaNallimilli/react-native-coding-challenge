import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Details.style';
import Constants from '../../assets/constants/Constants';
import CountryDetail from './Home/CountryDetails';
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
      <CountryDetail label={Constants.details.cCN3}>
        {country.ccn3}
      </CountryDetail>
      <CountryDetail label={Constants.details.capital}>
        {country.capital}
      </CountryDetail>
      <CountryDetail label={Constants.details.continent}>
        {country.continents}
      </CountryDetail>
      <CountryDetail label={Constants.details.status}>
        {country.status}
      </CountryDetail>

      <CountryDetail label={Constants.details.languages}>
        {country.languages ? (
          <Text style={styles.valueText}>
            {Object.values(country.languages).join(',')}
          </Text>
        ) : (
          <Text>{Constants.details.noLanguages}</Text>
        )}
      </CountryDetail>
      <CountryDetail label={Constants.details.area}>
        {country.area}
      </CountryDetail>

      <CountryDetail label={Constants.details.population}>
        {country.population}
      </CountryDetail>
      <CountryDetail label={Constants.details.timeZone}>
        {country.timezones}
      </CountryDetail>
    </View>
  );
}
