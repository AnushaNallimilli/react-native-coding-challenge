import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './components/pages/Home';
import {NativeBaseProvider} from 'native-base';
import CountryDetails from './components/pages/Details';
import AddCountry from './components/pages/AddCountry';
import {ToastProvider} from 'react-native-toast-notifications';
import {Country} from './components/common/useInfiniteCountries';

export type StartupParamsList = {
  Home: {
    pageName: string | undefined;
    session: string | undefined;
  };
  Details: {
    country: any;
  };

  AddCountry: {
    onCountryAdded: (newCountry: Country) => void;
  };
};
const Stack = createNativeStackNavigator<StartupParamsList>();

function App() {
  return (
    <ToastProvider>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={CountryDetails} />
          <Stack.Screen name="AddCountry" component={AddCountry} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </ToastProvider>
  );
}

export default App;
