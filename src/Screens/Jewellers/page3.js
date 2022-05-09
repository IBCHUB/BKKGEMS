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
const page3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'The Jewellers'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewdetail}>
            <Text style={styles.textheader}>
              63st The Jeweller and {'\n'}Innovation Design Zone (IDZ)
            </Text>
            <Image
              source={require('../../../assets/image/Jewellers/23.png')}
              style={styles.imgdetail2}
            />
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              Discover uniquely-designed jewelry from designers who have
              participated in the Designers’ Room and Talent Thai project held
              by the Department of International Trade Promotion, Ministry of
              Commerce at the 63rd Bangkok Gems & Jewelry Fair in The Jewellers
              exhibition. Meet fast-growing Thai brands making a name for
              themselves such as Monvatoo, maker of animal-themed statement
              jewelry in fantasy styles; or Yolwaree, with their newest Waree
              Collection which has been inspired by the flow of water in the
              creation of feminine jewelry pieces such as necklaces and
              earrings; and Gleamwood, a brand that utilizes wood combined with
              materials such as rope, silver, and leather to make modern
              Thai-styled jewelry collections.
            </Text>
          </View>
          <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
            <Image
              source={require('../../../assets/image/Jewellers/24.png')}
              style={styles.imgdetail2}
            />
            <Text style={styles.textheader}>Innovation Design Zone (IDZ)</Text>
            <Text style={[styles.textdetail, {color: '#636363'}]}>
              Department of International Trade Promotion, Ministry of Commerce
              features innovative and uniquely-designed gems and jewelry
              products at the 63rd Bangkok Gems & Jewelry Fair at the Innovation
              and Design Zone (IDZ). The exhibition showcases creations from
              jewelry brands including those developed by university students,
              with the aim to develop commercial uses, seek business matching
              partners, and showcase highlight products. {'\n'}
              {'\n'}Petchploy Panyasai uses polymer clay — a flexible material
              that hardens with baking – combined with glass blowing techniques
              to make jewelry, while Nympheart selects natural wood with defects
              to combine with resin to make unique necklaces, and Siam Fashion
              Jewelry with its Elegant Spring Summer collection that highlights
              Thai craftsmanship by casting zinc and tin together with a neat
              enamel painting technique to craft beautifully detailed jewelry
              pieces.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default page3;
