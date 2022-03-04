import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList} from '../../navigation/types';

type authScreenProp = StackNavigationProp<AuthParamList, 'SignIn'>;

const SignIn = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signin</Text>
      <Button onPress={() => navigation.navigate('Register')}>Register</Button>
    </View>
  );
};

export default SignIn;
