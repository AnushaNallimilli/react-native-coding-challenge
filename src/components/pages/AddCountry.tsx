import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Country} from '../common/useInfiniteCountries';
import styles from './Home.style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';

interface AddCountryScreenProps {
  route: {
    params: {
      onCountryAdded: (newCountry: Country) => void;
    };
  };
}
interface FormData {
  countryName: string;
  countryCapital: string;
  status: string;
  ccn3: string;
  ccn2: string;
}
export default function AddCountry({route}: AddCountryScreenProps) {
  const {control, handleSubmit, setValue, formState} = useForm<FormData>();
  const navigation = useNavigation();

  const onSubmit = (data: FormData) => {
    const newCountry: Country = {
      name: {
        common: data.countryName,
        official: data.countryName,
      },
      languages: [],
      flags: {
        png: '',
      },
      status: data.status,
      ccn3: data.ccn3,
      cca2: '',
      capital: [data.countryCapital],
      population: 0,
    };

    route.params.onCountryAdded(newCountry);

    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={[Colors.WHITE, Colors.PRIMARY_COLOR, Colors.PRIMARY_COLOR]}
      style={styles.parentStyle}>
      <View style={styles.container}>
        <Controller
          control={control}
          render={({field, fieldState}) => (
            <>
              <Text style={styles.label}>Country ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Country ID"
                value={field.value}
                onChangeText={text => setValue('ccn3', text)}
              />
              {fieldState.invalid && (
                <Text style={styles.errorText}>Country ID is required</Text>
              )}
            </>
          )}
          name="ccn3"
          defaultValue=""
          rules={{required: 'Country ID is required'}}
        />
        <Controller
          control={control}
          render={({field, fieldState}) => (
            <>
              <Text style={styles.label}>Country Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Country Name"
                value={field.value}
                onChangeText={text => setValue('countryName', text)}
              />
              {fieldState.invalid && (
                <Text style={styles.errorText}>Country Name is required</Text>
              )}
            </>
          )}
          name="countryName"
          defaultValue=""
          rules={{required: 'Country Name is required'}}
        />
        <Controller
          control={control}
          render={({field, fieldState}) => (
            <>
              <Text style={styles.label}>Country Capital</Text>
              <TextInput
                style={styles.input}
                placeholder="Country Capital"
                value={field.value}
                onChangeText={text => setValue('countryCapital', text)}
              />
              {fieldState.invalid && (
                <Text style={styles.errorText}>
                  Country Capital is required
                </Text>
              )}
            </>
          )}
          name="countryCapital"
          defaultValue=""
          rules={{required: 'Country Capital is required'}}
        />

        <Controller
          control={control}
          render={({field, fieldState}) => (
            <>
              <Text style={styles.label}>Country Status</Text>
              <TextInput
                style={styles.input}
                placeholder="Status"
                value={field.value}
                onChangeText={text => setValue('status', text)}
              />
              {fieldState.invalid && (
                <Text style={styles.errorText}>Status is required</Text>
              )}
            </>
          )}
          name="status"
          defaultValue=""
          rules={{required: 'Status is required'}}
        />
        <View style={styles.buttontext}>
          <Button title="Add Country" onPress={handleSubmit(onSubmit)} />
        </View>
        {formState.isSubmitted && formState.isValidating && (
          <Text style={styles.errorText}>
            Please fill in all required fields
          </Text>
        )}
      </View>
    </LinearGradient>
  );
}
