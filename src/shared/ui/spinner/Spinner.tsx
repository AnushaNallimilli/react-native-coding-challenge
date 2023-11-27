import {Spinner as NativeBaseSpinner, View} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import styles from './Spinner.style';

export type SpinnerProps = Readonly<{
  text?: string;
}>;

export default function Spinner({text}: SpinnerProps) {
  return (
    <View style={styles.container}>
      <NativeBaseSpinner size="sm" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}
