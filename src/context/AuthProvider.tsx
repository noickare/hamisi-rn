import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {IUser} from '../models/user';

export const AuthContext = React.createContext<{
  loggedInUser: null | IUser;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
  getFirestoreDetails: () => Promise<void>;
}>({
  loggedInUser: null,
  login: async (_email: string, _password: string) => {},
  logout: () => {},
  register: async (_email: string, _password: string) => {},
  getFirestoreDetails: async () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function signUp(email: string, password: string) {
    try {
      const newUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore().collection('Users').doc(newUser.user.uid).set({
        uid: newUser.user.uid,
        email: newUser.user.email,
        emailVerified: newUser.user.emailVerified,
        createdAt: firestore.Timestamp.now(),
      });
      await getFirestoreDetails();
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function getFirestoreDetails() {
    const fireUser = auth().currentUser;
    if (fireUser) {
      const userSnapshot = await firestore()
        .collection('Users')
        .doc(fireUser.uid)
        .get();
      if (userSnapshot.exists) {
        const fbUser = userSnapshot.data() as IUser;
        console.log(fbUser);
        setUser(fbUser);
        console.log(user);
      }
    }
  }

  async function login(email: string, password: string) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      await getFirestoreDetails();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
      setUser(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loggedInUser: user,
        register: signUp,
        login: login,
        logout: signOut,
        getFirestoreDetails,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
