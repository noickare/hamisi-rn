import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {Button} from 'react-native-paper';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const Register = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register</Text>
      <Button onPress={() => navigation.navigate('Main')}>Home</Button>
    </View>
  );
};

export default Register;
