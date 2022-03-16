import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const input = ({
  placeholder,
  onChangeText,
  defaultValue,
  maxLength,
  autoCapitalize,
  secureTextEntry,
  onBlur,
  value,
}) => {
  return (
    <View style={styles.containerinput}>
      <TextInput
        placeholder={({color: '#AFAFAF'}, placeholder)}
        onChangeText={onChangeText}
        style={styles.input}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        maxLength={maxLength}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

export default input;
