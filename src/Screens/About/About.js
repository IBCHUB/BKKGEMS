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
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
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
          jewelry trade fairs in the industry. Organized by Thailand’s
          Department of International Trade Promotion (DITP) and Gems Jewelry
          Institute of Thailand (Public Organization) or GIT in September, BGJF
          is regarded as a significant trading arena where all key players in
          the global gems and jewelry business can achieve their purposes of
          sourcing, trading and networking.
        </Text>
        <Text style={styles.textdetail}>
          Thailand’s BGJF is a globally-trusted marketplace for a wide range of
          quality products, extensive resources, and innovative designs.
          Especially, it is globally recognized as a sourcing and manufacturing
          hub as well as the gathering of professional and delicate jewelry
          craftsmanship.
        </Text>
        <Text style={styles.textdetail}>
          BGJF is featuring a wide range of precious stones, semi-precious
          stones, rough stones and synthetic stones sourced from Thailand and
          the supply chain of gemstones around the world. The fair also offers
          extensive of jewelry from manufacturers in Thailand and overseas,
          namely, pearls, diamonds, gold jewelry, fine jewelry, silver jewelry,
          costume & fashion jewelry, including display & packaging, jewelry
          parts, equipment & tools machinery.
        </Text>
        <Text style={styles.textdetail}>
          The fair is expecting to welcome 10,000 buyers and visitors including
          all stakeholders from global gems and jewelry industry. For the number
          of exhibitors, it covers 700 companies in 1,000 booths from selected
          domestic and international exhibitors.
        </Text>
        <Image
          source={require('../../../assets/image/about2.png')}
          style={styles.imgHeader}
        />
        <View style={styles.viewdetail}>
          <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
            Expected number of exhibitors
          </Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            900 companies in 2,000 booths from selected domestic and
            international exhibitors.
          </Text>
          <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
            Product Groups
          </Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            ◆ Gemstones (Precious Stones, Semi- Precious Stones and Rough
            stones){'\n'}◆ Pearls {'\n'}◆ Diamonds{'\n'}◆ Gold Jewelry{'\n'}◆
            Fine Jewelry {'\n'}◆ SilverJewelry {'\n'}◆ Costume & FashionJewelry{' '}
            {'\n'}◆ Synthetic Stones {'\n'}◆ Display & Packaging{'\n'}◆ Jewelry
            Parts{'\n'}◆ Equipment & Tools and Machinery
          </Text>
          <Text style={[styles.textheader, {alignSelf: 'flex-start'}]}>
            Visitor Groups
          </Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            ◆ Importers {'\n'}◆ Boutiques {'\n'}◆ Manufacturers {'\n'}◆ Fashion
            Showrooms {'\n'}◆ Trading Companies and Brokers {'\n'}◆ Department
            Stores {'\n'}◆ Distributors{'\n'}◆ Buying Agents
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
            An exhibition of contemporary silver jewelry form leading brands as
            well as showcase of the history of silver jewelry in Thailand. The
            exhibition features the latest trends in silver jewelry that are
            popular among consumers in order to showcase the potential of
            Thailand’s silver industry, the talent of thai designers, the
            intricate skills of Thai artisans, and the long history of silver
            jewelry manufacturing in the country from past to present. the
            exhibition is presented in various parts.
          </Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default About;
