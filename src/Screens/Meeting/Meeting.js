import React, {Fragment, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import {Picker} from '@react-native-picker/picker';
// import {Picker} from '@react-native-community/picker';
import * as RNLocalize from 'react-native-localize';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Meetings} from '../../action/data.action';
const Meeting = ({navigation, route, authUser, dispatch}) => {
  const {detail} = route.params;
  console.log(detail);
  const [modal, setmodal] = useState(false);
  const [viewNumber, setviewNumber] = useState(0);
  const [day, setday] = useState(new Date());
  const [time, settime] = useState(new Date());
  const [dateSelect1, setdateSelect1] = useState();
  const [dateSelect2, setdateSelect2] = useState();
  const [dateSelect3, setdateSelect3] = useState();
  const [timeSelect1, settimeSelect1] = useState();
  const [timeSelect2, settimeSelect2] = useState();
  const [timeSelect3, settimeSelect3] = useState();

  const btnSelectDeteTime = () => {
    if (viewNumber == 1) {
      setdateSelect1(new Date());
      console.log(
        dateSelect1 +
          ' ' +
          timeSelect1.getHours() +
          ':' +
          timeSelect1.getMinutes() +
          ':' +
          timeSelect1.getSeconds(),
      );
      console.log(
        moment(dateSelect1).format('MMMM D, YYYY') +
          ' ' +
          moment(timeSelect1).format('h:mm'),
      );
    } else if (viewNumber == 2) {
      setdateSelect2(new Date());
      console.log(dateSelect2);
      console.log(timeSelect2);
    } else if (viewNumber == 3) {
      setdateSelect3(new Date());
      console.log(dateSelect3);
      console.log(timeSelect3);
    }
  };

  const [datameeting, setdatameeting] = useState([]);

  const _Meeting = async values => {
    try {
      let datameeting = [
        {
          request_datetime: '2022-03-08 18:35',
          time_zone: 'Asia/Bangkok',
          GMT: '7',
        },
        {
          request_datetime: '2022-03-08 18:35',
          time_zone: 'Asia/Bangkok',
          GMT: '7',
        },
        {
          request_datetime: '2022-03-08 18:35',
          time_zone: 'Asia/Bangkok',
          GMT: '7',
        },
      ];
      console.log(datameeting);
      var request =
        'company_id=' +
        detail.c_id +
        '&text_message=' +
        values.message +
        '&user_id=' +
        authUser.token.user_id +
        '&email=' +
        authUser.token.email +
        '&fullname=' +
        authUser.token.fullname +
        '&data_meeting=' +
        datameeting +
        '&cpmpanyEmail=' +
        detail.company_email +
        '&txtComname=' +
        detail.company_name;
      console.log(request);
      const response = await dispatch(Meetings(request));
      console.log('11122', response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            <Text style={styles.textmodal}>Select Date</Text>
            <Calendar
              style={styles.calendar}
              onDayPress={day => {
                {
                  setday({
                    [day.dateString]: {
                      disabled: true,
                      startingDay: true,
                      color: 'green',
                      endingDay: true,
                    },
                  });

                  if (viewNumber == 1) {
                    setdateSelect1(day.dateString);
                  } else if (viewNumber == 2) {
                    setdateSelect2(day.dateString);
                  } else if (viewNumber == 3) {
                    setdateSelect3(day.dateString);
                  }
                  // setdate(day.dateString);
                }
              }}
              // onDayPress={day => {
              //   setday(day);
              //   console.log(day);
              // }}
              markingType={'period'}
              markedDates={day}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                // selectedDayBackgroundColor: '#FD8282',
                selectedDayTextColor: 'red',
                todayTextColor: '#00adf5',
                dayTextColor: '#FD8282',
                textDisabledColor: '#979797',
              }}
            />
            <Text style={styles.textmodal}>Select Date</Text>
            <View
              style={{
                flexDirection: 'row',
                height: 200,
                justifyContent: 'center',
              }}>
              <DatePicker
                date={time}
                mode="time"
                onDateChange={date => {
                  if (viewNumber == 1) {
                    settimeSelect1(date);
                  } else if (viewNumber == 2) {
                    settimeSelect2(date);
                  } else if (viewNumber == 3) {
                    settimeSelect3(date);
                  }
                  settime(date);
                  // console.log(date);
                }}
              />
            </View>
            {/* {"request_datetime" : "2022-03-08 18:35", "time_zone": "Asia/Bangkok", "GMT" : "7"}, */}
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
                btnSelectDeteTime();
              }}
              style={styles.buttonexhi}>
              <Text style={styles.textexhi}>OKAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <Headerback navigation={navigation} item={'REQUEST MEETING'} />
      <ScrollView style={{width: '100%'}}>
        <Text style={styles.text}>Add appointment Option</Text>
        {dateSelect1 != undefined && timeSelect1 != undefined ? (
          <View style={styles.dot1}>
            <TouchableOpacity
              onPress={() => {
                setdateSelect1();
                settimeSelect1();
              }}>
              <AntDesign
                name="minuscircleo"
                size={20}
                color="#D76060"
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
            <Text style={styles.op}>Option #1</Text>
            <Text style={styles.date}>
              {moment(dateSelect1).format('MMMM D, YYYY') +
                ' ' +
                moment(timeSelect1).format('h:mm')}
            </Text>
            <Text style={styles.op1}>
              {'Your Time Zome : '}
              {RNLocalize.getTimeZone()}
              {' ('}
              {
                new Date(dateSelect1)
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date(dateSelect1)
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
            </Text>
            <Text style={styles.op1}>
              {'Thailand Time Zone : '}
              {' ('}
              {
                new Date()
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date()
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
              {moment(new Date()).format('MMMM D, YYYY') +
                ' ' +
                moment(new Date()).format('hh:mm:ss')}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setmodal(true);
              setviewNumber(1);
            }}
            style={styles.dot}>
            <Image
              style={styles.push}
              source={require('../../../assets/image/push.png')}
            />
          </TouchableOpacity>
        )}
        {dateSelect2 != undefined && timeSelect2 != undefined ? (
          <View style={styles.dot1}>
            <TouchableOpacity
              onPress={() => {
                setdateSelect2();
                settimeSelect2();
              }}>
              <AntDesign
                name="minuscircleo"
                size={20}
                color="#D76060"
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
            <Text style={styles.op}>Option #1</Text>
            <Text style={styles.date}>
              {moment(dateSelect2).format('MMMM D, YYYY') +
                ' ' +
                moment(timeSelect2).format('h:mm')}
            </Text>
            <Text style={styles.op1}>
              {'Your Time Zome : '}
              {RNLocalize.getTimeZone()}
              {' ('}
              {
                new Date(dateSelect2)
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date(dateSelect2)
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
            </Text>
            <Text style={styles.op1}>
              {'Thailand Time Zone : '}
              {' ('}
              {
                new Date()
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date()
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
              {moment(new Date()).format('MMMM D, YYYY') +
                ' ' +
                moment(new Date()).format('hh:mm:ss')}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setmodal(true);
              setviewNumber(2);
            }}
            style={styles.dot}>
            <Image
              style={styles.push}
              source={require('../../../assets/image/push.png')}
            />
          </TouchableOpacity>
        )}
        {dateSelect3 != undefined && timeSelect3 != undefined ? (
          <View style={styles.dot1}>
            <TouchableOpacity
              onPress={() => {
                setdateSelect3();
                settimeSelect3();
              }}>
              <AntDesign
                name="minuscircleo"
                size={20}
                color="#D76060"
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
            <Text style={styles.op}>Option #3</Text>
            <Text style={styles.date}>
              {moment(dateSelect3).format('MMMM D, YYYY') +
                ' ' +
                moment(timeSelect3).format('h:mm')}
            </Text>
            <Text style={styles.op1}>
              {'Your Time Zome : '}
              {RNLocalize.getTimeZone()}
              {' ('}
              {
                new Date(dateSelect3)
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date(dateSelect3)
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
            </Text>
            <Text style={styles.op1}>
              {'Thailand Time Zone : '}
              {' ('}
              {
                new Date()
                  .toString()
                  .match(/([A-Z]+[\+-][0-9]+)/)[1]
                  .split('+')[0]
              }
              {'+'}
              {new Date()
                .toString()
                .match(/([A-Z]+[\+-][0-9]+)/)[1]
                .split('+')[1]
                .replace('00', '')
                .replace('0', '')}
              {')'}
              {moment(new Date()).format('MMMM D, YYYY') +
                ' ' +
                moment(new Date()).format('hh:mm:ss')}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setmodal(true);
              setviewNumber(3);
            }}
            style={styles.dot}>
            <Image
              style={styles.push}
              source={require('../../../assets/image/push.png')}
            />
          </TouchableOpacity>
        )}
        {/* <TextInput
          style={styles.textinput}
          placeholder="Type message..."
          multiline
          scrollEnabled={false}
        /> */}
        <Formik
          initialValues={{
            message: '',
          }}
          onSubmit={values => {
            _Meeting(values);
            // console.log(values);
          }}
          validationSchema={yup.object().shape({
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
              <TextInput
                placeholder="Type message..."
                style={styles.textinput}
                onChangeText={handleChange('message')}
                onBlur={() => setFieldTouched('message')}
                value={values.message}
                multiline
                scrollEnabled={false}
              />

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.textexhi}>MAKE AN APPOINTMENT</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        </Formik>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.textexhi}>MAKE AN APPOINTMENT</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);
