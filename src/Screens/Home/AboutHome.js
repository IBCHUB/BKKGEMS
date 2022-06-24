import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './stylesAbout';

const AboutHome = ({navigation}) => {
  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Suppliers');
        }}>
        <Image
          source={require('../../../assets/image/sa.png')}
          style={styles.imgsa}
        />
      </TouchableOpacity>
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
        <View style={styles.row}></View>
      </View>
      <Text style={styles.textalin}>
        Discover Gems & Jewelry Suppliers, Brands and Manufacturers.
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
          <Text style={[styles.textnumber, {marginTop: 5}]}>50+</Text>
          <Text style={[styles.textsup, {fontSize: 10}]}>
            Country from Around the world
          </Text>
        </View>
      </View>
      <Image
        source={require('../../../assets/image/2200.jpeg')}
        style={styles.imgpat}
      />
      <Text style={styles.textsuphead}>
        The coming back of the ‘67th Bangkok Gems and Jewelry Fair’ after the
        Covid-19 outbreak
      </Text>
      <Text style={[styles.textdetail, {marginBottom: 20}]}>
        Thailand’s gems and jewelry industry has long been an important
        contributor to the country’s economy, thriving through economic
        slowdowns over the decades, with international shipments worth more than
        6 billion US dollars last year.
      </Text>
      {/* <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.bkkgems.com/newdetail/15');
        }}
        style={[
          styles.button,
          {alignSelf: 'flex-start', marginLeft: 20, zIndex: 999},
        ]}>
        <Text style={styles.textbutton}>Read More</Text>
      </TouchableOpacity> */}
      <View style={styles.head}>
        <Image
          source={require('../../../assets/image/12.png')}
          style={styles.logob}
        />
      </View>
      <View style={styles.bar}>
        <Image
          source={require('../../../assets/image/123.png')}
          style={styles.logob1}
        />
      </View>
    </View>
  );
};

export default AboutHome;
