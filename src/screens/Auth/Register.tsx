import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Background from '../../components/Background/Background';
import BackButton from '../../components/Buttons/BackButton';
import Button from '../../components/Buttons/Button';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import Logo from '../../components/Logo';
import {AuthContext} from '../../context/AuthProvider';
import {AuthParamList} from '../../navigation/types';
import {emailValidator, passwordValidator} from '../../utils/validators';

type authScreenProp = StackNavigationProp<AuthParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const {register} = useContext(AuthContext);
  const {colors} = useTheme();
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _onSignUpPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    try {
      setIsSubmitting(true);
      await register(email.value, password.value);
      setIsSubmitting(false);
      // navigation.navigate('VerifyAccount', {email: email.value});
    } catch (error) {
      setIsSubmitting(false);
      console.log('error signup', error);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Welcome')} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
        loading={isSubmitting}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={{color: colors.accent}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.link, {color: colors.primary}]}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default memo(RegisterScreen);
