import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const aboutexhi = ({detail}) => {
  console.log(detail);
  return (
    <View style={styles.containerabout}>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>BRAND</Text>
        <Text style={styles.textconten}>{detail.brand}</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>CATEGORY</Text>
        <Text style={styles.textconten}>{detail.product_category_name_en}</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>BOOTH</Text>
        <Text style={styles.textconten}>
          {detail.booth_no === '' ? '-' : detail.booth_no}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>CONTACT NAME</Text>
        <Text style={styles.textconten}>
          {detail.contact} {detail.company_address}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>ADDRESS</Text>
        <Text style={styles.textconten}>{detail.company_phone}</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>TELEPHONE</Text>
        <Text style={styles.textconten}>
          {detail.contact_phone === null ? '-' : detail.contact_phone}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>MOBILE FAX</Text>
        <Text style={styles.textconten}>
          {detail.company_fax === '' ? '-' : detail.company_fax}
        </Text>
      </View>
      <View style={styles.liner} />
      {/* ABOUT */}
      <Text style={styles.textsupabout}>ABOUT</Text>
      <Text style={styles.textdetailabout}>{detail.about}</Text>
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
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(detail.video_full_url);
        }}
        style={styles.rowsocial}>
        <Image
          source={require('../../../assets/image/Iconvedio.png')}
          style={styles.vedio}
        />
        <Text style={styles.textconten}>
          Company Presentation {detail.year}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.textsupabout, {marginTop: 20}]}>DOWNLOAD</Text>
      <TouchableOpacity style={styles.buttondowload}>
        <Text style={styles.textpage}>Catalog {detail.year}</Text>
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
