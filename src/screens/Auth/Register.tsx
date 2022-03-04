import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList} from '../../navigation/types';
import {Button} from 'react-native-paper';

type authScreenProp = StackNavigationProp<AuthParamList, 'Register'>;

const Register = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register</Text>
      <Button onPress={() => navigation.navigate('SignIn')}>SignIn</Button>
    </View>
  );
};

export default Register;
