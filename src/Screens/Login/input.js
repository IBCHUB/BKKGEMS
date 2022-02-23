import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

import styles from './styles';

const input = ({
  icon,
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
      />
    </View>
  );
};

export default input;
