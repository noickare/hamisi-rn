import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Loader from '../components/Loader';
import {HomeStack} from './HomeStack';
import {AuthStack} from './AuthStack';

function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

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
