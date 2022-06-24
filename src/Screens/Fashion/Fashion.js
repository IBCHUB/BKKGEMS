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
import Headerback from '../../Components/Headerback';
import styles from './styles';
const Fashion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
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
            the networking reception was held under the concept of ‘Bangkok Gems
            & Jewelry Elite Club’ reflecting the social gathering in the
            atmosphere of the 50s. The Fabulous Jewel Society fashion show was
            featured luxurious jewelry collections from Dhanu, Jewelry Center by
            Darach, V&P Jewelry and Iris Gold, for instance, worn by celebrities
            and models and accompanied with a live musical performance.
          </Text>
        </View>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Image
            source={require('../../../assets/image/Jewellers/30.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>64th FASHION SHOW</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            The pride of Thai art is conveyed through the first jewelry
            presentation in the form of a contemporary Thai performance created
            by Pichet Klunchun, an internationally-acclaimed Thai artist and the
            winner of the Silpathorn Award for Performing Arts in 2006. The
            performance was created under the concept of Thailand’s Magic Hands
            presented at the networking reception, which was part of the 64th
            Bangkok Gems and Jewelry Fair, held on 10 September 2019. The Fair
            is set to showcase the potential of Thailand as the world’s gems and
            jewelry Hub, empowered by Thai craftsmanship.
          </Text>
        </View>
        <View style={styles.viewdetail}>
          <Image
            source={require('../../../assets/image/63.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>63rd FASHION SHOW</Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            The show was created under the concept of ‘the Silhouette of
            Thailand’s Magic Hands’, which was designed by Mr. Ek Thongprasert,
            a famous Thai designer and the owner of Ek Thongprasert brand. The
            show represented the combination of the Thai identity through the
            performance of the shadow puppetry (Nang Yai) together with the
            jewelry show from various renowned brands, i.e. Pranda, Beauty Gems,
            Der Mond, Mahallati Jewelry, Blue River, Siamgems Heritage, etc.
          </Text>
        </View>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Text style={styles.textheader}>62nd FASHION SHOW</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            One of the most intriguing events held at every edition of the
            Bangkok Gems & Jewelry Fair is the extravagant jewelry fashion show
            that highlights the beautiful and creative jewelry designs from the
            best jewelry brands and the most talented designers in the country.
            {'\n'}
            {'\n'}
            The 62nd Bangkok Gems & Jewelry Fair hosted an extravagant fashion
            show under the theme “Queen of Jewelry” to honor the royal projects
            of Her Majesty Queen Sirikit who dedicated her life to promoting
            arts and culture as well as helping her subjects generate income.
            This fashion show highlights jewelry from Thai manufacturers which
            are considered the most exquisite collections in high fashion, from
            gold jewelry made by artisans who carried on ancient ways of
            jewelry-making, contemporary gold and silver jewelry and jewelry
            featuring valuable gemstones with intricate designs.
          </Text>
        </View>
        <View style={styles.viewdetail}>
          <Image
            source={require('../../../assets/image/611.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>61st FASHION SHOW</Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            One of the most intriguing events held at every edition of the
            Bangkok Gems & Jewelry Fair is the extravagant jewelry fashion show
            that highlights the beautiful and creative jewelry designs from the
            best jewelry brands and the most talented designers in the country.
            For the 61st Bangkok Gems & Jewelry Fair, the spotlight will shine
            on Thailand’s heritage and craftsmanship, showcasing jewelry
            masterpieces that blend modern styles with the aesthetics of Thai
            culture, reflecting the uniqueness and elegance of Thai jewelry
            passed on through generations of dedicated artisans.{'\n'}
            {'\n'}Don’t miss the parade of glamorous jewelry designs at the 61st
            Bangkok Gems & Jewelry Fair, where the most exquisite collections
            come to life in this spectacular jewelry fashion show!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Fashion;
