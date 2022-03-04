import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamList} from './types';
import {AuthContext} from '../context/AuthProvider';
import {Text, TouchableOpacity} from 'react-native';
import EditStreamScreen from '../screens/Stream/Edit';
import StreamScreen from '../screens/Stream/Stream';
import HomeScreen from '../screens/Home';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={({route}) => ({
          headerTitle: `Edit: ${route.params.name}`,
        })}
        name="EditStream"
        component={EditStreamScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        name="Stream"
        component={StreamScreen}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
