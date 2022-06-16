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
import {Page2} from '..';
import Headerback from '../../Components/Headerback';
import styles from './styles';
const page4 = ({navigation}) => {
  return (
    <View style={styles.container}>
     
      <Headerback navigation={navigation} item={'The Jewellers'} />
      <ScrollView style={{backgroundColor: '#EEECE2'}}>
        <View style={styles.viewdetail}>
          <Text style={styles.textheader}>
            62nd Thailand Jewelry Brands and Innovation
          </Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            Every year, up-and-coming designers and new jewelry brands make
            their mark in the ever-competitive jewelry industry in Thailand.
            Through fresh and unique designs with the use of the best materials,
            new jewelry brands add a breath of fresh air to jewelry scene.{' '}
            {'\n'}
            {'\n'}Special zones at the 62ndt edition of the Bangkok Gems &
            Jewelry Fair:
          </Text>
        </View>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Text style={styles.textheader}>Innovation Design Zone (IDZ)</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            Showcased innovative products from start-ups as well as jewelry that
            utilizes new techniques.
          </Text>
          <Image
            source={require('../../../assets/image/Jewellers/28.png')}
            style={[styles.imgdetail2, {height: 250}]}
          />
        </View>
        <View style={styles.viewdetail}>
          <Text style={styles.textheader}>The Niche Showcase</Text>
          <Image
            source={require('../../../assets/image/Jewellers/29.png')}
            style={[styles.imgdetail2, {height: 250}]}
          />
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            Featured the latest trends in jewelry for niche markets. Specially,
            this focused on five main product groups:
          </Text>
          <Image
            source={require('../../../assets/image/Jewellers/25.png')}
            style={[styles.imgdetail2, {height: 250}]}
          />
        </View>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Text style={styles.textheader}>The Jewellers</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            Exhibition featured over 20 brands from designers who have
            participated in the Designers’ Room and Talent Thai projects with
            jewelry making demonstrations and jewelry making technical
            workshops.
          </Text>
          <Image
            source={require('../../../assets/image/Jewellers/26.png')}
            style={[styles.imgdetail2, {height: 250}]}
          />
        </View>
        <View style={styles.viewdetail}>
          <Image
            source={require('../../../assets/image/Jewellers/27.png')}
            style={[styles.imgdetail2, {height: 250}]}
          />
          <Text style={styles.textheader}>Creative Jewelry</Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            A showcase of jewelry from 40 brands that participated in seminars
            and consulting sessions with gems and jewelry design experts,
            designers, and successful jewelry brand owners. {'\n'}
            {'\n'}Visit Bangkok Gems & Jewelry Fair to check out the latest
            designs and innovations from Thai designers and jewelry brands. Be
            inspired, delighted and thrilled at the exciting designs and
            innovations from the best of Thai jewelry brands.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default page4;
