import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamList} from './types';
import SignInScreen from '../screens/Auth/SignIn';
import RegisterScreen from '../screens/Auth/Register';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="SignIn">
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
        }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Sign Up',
        }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
