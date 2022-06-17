import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
const Workshops = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback
        navigation={navigation}
        item={'Workshops and Demonstrations'}
      />
      <View style={styles.viewdetail}>
        <Image
          source={require('../../../assets/image/Jewellers/32.png')}
          style={styles.imgdetail}
        />
        <Image
          source={require('../../../assets/image/Jewellers/33.png')}
          style={styles.imgdetail}
        />
      </View>
    </View>
  );
};

export default Workshops;
