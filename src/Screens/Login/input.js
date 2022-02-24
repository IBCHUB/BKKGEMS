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
      />
    </View>
  );
};

export default input;
