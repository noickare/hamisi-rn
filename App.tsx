import 'expo-dev-client';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigator';
import {AuthProvider} from './src/context/AuthProvider';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import {
  en,
  // nl,
  // de,
  // pl,
  // pt,
  // enGB,
  registerTranslation,
} from 'react-native-paper-dates';
registerTranslation('en', en);
// registerTranslation('nl', nl)
// registerTranslation('pl', pl)
// registerTranslation('pt', pt)
// registerTranslation('de', de)
// registerTranslation('en-GB', enGB)

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
