import 'expo-dev-client';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import RootNavigator from './src/navigation/rootNavigator';
import {AuthProvider} from './src/context/AuthProvider';
import {LogBox} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {createAuthLink} from 'aws-appsync-auth-link';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

Amplify.configure(awsconfig);

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_project_region;

const auth = {
  type: awsconfig.aws_appsync_authenticationType,
  apiKey: awsconfig.aws_appsync_apiKey,
};

const link = ApolloLink.from([
  // @ts-ignore
  createAuthLink({url, region, auth}),
  // @ts-ignore
  createHttpLink({uri: url}),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer>
          <PaperProvider>
            <RootNavigator />
          </PaperProvider>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
