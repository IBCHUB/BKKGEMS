import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';

const Headercomp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/BKKGEMSlogo.png')}
        style={styles.logoBkk}
      />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginRight: 20}}>
          <Image
            source={require('../../assets/image/iconSend.png')}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/image/iconProfile.png')}
            style={styles.iconprofile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headercomp;
