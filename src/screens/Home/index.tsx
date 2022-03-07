import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import {HomeParamList} from '../../navigation/types';

type HomeScreenProp = StackNavigationProp<HomeParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      {/* <Portal> */}
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: 16,
        }}
        onPress={() => navigation.navigate('NewStream')}
      />
      {/* </Portal> */}
    </View>
  );
};

export default HomeScreen;
