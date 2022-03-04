import React, {useState, useEffect} from 'react';
import {Auth} from 'aws-amplify';
import Loader from '../components/Loader';
import {HomeStack} from './HomeStack';
import {AuthStack} from './AuthStack';

function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function checkAuthState() {
    setIsLoading(true);
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (err) {
      console.log('❌ User is not signed in');
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkAuthState();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <>{isLoggedIn ? <HomeStack /> : <AuthStack />}</>;
}

export default RootNavigator;
