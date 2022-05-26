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

const Thenewfaces = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'The New Faces'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewdetail}>
            <Image
              source={require('../../../assets/image/652.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>65th THE NEW FACES</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              The New Faces is one of BGJF’s highlights providing a variety of
              jewelry creation to serve various people’s lifestyle. This project
              focuses on highlighting the talent of Thai artisans, the
              creativity of young designers, and the exciting new collections
              from up-and-coming jewelers across Thailand. It also helps
              developing SMEs nationwide to promote Thai jewelry businesses to
              meet overseas buyers. The current edition showcases 179 exhibitors
              joining this project.
            </Text>
          </View>
          <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
            <Image
              source={require('../../../assets/image/642.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>64th THE NEW FACES</Text>
            <Text style={[styles.textdetail, {color: '#636363'}]}>
              Apart from its reputation as a manufacturing base for quality
              jewelry, Thailand is also home to young designers and fresh new
              brands making a debut in the local and international market. The
              New Faces featured jewelry products from 160 SMEs from 31
              provinces across Thailand, such as Chanthaburi, Tak, Sukhothai,
              Chiang Mai, Lampang, Pichit, Surin, Prachuab Khiri Khan, Nakhon
              Sri Thammarat, and Phang Nga, with an aim to provide the brands
              with an opportunity to expand to overseas markets, while
              increasing exposure and sales. With their glittering creativity
              and passion, newly-established brands from the New Faces offer a
              wide range of fresh well-designed products at the 64th Bangkok
              Gems & Jewelry Fair
            </Text>
          </View>
          <View style={styles.viewdetail}>
            <Image
              source={require('../../../assets/image/632.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>63rd THE NEW FACES</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              Department of International Trade Promotion, Ministry of Commerce,
              offers a showcase of Thai SMEs manufacturers and designers with
              intricate craftsmanship from across the country, with an aim to
              provide an opportunity to participants in order to expand to
              overseas markets, while increasing the brands’ exposure and sales.
              The 63rd Bangkok Gems & Jewelry Fair is showcasing 123 exhibitors
              showcasing a variety of products ranging from gold and silver
              jewelry, gemstones, to fashion jewelry with unique designs.
              Highlight brands are Lek Silver with their handmade silver jewelry
              which is delicately made with modern designs and is easy to wear,
              CKK Shop that showcases jewelry inspired by culture and different
              beliefs such as whale’s tail which supports love, or feathers that
              will help the wearer eliminate obstacles, and Aclaire with its
              colored stones to enhance good luck, and jewelry made from
              stingray leather that will bring wealth and protect the wearer
              from harm.
            </Text>
          </View>
          <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
            <Image
              source={require('../../../assets/image/622.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>62nd THE NEW FACES</Text>
            <Text style={[styles.textdetail, {color: '#636363'}]}>
              With over 90% of Thai jewelers operating as SMEs, the variety of
              jewelry designs is endless. For the 62nd edition of the Bangkok
              Gems & Jewelry Fair, the DITP has carefully selected over 150
              small jewelry brands with great potential from across Thailand for
              The New Faces showcase that is bigger and better than previous
              editions of the fair. From brands specializing in dainty designs
              to brands proudly showcasing bold statement jewelry, from classic,
              timeless designs to abstract and cutting-edge pieces for the
              fashionista, find them all at The New Faces showcase!
            </Text>
          </View>
          <View style={styles.viewdetail}>
            <Image
              source={require('../../../assets/image/612.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>61st THE NEW FACES</Text>
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              Department of International Trade Promotion, Ministry of Commerce,
              offers a showcase of Thai SMEs manufacturers and designers with
              intricate craftsmanship from across the country, with an aim to
              provide an opportunity to participants in order to expand to
              overseas markets, while increasing the brands’ exposure and sales.
              The 63rd Bangkok Gems & Jewelry Fair is showcasing 123 exhibitors
              showcasing a variety of products ranging from gold and silver
              jewelry, gemstones, to fashion jewelry with unique designs.
              Highlight brands are Lek Silver with their handmade silver jewelry
              which is delicately made with modern designs and is easy to wear,
              CKK Shop that showcases jewelry inspired by culture and different
              beliefs such as whale’s tail which supports love, or feathers that
              will help the wearer eliminate obstacles, and Aclaire with its
              colored stones to enhance good luck, and jewelry made from
              stingray leather that will bring wealth and protect the wearer
              from harm.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Thenewfaces;
