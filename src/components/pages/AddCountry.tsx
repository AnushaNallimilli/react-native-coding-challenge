import React from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Country} from '../common/useInfiniteCountries';
import styles from './Home.style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';
import Form from './Home/Form';
import Button from '../../shared/ui/button/Button';
import Constants from '../../assets/constants/Constants';

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
  const {
    control,
    handleSubmit,
    formState: {isSubmitting, isValidating, isValid, isSubmitted},
  } = useForm<FormData>();
  const navigation = useNavigation();
  const isLoading = isSubmitting || isValidating;
  const inputs = [
    {
      name: Constants.addCountry.ccn3,
      label: Constants.addCountry.ccn,
      rules: {required: Constants.addCountry.countryId},
    },
    {
      name: Constants.addCountry.name,
      label: Constants.addCountry.nameLabel,
      rules: {required: Constants.addCountry.countryname},
    },
    {
      name: Constants.addCountry.capital,
      label: Constants.addCountry.capitalLabel,
      rules: {required: Constants.addCountry.countrycapital},
    },
    {
      name: Constants.addCountry.status,
      label: Constants.addCountry.statusLabel,
      rules: {required: Constants.addCountry.countryStatus},
    },
  ];

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
        {inputs.map(input => (
          <Controller
            key={input.name}
            control={control}
            render={({field, fieldState}) => (
              <View>
                <Form
                  label={input.label}
                  value={field.value}
                  onChangeText={field.onChange}
                  errorText={fieldState.invalid ? input.rules.required : ''}
                />
              </View>
            )}
            name={input.name as keyof FormData}
            defaultValue=""
            rules={input.rules}
          />
        ))}

        <View style={styles.buttontext}>
          <Button
            appearance="primary"
            isLoading={isLoading}
            isDisabled={!isValid && isSubmitted}
            size="lg"
            onClick={handleSubmit(onSubmit)}>
            {Constants.addCountry.add}
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
}
