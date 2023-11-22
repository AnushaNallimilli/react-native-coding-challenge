import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import HomeScreen from './components/pages/Home';
import {NativeBaseProvider} from 'native-base';
import CountryDetails from './components/pages/Details';
import AddCountry from './components/pages/AddCountry';
import {ToastProvider} from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();

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
