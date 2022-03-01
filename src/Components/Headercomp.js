import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import Octicons from 'react-native-vector-icons/Octicons';
const Headercomp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.row}>
        <Octicons
          size={20}
          name="three-bars"
          color={'#DAA560'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <Image
          source={require('../../assets/image/BKKGEMSlogo.png')}
          style={styles.logoBkk}
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Login')}
          style={{marginRight: 20}}>
          <Image
            source={require('../../assets/image/iconSend.png')}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/image/iconprofile.png')}
            style={styles.iconprofile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headercomp;
