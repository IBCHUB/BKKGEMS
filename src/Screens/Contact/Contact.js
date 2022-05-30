import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {contactUs} from '../../action/auth.action';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {ViewScale} from '../../config/ViewScale';
const Contact = ({navigation, dispatch}) => {
  const [modal, setmodal] = useState(false);
  const _contactUs = async values => {
    try {
      var request =
        'contact_name=' +
        values.name +
        '&contact_company_name=' +
        values.company +
        '&contact_email=' +
        values.email +
        '&contact_subject=' +
        values.subject +
        '&contact_message=' +
        values.message;

      const response = await dispatch(contactUs(request));
      console.log(response);
      if (response.res_code == '200') {
        setmodal(true);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
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
              <AntDesign name="close" size={ViewScale(20)} color="#444444" />
            </TouchableOpacity>
            <FontAwesome5
              name="check-double"
              size={26}
              color="#DAA560"
              style={styles.icon1}
            />
            <Text style={styles.texttopicmodal}>Sent Already</Text>

            <TouchableOpacity
              onPress={() => {
                setmodal(false);
                setTimeout(() => {
                  navigation.goBack('');
                }, 100);
              }}
              style={styles.buttonsec}>
              <Text style={styles.textsec}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'CONTACT US'} />
        <ScrollView style={{backgroundColor: '#000', marginBottom: 10}}>
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
              _contactUs(values);
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
              touched,
              isValid,
              handleSubmit,
            }) => (
              <Fragment>
                <View style={styles.viewinput}>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                    value={values.name}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Company"
                    onChangeText={handleChange('company')}
                    onBlur={() => setFieldTouched('company')}
                    value={values.company}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#646363"
                    placeholder="Subject"
                    onChangeText={handleChange('subject')}
                    onBlur={() => setFieldTouched('subject')}
                    value={values.subject}
                  />
                  <TextInput
                    style={styles.input1}
                    placeholderTextColor="#646363"
                    placeholder="Type message..."
                    multiline
                    onChangeText={handleChange('message')}
                    onBlur={() => setFieldTouched('message')}
                    value={values.message}
                  />
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.botton}>
                    <Text style={styles.textbotton}>SEND MESSAGE</Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            )}
          </Formik>
          {/* <View style={styles.viewinput}>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Company Name" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Subject" />
            <TextInput
              style={styles.input1}
              placeholder="Type message..."
              multiline
            />
            <TouchableOpacity style={styles.botton}>
              <Text style={styles.textbotton}>SEND MESSAGE</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.viewtags}>
            <Text style={styles.textt}>SHOW ORGANIZER</Text>
            <Text style={styles.textags}>
              Office of Lifestyle Trade Promotion Department of International
              Trade Promotion Ministry of Commerce, Thailand
            </Text>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban.png')}
              />
              <Text style={styles.textags1}>+66 2507 8392 to 3</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban2.png')}
              />
              <Text style={styles.textags1}>+66 2547 4292</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban1.png')}
              />
              <Text style={styles.textags1}>official@bkkgems.com</Text>
            </View>
            <View style={{marginTop: ViewScale(30)}} />
            <Text style={styles.textt}>EXHIBITOR APPLICATION</Text>
            <Text style={styles.textags}>
              The Gem and Jewelry Institute of Thailand (Public Organization)
            </Text>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban.png')}
              />
              <Text style={styles.textags1}>+66 2634 4999 ext. 635-642</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban2.png')}
              />
              <Text style={styles.textags1}>+66 2634 4970</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/ban1.png')}
              />
              <Text style={styles.textags1}>bd@git.or.th</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
