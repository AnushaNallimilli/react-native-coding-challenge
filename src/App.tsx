/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import HomeScreen from './components/pages/Home';
import { NativeBaseProvider } from 'native-base';
import CountryDetails from './components/pages/Details';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NativeBaseProvider>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={CountryDetails} />
            </Stack.Navigator>
        </NativeBaseProvider>
    );
}

export default App;
