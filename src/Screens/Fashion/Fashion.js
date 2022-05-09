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
const Fashion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'Fashion Show'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewdetail}>
            <Image
              source={require('../../../assets/image/Jewellers/31.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>NETWORKING RECEPTION</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              The networking reception at BGJF offers a special platform for key
              figures in the gems and jewelry industry to extend their business
              networks in a cozy, yet glamorous atmosphere. At the 65th edition,
              the networking reception was held under the concept of ‘Bangkok
              Gems & Jewelry Elite Club’ reflecting the social gathering in the
              atmosphere of the 50s. The Fabulous Jewel Society fashion show was
              featured luxurious jewelry collections from Dhanu, Jewelry Center
              by Darach, V&P Jewelry and Iris Gold, for instance, worn by
              celebrities and models and accompanied with a live musical
              performance.
            </Text>
            <Image
              source={require('../../../assets/image/Jewellers/30.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>64th FASHION SHOW</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              The pride of Thai art is conveyed through the first jewelry
              presentation in the form of a contemporary Thai performance
              created by Pichet Klunchun, an internationally-acclaimed Thai
              artist and the winner of the Silpathorn Award for Performing Arts
              in 2006. The performance was created under the concept of
              Thailand’s Magic Hands presented at the networking reception,
              which was part of the 64th Bangkok Gems and Jewelry Fair, held on
              10 September 2019. The Fair is set to showcase the potential of
              Thailand as the world’s gems and jewelry Hub, empowered by Thai
              craftsmanship.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Fashion;
