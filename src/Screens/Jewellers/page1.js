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
const page1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'The Jewellers'} />
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewdetail}>
            <Text style={styles.textheader}>65th The Jewellers</Text>
            <Image
              source={require('../../../assets/image/Jewellers/cover.png')}
              style={styles.imgdetail}
            />
            <Text style={[styles.textdetail, {color: '#fff'}]}>
              A growing number of Thai jewelry designers is exciting in the
              extreme, and bodes well for the future of the Thai jewelry
              industry. Some designers and brands are already well-known
              internationally and more are expected to break into the global
              scene. Their international success is the result of great talent
              and inner spirit plus strong support from suppliers, manufacturers
              and skilled labour force who offer both reliability and quality in
              what they produce. Catch a glimpse of Thai jewelry design at our
              showcase and be inspired.
            </Text>
          </View>
          <View style={styles.viewdetail1}>
            <Image
              source={require('../../../assets/image/Jewellers/1.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/2.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/3.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/4.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/5.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/6.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/7.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/8.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/9.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/10.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/11.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/12.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/13.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/14.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/15.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/16.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/17.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/18.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/19.png')}
              style={styles.imgdetail1}
            />
            <Image
              source={require('../../../assets/image/Jewellers/20.png')}
              style={styles.imgdetail1}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default page1;
