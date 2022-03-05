import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({children}: Props) => {
  const {colors} = useTheme();
  return (
    <Text style={[styles.text, {color: colors.onSurface}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(Paragraph);
