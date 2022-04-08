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
import {contactadd, Country} from '../../action/auth.action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';

const ExhibitorsDetail = ({navigation, route, dispatch}) => {
  const {item} = route.params;

  const [modal, setmodal] = useState(false);
  const [page, setpage] = useState(0);
  const [city, setcity] = useState([]);
  // console.log(city);
  const placeholder = {
    label: 'Country',
    value: null,
    color: '#646363',
  };
  const _contact = async values => {
    try {
      var request =
        'company_id=' +
        item.company_id +
        '&company_email=' +
        '' +
        '&company_name=' +
        '' +
        'contact_name=' +
        values.name +
        '&country_id=' +
        '' +
        '&businesstype_id=' +
        '' +
        '&contact_phone=' +
        '' +
        '&contact_email=' +
        '' +
        '&contact_message=' +
        '';

      const response = await dispatch(contactadd(request));
      console.log(response);
      if (response.res_code == '200') {
        setmodal(true);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _Country = async values => {
    try {
      const response = await dispatch(Country());
      console.log(response);
      if (response.res_code == '00') {
        setcity(
          response.res_result.map(val => ({
            label: val.country_name,
            value: val.country_name,
          })),
        );
        console.log('1111');
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Country();
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodal(!modal);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Text style={styles.textopmodal}>Contact to company</Text>
            <Formik
              initialValues={{
                name: '',
                company: '',
                email: '',
                subject: '',
                message: '',
              }}
              onSubmit={values => {
                // console.log(values);
              }}
              validationSchema={yup.object().shape({
                name: yup.string().required(),
                company: yup.string().required(),
                email: yup.string().email().required(),
                subject: yup.string().required(),
                message: yup.string().required(),
              })}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                setFieldValue,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <Fragment>
                  <View>
                    <View style={styles.viewinput}>
                      <TextInput
                        placeholder="Name"
                        placeholderTextColor="#646363"
                        style={styles.input}
                      />
                    </View>
                    <View style={styles.viewinput}>
                      <RNPickerSelect
                        onValueChange={value => setFieldValue('country', value)}
                        onBlur={() => setFieldTouched('fullname')}
                        placeholder={placeholder}
                        items={city}
                        style={styles.picker}
                        Icon={() => {
                          return (
                            <FontAwesome5
                              name="chevron-down"
                              size={20}
                              color="#646363"
                              style={{marginRight: 15, marginTop: 5}}
                            />
                          );
                        }}
                      />
                    </View>
                    <View style={styles.viewinput}>
                      <TextInput
                        placeholder="Business Type"
                        placeholderTextColor="#646363"
                        style={styles.input}
                      />
                    </View>
                    <View style={styles.viewinput}>
                      <TextInput
                        placeholder="Tel."
                        placeholderTextColor="#646363"
                        style={styles.input}
                      />
                    </View>
                    <View style={styles.viewinput}>
                      <TextInput
                        placeholder="Email"
                        placeholderTextColor="#646363"
                        style={styles.input}
                      />
                    </View>
                    <View style={styles.viewinput1}>
                      <TextInput
                        placeholder="Message"
                        placeholderTextColor="#646363"
                        style={styles.input}
                        multiline
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.touchedit}>
                      <Text style={styles.textedit}>SEND MESSAGE</Text>
                    </TouchableOpacity>
                  </View>
                </Fragment>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <ScrollView>
        <Headerback navigation={navigation} />
        <View style={styles.viewHeader}>
          <Image source={item.icon} style={styles.logo} />
          <Text style={styles.textTopic}>{item.text}</Text>
          <Text style={styles.texthead}>GEMSTONES</Text>
          <View style={styles.row}>
            <MaterialIcons name="location-pin" color="#D7A360" size={15} />
            <Text style={styles.textloca}>Bangkok, Thailand</Text>
          </View>
          <View style={[styles.row, {marginTop: 10}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.button}>
              <Text style={styles.textbutton}>LIVE CHAT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setmodal(true);
              }}
              style={styles.button}>
              <Text style={styles.textbutton}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Meeting')}
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
                    fontSize: page === 0 ? 20 : 18,
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
                    fontSize: page === 1 ? 20 : 17,
                  },
                ]}>
                ABOUT
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {page === 0 && <Product item={item} />}
          {page === 1 && <Aboutexhi />}
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
