import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const HeaderDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.goBack('');
        }}>
        <FontAwesome5
          name="arrow-left"
          size={15}
          color={'#DAA560'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={{marginRight: 20}}>
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

export default HeaderDetail;
