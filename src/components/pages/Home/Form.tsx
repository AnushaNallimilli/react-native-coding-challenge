import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../Home.style';

export type ControllerProps = Readonly<{
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  errorText: string | undefined;
}>;

export default function Form({
  label,
  value,
  errorText,
  onChangeText,
}: ControllerProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}
