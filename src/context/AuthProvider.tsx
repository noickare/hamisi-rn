import React, {useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
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
  const [firebaseUser, setFirebaseUser] =
    useState<FirebaseAuthTypes.User | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  async function signUp(email: string, password: string) {
    try {
      const newUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore().collection('Users').doc(newUser.user.uid).set({
        email: newUser.user.email,
        emailVerified: newUser.user.emailVerified,
        createdAt: firestore.Timestamp.now(),
      });
      setFirebaseUser(newUser.user);
      await getFirestoreDetails();
      console.log(newUser.user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async function getFirestoreDetails() {
    const userSnapshot = await firestore()
      .collection('Users')
      .doc(firebaseUser?.uid)
      .get();
    if (userSnapshot.exists) {
      const fbUser = userSnapshot.data() as IUser;
      setUser(fbUser);
    }
  }

  async function login(email: string, password: string) {
    try {
      const userRes = await auth().signInWithEmailAndPassword(email, password);
      setFirebaseUser(userRes.user);
      await getFirestoreDetails();
      console.log(userRes);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
      setUser(null);
      setFirebaseUser(null);
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
