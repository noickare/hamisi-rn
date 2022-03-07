import React, {useState, useEffect, useContext} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Loader from '../components/Loader';
import {HomeStack} from './HomeStack';
import {AuthStack} from './AuthStack';
import {AuthContext} from '../context/AuthProvider';

function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const {getFirestoreDetails, loggedInUser} = useContext(AuthContext);

  async function getFirestoreUserDetails() {
    await getFirestoreDetails();
    console.log(loggedInUser);
  }

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);
      getFirestoreUserDetails();
      if (isLoading) {
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <>{user ? <HomeStack /> : <AuthStack />}</>;
}

export default RootNavigator;
