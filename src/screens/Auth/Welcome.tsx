import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo} from 'react';
import {Paragraph} from 'react-native-paper';
import Background from '../../components/Background/Background';
import Logo from '../../components/Logo';
import {AuthParamList} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Button from '../../components/Buttons/Button';

type authScreenProp = StackNavigationProp<AuthParamList, 'Welcome'>;

const WelcomeScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <Background>
      <Logo />
      <Header>Clueconn</Header>

      <Paragraph>Selling has never been this easy.</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('SignIn')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(WelcomeScreen);
