import React from 'react';
import {View} from 'react-native';
import {Colors, ActivityIndicator} from 'react-native-paper';

const index = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator animating={true} color={Colors.red800} size="large" />
  </View>
);

export default index;
