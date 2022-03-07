import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Headerback = ({navigation, item}) => {
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
        <Text style={styles.texthead}>{item}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
          style={{marginRight: 20}}>
          <Image
            source={require('../../assets/image/iconSend.png')}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/image/iconprofile.png')}
            style={styles.iconprofile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headerback;
