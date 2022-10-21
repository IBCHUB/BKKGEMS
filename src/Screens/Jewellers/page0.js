import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {Page2} from '..';
import Headerback from '../../Components/Headerback';
import styles from './styles';
const page0 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback navigation={navigation} item={'The Jewellers'} />
      <ScrollView>
        <View style={styles.viewdetail}>
          <Text style={styles.textheader}>67th THE JEWELLERS</Text>
          <Image
            source={require('../../../assets/image/j67.png')}
            style={styles.imgdetail3}
          />
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            The Jewellers exhibition featured 20 top Thai designers who have
            participated in the Designers' Room and Talent Thai projects of
            DITP. Here, the designers showcased their uniquely-designed and
            innovative jewelry pieces aimed at the global market. They have
            introduced an exciting element to BGJF while demonstrating the
            potential of Thai designers in using unique materials and designs.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default page0;
