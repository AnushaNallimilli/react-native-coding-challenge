/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const AppComponent = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => AppComponent);
