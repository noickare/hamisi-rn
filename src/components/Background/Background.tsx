import React, {memo} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
};

const Background = ({children}: Props) => (
  <ImageBackground
    source={require('../../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}>
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </KeyboardAwareScrollView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default memo(Background);
