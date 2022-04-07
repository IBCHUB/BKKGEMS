import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './stylesAbout';

const AboutHome = ({navigation}) => {
  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <Image
        source={require('../../../assets/image/sa.png')}
        style={styles.imgsa}
      />
      <Image
        source={require('../../../assets/image/imgjewelry.png')}
        style={styles.imgjew}
      />
      <Text style={styles.textHeader}>ABOUT</Text>
      <Text style={styles.textdetail}>
        Bangkok Gems & Jewelry Fair (BGJF) is one of the world’s most renowned
        and longest-celebrated gems and jewelry trade fair in the industry.
        Organized on a biannual basis by Thailand’s Department of International
        Trade Promotion (DITP)
      </Text>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About');
          }}
          style={styles.button}>
          <Text style={styles.textbutton}>Read More</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/image/logoDITP.png')}
            style={styles.logoditp}
          />
          <Image
            source={require('../../../assets/image/logo100.png')}
            style={styles.logo100}
          />
        </View>
      </View>
      <Text style={styles.textalin}>
        Discover Gems & Jewelry Suppliers, Brands And Manufacturers.
      </Text>
      <View style={styles.view}>
        <View style={styles.review}>
          <Text style={styles.textnumber}>1,000+</Text>
          <Text style={styles.textsup}>Products</Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.textnumber}>200+</Text>
          <Text style={styles.textsup}>Exhibitors</Text>
        </View>
        <View style={styles.review1}>
          <Text style={styles.textnumber}>50+</Text>
          <Text style={[styles.textsup, {fontSize: 10}]}>
            Country from Around the world
          </Text>
        </View>
      </View>
      <Image
        source={require('../../../assets/image/pet.png')}
        style={styles.imgpat}
      />
      <Text style={styles.textsuphead}>Exquisiteness of South East Asia</Text>
      <Text style={styles.textdetail}>
        Gems and jewelry rank at No.3 of Thailand’s most exported industries,
        creating over a millionjobs and generating more than USD 15,000 million.
      </Text>
      <View style={styles.head}>
        <Image
          source={require('../../../assets/image/12.png')}
          style={styles.logob}
        />
      </View>
      <View style={styles.bar} />
    </View>
  );
};

export default AboutHome;
