import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {ViewScale} from '../../config/ViewScale';
const aboutexhi = ({detail}) => {
  console.log(detail);
  return (
    <View style={styles.containerabout}>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>BRAND</Text>
        <Text style={styles.textconten}>
          {detail.brand === '' ? '-' : detail.brand}
        </Text>
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
        <Text style={styles.textsupabout}>ADDRESS</Text>
        <Text style={styles.textconten}>{detail.company_address}</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>CONTACT NAME</Text>
        <Text style={styles.textconten}>{detail.contact}</Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>TELEPHONE</Text>
        <Text style={styles.textconten}>
          {detail.company_phone === null ? '-' : detail.company_phone}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>MOBILE</Text>
        <Text style={styles.textconten}>
          {detail.company_phone === null ? '-' : detail.company_phone}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>EMAIL</Text>
        <Text style={styles.textconten}>
          {detail.company_email === '' ? '-' : detail.company_email}
        </Text>
      </View>
      <View style={styles.rowsocial}>
        <Text style={styles.textsupabout}>WEBSITE</Text>
        <Text style={styles.textconten}>
          {detail.website === '' ? '-' : detail.website}
        </Text>
      </View>
      <View style={styles.liner} />
      {/* ABOUT */}
      <Text style={styles.textsupabout}>ABOUT</Text>
      <Text style={styles.textdetailabout}>
        {detail.about === '' ? '-' : detail.about}
      </Text>
      <Text style={styles.textsupabout}>SOCIAL MEDIA</Text>
      <View style={styles.rowsocial}>
        {detail.company_facebook != '' && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(detail.company_facebook);
            }}
            style={styles.listsocial}>
            <Fontisto
              name="facebook"
              size={ViewScale(20)}
              color={'#DAA560'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
        {detail.company_instagram != '' && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(detail.company_instagram);
            }}
            style={styles.listsocial}>
            <Fontisto
              name="instagram"
              size={ViewScale(20)}
              color={'#DAA560'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
        {detail.company_youtube != '' && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(detail.company_youtube);
            }}
            style={styles.listsocial}>
            <AntDesign
              name="youtube"
              size={ViewScale(20)}
              color={'#DAA560'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={[styles.textsupabout, {marginTop: ViewScale(20)}]}>
        VIDEO
      </Text>
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
      <Text style={[styles.textsupabout, {marginTop: ViewScale(20)}]}>
        DOWNLOAD
      </Text>
      <TouchableOpacity style={styles.buttondowload}>
        <Text style={styles.textpage}>Catalog {detail.year}</Text>
        <Ionicons
          name="download-outline"
          size={ViewScale(20)}
          color={'#000'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default aboutexhi;
