import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const aboutexhi = () => {
  return (
    <View style={styles.containerabout}>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>BRAND</Text>
        <Text style={styles.textconten}>Gold Stone</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>CATEGORY</Text>
        <Text style={styles.textconten}>Gemstones</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>BOOTH</Text>
        <Text style={styles.textconten}>1234</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>CONTACT NAME</Text>
        <Text style={styles.textconten}>
          Mr. Gopal Madhu 1249 Gems Tower, 10Th Floor , Suite 117 A, Charoen
          Krung , Bang Rak, Bangkok 10500 Thailand
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>ADDRESS</Text>
        <Text style={styles.textconten}>669 5958 5490</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>TELEPHONE</Text>
        <Text style={styles.textconten}>669 5958 5490</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>MOBILE FAX</Text>
        <Text style={styles.textconten}>66 2595 8549</Text>
      </View>
      <View style={styles.liner} />
      {/* ABOUT */}
      <Text style={styles.textsupabout}>ABOUT</Text>
      <Text style={styles.textdetailabout}>
        For over 20 years, Golden Stone is recognized as a major influence that
        continues to shape the jewelry industry in Historic Jewelry District of
        Downtown Los Angeles with its meticulously handcrafted one-of-a-kind
        creations that redefine luxury in Fine Jewelry.
      </Text>
      <Text style={styles.textsupabout}>SOCIAL MEDIA</Text>
      <View style={styles.rowsocial}>
        <TouchableOpacity style={styles.listsocial}>
          <Fontisto
            name="facebook"
            size={20}
            color={'#DAA560'}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listsocial}>
          <Fontisto
            name="instagram"
            size={20}
            color={'#DAA560'}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listsocial}>
          <AntDesign
            name="youtube"
            size={20}
            color={'#DAA560'}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.textsupabout, {marginTop: 20}]}>VIDEO</Text>
      <TouchableOpacity style={styles.rowsocial}>
        <Image
          source={require('../../../assets/image/Iconvedio.png')}
          style={styles.vedio}
        />
        <Text style={styles.textconten}>Company Presentation 2021</Text>
      </TouchableOpacity>
      <Text style={[styles.textsupabout, {marginTop: 20}]}>DOWNLOAD</Text>
      <TouchableOpacity style={styles.buttondowload}>
        <Text style={styles.textpage}>Catalog 2021</Text>
        <Ionicons
          name="download-outline"
          size={20}
          color={'#000'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default aboutexhi;
