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
  // const {loading, error, data} = useQuery(gql(queries.listUsers));
  // const [addUser, {data, loading, error}] = useMutation(
  //   gql(mutations.createUser),
  // );
  const navigation = useNavigation<authScreenProp>();

  // if (loading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <Loader />
  //     </View>
  //   );
  // }

  // if (error) {
  //   console.log('gql error', error);
  // }

  // console.log('data', data);

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
      {/* <Button
        mode="outlined"
        onPress={async () => {
          await addUser({
            variables: {input: {email: 'lili@me.com', isVerified: true}},
          });
        }}>
        Test Mutation
      </Button> */}
    </Background>
  );
};

export default memo(WelcomeScreen);
