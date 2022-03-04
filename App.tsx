import 'react-native-gesture-handler';
import 'expo-dev-client';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import RootNavigator from './src/navigation/rootNavigator';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
