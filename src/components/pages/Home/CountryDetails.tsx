import styles from '../Details.style';
import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';

export type CountryDetailProps = Readonly<{
  label: string;
  children: ReactNode;
}>;

export default function CountryDetail({label, children}: CountryDetailProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.headingText}>{label}</Text>
      <Text style={styles.valueText}>{children}</Text>
    </View>
  );
}
