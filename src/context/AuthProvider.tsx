import React, {useState} from 'react';
import {Auth} from 'aws-amplify';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {API} from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import {User} from '../models';

export const AuthContext = React.createContext<{
  loggedInUser: null | CognitoUser;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
  verify: (email: string, code: string) => Promise<void>;
}>({
  loggedInUser: null,
  login: async (_email: string, _password: string) => {},
  logout: () => {},
  register: async (_email: string, _password: string) => {},
  verify: async () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [cUser, setCUser] = useState<CognitoUser | null>(null);

  async function signUp(email: string, password: string) {
    try {
      const {userSub} = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email, // optional
        },
      });
      const userDetails: User = {
        id: userSub,
        email: email,
        isVerified: false,
      };
      const newUser = await API.graphql({
        query: mutations.createUser,
        variables: {input: userDetails},
      });
      console.log(newUser);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function verifySignup(email: string, code: string) {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
      console.log('error verifying', error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const userRes = (await Auth.signIn(email, password)) as CognitoUser;
      setCUser(userRes);
    } catch (error) {
      console.log('error verifying', error);
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loggedInUser: cUser,
        register: signUp,
        verify: verifySignup,
        login: login,
        logout: signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
