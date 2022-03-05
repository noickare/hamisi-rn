import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './types';
import SignInScreen from '../screens/Auth/SignIn';
import RegisterScreen from '../screens/Auth/Register';
import WelcomeScreen from '../screens/Auth/Welcome';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
import VerifyAccountScreen from '../screens/Auth/Verify';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Welcome">
      <Stack.Screen
        options={{
          headerTitle: 'Welcome',
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
        }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Verify Account',
        }}
        name="VerifyAccount"
        component={VerifyAccountScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Sign Up',
        }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Forgot Password',
        }}
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
