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
const Theniche = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback navigation={navigation} item={'The Niche Showcase'} />
      <ScrollView style={{backgroundColor: '#EEECE2'}}>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Image
            source={require('../../../assets/image/nice67.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>67th The Jewel Wonders Showcase</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            The Jewel Wonders showcase hosted cutting-edge jewelry showcases,
            workshops, jewelry-making demonstrations and consumer insights that
            will shape the gems and jewelry market in the near future.{'\n'}
            {'\n'}FIVE KEY TRENDS{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              (1) Neo Heritage:
            </Text>{' '}
            jewelry creations that are made and inspired by traditional
            artisanship{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              (2) Circular Jewels:
            </Text>{' '}
            jewelry items that place ethical and environmental concerns at heart
            from design to production{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              (3) Metaverse Glam:
            </Text>{' '}
            cutting-edge jewelry creations that redefine the boundaries between
            the real and digital worldse{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              (4) Minimal Luxe:
            </Text>{' '}
            simple-yet-luxurious jewelry are currently in high demand among
            young consumers{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              (5) Modern Tribe:
            </Text>{' '}
            jewelry creations that are made and inspired by traditional
            artisanshipmodern silver jewelry created by hill tribe people in the
            north of Thailand
          </Text>
        </View>
        <View style={styles.viewdetail}>
          <Image
            source={require('../../../assets/image/n64.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>65th FROM PAST TO PRESENT</Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            An exhibition of contemporary silver jewelry from leading brands as
            well as a showcase of the history of silver jewelry in Thailand. The
            exhibition features the latest trends in silver jewelry that is
            catered to niche markets. The selected themes include Generation
            Silver, Modern Heritage, Fashion Charm, Lifestyle Silverware, and
            Urban Tribe.
          </Text>
        </View>
        <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
          <Image
            source={require('../../../assets/image/n63.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>64th THE NICHE SHOWCASE</Text>
          <Text style={[styles.textdetail, {color: '#636363'}]}>
            A showcase of unique jewelry of emerging themes which are the target
            markets that have high growth potential in global markets, including
            5 groups, namely:{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              High Jewelry :
            </Text>{' '}
            Rare jewelry pieces associated with royals{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Heritage & Craftsmanship :
            </Text>{' '}
            Jewelry with an emphasis on arts, culture and craftsmanship{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Spiritual Power :
            </Text>{' '}
            Jewelry of belief and opulence{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Luxe Men :
            </Text>{' '}
            Jewelry for men{'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Beyond Jewelry :
            </Text>{' '}
            Lifestyle items decorated with a variety of precious materials
          </Text>
        </View>
        <View style={styles.viewdetail}>
          <Image
            source={require('../../../assets/image/n62.png')}
            style={styles.imgdetail}
          />
          <Text style={styles.textheader}>63rd THE NICHE SHOWCASE</Text>
          <Text style={[styles.textdetail, {color: '#fff'}]}>
            Department of International Trade Promotion, Ministry of Commerce
            highlights the craftsmanship of Thai artisans under the theme of
            “Thailand’s Magic Hands: The Spirit of Jewelry-Making” at The Niche
            Showcase exhibition featuring 5 product groups with potential for
            trade in overseas markets: {'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              High Jewelry :
            </Text>{' '}
            Jewelry associated with royals (The highlight display is the replica
            of the Great Crown of Victory) made from the model of the crown that
            Rama IV or His Majesty King Mongkut granted to Napoleon III in 1861,
            representing the elaborated jewelry-making techniques of Thai
            artisans, made by Gallery Ver {'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Heritage & Craftsmanship :
            </Text>{' '}
            Jewelry representing arts and culture inspired by Thai heritage such
            as flower garlands and crowns by PHOPHAN JEWELRY {'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Spiritual Power :
            </Text>{' '}
            Jewelry of belief and opulence such as jewelry relating to Naga or
            mythological creatures from brands such as Bobby Gems & Jewelry and
            Jewel Pelle {'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Luxe Men :
            </Text>{' '}
            Jewelry for men from rings, bracelets, to other jewelry items from
            brands such as Thammada Studio and Phakin {'\n'}
            <Text style={[styles.textdetail, {color: '#DAA560'}]}>
              Beyond Jewelry :
            </Text>{' '}
            Other lifestyle products with an emphasis on gems and jewelry
            materials from brands such as PHYA and MYSTIC GOLD
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Theniche;
