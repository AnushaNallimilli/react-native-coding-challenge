import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../../shared/ui/Card/Card';
import {Country} from '../../common/useInfiniteCountries';
import styles from './CountryCard.style';

export type CountryCardProps = Readonly<{
  country: Country;
  onClick: (ccn3: string) => void;
}>;

const CountryCard: React.FC<CountryCardProps> = ({country, onClick}) => {
  return (
    <TouchableOpacity onPress={() => onClick(country.ccn3)}>
      <Card>
        <Text style={styles.primaryText}> {country.ccn3}</Text>

        <Text style={styles.secondaryText}>{country.name.official}</Text>
        <View style={styles.imageView}>
          <Text style={styles.flexRow}>{country.capital}</Text>
          <Image
            source={{uri: country.flags.png}}
            style={styles.imageContainer}
          />
        </View>
        <Text style={styles.lozengeWrapper}>{country.status}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CountryCard;
