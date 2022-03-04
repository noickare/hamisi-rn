import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {RootStackParamList} from '../../navigation/types';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const SignIn = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signin</Text>
      <Button onPress={() => navigation.navigate('Main')}>Home</Button>
    </View>
  );
};

export default SignIn;
