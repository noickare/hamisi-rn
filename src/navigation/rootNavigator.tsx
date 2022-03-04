import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/Auth/SignIn';
import {RootStackParamList} from './types';
import {Auth} from 'aws-amplify';
import Loader from '../components/Loader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} />
    </Stack.Navigator>
  );
};

function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function checkAuthState() {
    setIsLoading(true);
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (err) {
      console.log('❌ User is not signed in');
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkAuthState();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
}

export default RootNavigator;
