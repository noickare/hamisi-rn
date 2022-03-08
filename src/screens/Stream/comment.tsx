import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import TextInput from '../../components/Input/TextInput';
import styles from './style';

export default function Comment() {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="comment"
        returnKeyType="next"
        // value={title.value}
        // onChangeText={text => setTitle({value: text, error: ''})}
        // error={!!title.error}
        // errorText={title.error}
        autoCapitalize="none"
      />
    </View>
  );
}
