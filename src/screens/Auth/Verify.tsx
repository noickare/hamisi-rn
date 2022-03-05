import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Auth} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';
import Background from '../../components/Background/Background';
import BackButton from '../../components/Buttons/BackButton';
import Button from '../../components/Buttons/Button';
import Header from '../../components/Header';
import TextInput from '../../components/Input/TextInput';
import Logo from '../../components/Logo';
import {AuthParamList} from '../../navigation/types';
import {codevalidator} from '../../utils/validators';

type authScreenProp = StackNavigationProp<AuthParamList, 'VerifyAccount'>;

const VerifyAccountScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  const {colors} = useTheme();
  const route = useRoute();
  const [verificationCode, setVerificationCode] = useState({
    value: '',
    error: '',
  });

  const _onSendPressed = () => {
    const codeError = codevalidator(verificationCode.value);

    if (codeError) {
      setVerificationCode({...verificationCode, error: codeError});
      console.log('verificationCode', verificationCode);
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
        label="Verification Code"
        returnKeyType="done"
        value={verificationCode.value}
        onChangeText={text => setVerificationCode({value: text, error: ''})}
        error={!!verificationCode.error}
        errorText={verificationCode.error}
        autoCapitalize="none"
        textContentType="oneTimeCode"
        keyboardType="number-pad"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Verify
      </Button>

      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={async () => {
          try {
            // @ts-ignore
            await Auth.resendSignUp(route.params.email);
            console.log('code resent successfully');
          } catch (err) {
            console.log('error resending code: ', err);
          }
        }}>
        <Text style={[styles.label, {color: colors.accent}]}>
          Didn't receive code? Resend
        </Text>
      </TouchableOpacity>

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

export default memo(VerifyAccountScreen);
