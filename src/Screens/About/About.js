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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'ABOUT FAIR'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <Image
            source={require('../../../assets/image/about1.png')}
            style={styles.imgHeader}
          />

          <Text style={[styles.textdetail, {marginTop: 20}]}>
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Bangkok Gems & Jewelry Fair (BGJF)
            </Text>{' '}
            is one of the world’s most renowned and longest-celebrated gems and
            jewelry trade fair in the industry. Organized on a biannual basis by
            Thailand’s Department of International Trade Promotion (DITP) in
            February and September, the Bangkok Gems & Jewelry Fair is regarded
            as a significant trading arena where all key players in the global
            gems and jewelry business can achieve their purposes of sourcing,
            trading and networking.
          </Text>
          <Text style={styles.textdetail}>
            The Bangkok Gems & Jewelry Fair is a globally-trusted marketplace
            for a wide range of quality products, extensive resources, and
            innovative designs. Following the great success of its previous
            editions, the 65th BGJF is organized under a new theme THAILAND’S
            MAGIC HANDS the spirit of Jewelry Making to showcase the skilled
            craftsmanship of Thailand’s manufacturers. Meanwhile, the fair aims
            to provide the greatest satisfaction to exhibitors, traders and
            visitors with first-rate facilities and services such as
            complimentary shuttle transport, interpreters, business matching
            zone, business lounge, Wi-Fi service, as well as exciting talks and
            seminars.
          </Text>
          <Image
            source={require('../../../assets/image/about2.png')}
            style={styles.imgHeader}
          />
          <View style={styles.viewdetail}>
            <Text style={styles.textheader}>Expected number of exhibitors</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              900 companies in 2,000 booths from selected domestic and
              international exhibitors.
            </Text>
            <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
              Product Group
            </Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              ◆ Gemstones (Precious Stones, Semi- Precious Stones and Rough
              stones){'\n'}◆ Pearls {'\n'}◆ Diamonds{'\n'}◆ Gold Jewelry{'\n'}◆
              Fine Jewelry {'\n'}◆ SilverJewelry {'\n'}◆ Costume &
              FashionJewelry {'\n'}◆ Synthetic Stones {'\n'}◆ Display &
              Packaging{'\n'}◆ Jewelry Parts{'\n'}◆ Equipment & Tools and
              Machinery
            </Text>
            <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
              Visitor Groups
            </Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              ◆ Importers {'\n'}◆ Boutiques {'\n'}◆ Manufacturers {'\n'}◆
              Fashion Showrooms {'\n'}◆ Trading Companies and Brokers {'\n'}◆
              Department Stores {'\n'}◆ Distributors{'\n'}◆ Buying Agents
              {'\n'}◆ Wholesalers {'\n'}◆ Designers {'\n'}◆ Retailers and others
            </Text>
          </View>
          <LinearGradient
            colors={['#1f1f1f', '#3f3f3f', '#9f9f9f']}
            start={{x: 0.0, y: 1}}
            end={{x: 1, y: 0.0}}
            style={styles.linearGradient}>
            <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
              Special Events
            </Text>
            <Image
              source={require('../../../assets/image/about3.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textsuphead}>
              SIAM SILVER SHOWCASE - FROM PAST TO PRESENT
            </Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              An exhibition of contemporary silver jewelry form leading brands
              as well as showcase of the history of silver jewelry in Thailand.
              The exhibition features the latest trends in silver jewelry that
              are popular among consumers in order to showcase the potential of
              Thailand’s silver industry, the talent of thai designers, the
              intricate skills of Thai artisans, and the long history of silver
              jewelry manufacturing in the country from past to present. the
              exhibition is presented in various parts.
            </Text>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default About;
