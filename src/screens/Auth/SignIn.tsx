import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {AuthParamList} from '../../navigation/types';
import Background from '../../components/Background/Background';
import BackButton from '../../components/Buttons/BackButton';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import {emailValidator, passwordValidator} from '../../utils/validators';
// import {AuthContext} from '../../context/AuthProvider';
import Button from '../../components/Buttons/Button';

type authScreenProp = StackNavigationProp<AuthParamList, 'SignIn'>;

const SignIn = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const navigation = useNavigation<authScreenProp>();
  const {colors} = useTheme();
  // const {login} = useContext(AuthContext);

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    console.log(email, password);
    // login();
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Welcome')} />

      <Logo />

      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: colors.accent}}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={{color: colors.accent}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.link, {color: colors.primary}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default SignIn;
