import 'expo-dev-client';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import RootNavigator from './src/navigation/rootNavigator';
import {AuthProvider} from './src/context/AuthProvider';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

Amplify.configure(awsconfig);

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
