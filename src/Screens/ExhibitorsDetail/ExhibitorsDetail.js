import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
  TextInput,
  Linking,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Product from './product';
import Aboutexhi from './aboutexhi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {contactadd} from '../../action/auth.action';
import {Country} from '../../action/data.action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';
import {Exprofile} from '../../action/data.action';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {ViewScale} from '../../config/ViewScale';
const ExhibitorsDetail = ({navigation, route, dispatch}) => {
  const {res} = route.params;

  const [detail, setdetail] = useState(res);
  console.log(detail.c_id);
  const [modal, setmodal] = useState(false);
  const [page, setpage] = useState(0);

  const placeholder = {
    label: 'Country',
    value: null,
    color: '#646363',
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <ScrollView>
        <Headerback navigation={navigation} />
        <View style={styles.viewHeader}>
          <Image
            source={{uri: detail.company_logo}}
            defaultSource={require('../../../assets/image/oo.png')}
            style={styles.logo}
          />
          <Text style={styles.textTopic}>{detail.company_name}</Text>
          <Text style={styles.texthead}>{detail.product_category_name_en}</Text>
          <View style={styles.row}>
            <MaterialIcons name="location-pin" color="#D7A360" size={15} />
            <Text style={styles.textloca}>
              {detail.city}, {detail.country}
            </Text>
          </View>
          <View style={[styles.row, {marginTop: 10}]}>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.button}>
              <Text style={styles.textbutton}>LIVE CHAT</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.bkkgems.com/exprofile/' + detail.c_id,
                );
              }}
              style={styles.button}>
              <Text style={styles.textbutton}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.bkkgems.com/exprofile/' + detail.c_id,
                );
                // navigation.navigate('Meeting', {detail})
              }}
              style={styles.button}>
              <Text style={styles.textbutton}>MEETING</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: '#fff'}}>
          <Animated.View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setpage(0);
              }}
              style={[
                styles.page,
                {
                  borderBottomWidth: page === 0 ? 0.5 : 0,
                  borderBottomColor: page === 0 ? '#DAA569' : '#000',
                },
              ]}>
              <Text
                style={[
                  styles.textpage,
                  {
                    color: page === 0 ? '#DAA560' : '#000',
                    fontSize: page === 0 ? ViewScale(20) : ViewScale(18),
                  },
                ]}>
                PRODUCT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpage(1);
              }}
              style={[
                styles.page,
                {
                  borderBottomWidth: page === 1 ? 0.5 : 0,
                  borderBottomColor: page === 1 ? '#DAA569' : '#000',
                },
              ]}>
              <Text
                style={[
                  styles.textpage,
                  {
                    color: page === 1 ? '#DAA560' : '#000',
                    fontSize: page === 1 ? ViewScale(20) : ViewScale(17),
                  },
                ]}>
                ABOUT
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {page === 0 && <Product detail={detail} />}
          {page === 1 && <Aboutexhi detail={detail} />}
          <View style={{marginBottom: 80}} />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitorsDetail);
//product_img_name  รูป
