import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Headerchat = ({navigation, item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.goBack('');
        }}>
        <FontAwesome5
          name="arrow-left"
          size={20}
          color={'#DAA560'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.texthead1}>DITP Offlcial Chat</Text>
      </View>
      <View style={styles.row}>
        {/* <TouchableOpacity>
          <FontAwesome5
            name="search"
            size={18}
            color={'#DAA560'}
            style={styles.icon}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
export default Headerchat;
