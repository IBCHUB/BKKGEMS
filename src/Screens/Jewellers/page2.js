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
const page2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'The Jewellers'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewdetail}>
            <Text style={styles.textheader}>
              64st The Jeweller and {'\n'}Innovation Design Zone (IDZ)
            </Text>
            <Image
              source={require('../../../assets/image/Jewellers/21.png')}
              style={styles.imgdetail}
            />
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              An exhibition from 23 designers who have participated in the
              Designers’ Room and Talent Thai project with unique designs and
              stories behind the brand. This activity is aimed at promoting and
              offering an opportunity for commercial promotion of designer
              jewelry.
            </Text>
          </View>
          <View style={[styles.viewdetail, {backgroundColor: '#EEECE2'}]}>
            <Image
              source={require('../../../assets/image/Jewellers/22.png')}
              style={styles.imgdetail}
            />
            <Text style={styles.textheader}>Innovation Design Zone (IDZ)</Text>
            <Text style={[styles.textdetail, {color: '#636363'}]}>
              A platform where innovative jewelry businesses showcase their
              products to demonstrate the potential of Thai innovation and to
              attract commercial opportunities in line with the Creative
              Thailand policy. The showcase is divided into 3 areas.{'\n'}
              {'\n'}- Innovation and Design Showcase is an exhibition of
              innovative works and designs as well as the promotional area for
              the T MARK symbol where interested exhibitors can register to
              participate in the program. {'\n'}
              {'\n'}- Innovation and Design Bazaar is a space for promoting
              innovative Thai jewelry entrepreneurs and startups to participate
              in business matching activities, and conduct marketing activities
              to sell their products and services. {'\n'}
              {'\n'}- Creative Industry is an exhibition space demonstrating
              research in the gems and jewelry industry from the educational
              organizations, namely, the Office of the Higher Education
              Commission (OHEC) by the College of Creative Industry,
              Srinakharinwirot University.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default page2;
