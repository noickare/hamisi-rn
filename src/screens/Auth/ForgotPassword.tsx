import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Background from '../../components/Background/Background';
import BackButton from '../../components/Buttons/BackButton';
import Button from '../../components/Buttons/Button';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import Logo from '../../components/Logo';
import {AuthParamList} from '../../navigation/types';
import {emailValidator} from '../../utils/validators';

type authScreenProp = StackNavigationProp<AuthParamList, 'ForgotPassword'>;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const {colors} = useTheme();
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      console.log('email', email);
      return;
    }

    navigation.navigate('SignIn');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('SignIn')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={[styles.label, {color: colors.accent}]}>
          ← Back to login
        </Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
