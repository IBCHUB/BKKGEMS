import React, {useRef, useState} from 'react';
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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Picker} from '@react-native-picker/picker';
import * as RNLocalize from 'react-native-localize';

const Meeting = ({navigation}) => {
  const [modal, setmodal] = useState(false);
  const [day, setday] = useState([]);
  const [timeH, settimeH] = useState(0);
  console.log(day);
  console.log(RNLocalize.getLocales());
  console.log(RNLocalize.getCurrencies());
  console.log(RNLocalize.getTimeZone());
  var date = new Date();
  var offsetInHours = date.getTimezoneOffset() / 60;
  console.log(offsetInHours);
  console.log(date.getTimezoneOffset());
  console.log(
    new Date()
      .toString()
      .match(/([A-Z]+[\+-][0-9]+)/)[1]
      .split('+')[0],
  );
  console.log(
    new Date()
      .toString()
      .match(/([A-Z]+[\+-][0-9]+)/)[1]
      .split('+')[1],
  );
  console.log(new Date().toString());
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
            <Text style={styles.textmodal}>Select Date</Text>
            <Calendar
              style={styles.calendar}
              onDayPress={day =>
                setday({
                  [day.dateString]: {
                    disabled: true,
                    startingDay: true,
                    color: 'green',
                    endingDay: true,
                  },
                })
              }
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
            <View style={{flexDirection: 'row', height: 200}}>
              <Picker
                style={{
                  flex: 1,
                }}
                selectedValue={timeH}
                onValueChange={(itemValue, itemIndex) => settimeH(itemValue)}>
                <Picker.Item key={0} label={'01'} value={'01'} />
                <Picker.Item key={1} label={'02'} value={'02'} />
              </Picker>
              <Picker
                style={{
                  flex: 1,
                }}
                selectedValue={timeH}
                onValueChange={(itemValue, itemIndex) => settimeH(itemValue)}>
                <Picker.Item key={0} label={'01'} value={'01'} />
                <Picker.Item key={1} label={'02'} value={'02'} />
              </Picker>
            </View>
            {/* {"request_datetime" : "2022-03-08 18:35", "time_zone": "Asia/Bangkok", "GMT" : "7"}, */}
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
              }}
              style={styles.buttonexhi}>
              <Text style={styles.textexhi}>OKAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <Headerback navigation={navigation} item={'REQUEST MEETING'} />
      <View>
        <Text style={styles.text}>Add appointment Option</Text>
        <TouchableOpacity
          onPress={() => {
            setmodal(true);
          }}
          style={styles.dot}>
          <Image
            style={styles.push}
            source={require('../../../assets/image/push.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('2')} style={styles.dot}>
          <Image
            style={styles.push}
            source={require('../../../assets/image/push.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('3')} style={styles.dot}>
          <Image
            style={styles.push}
            source={require('../../../assets/image/push.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textinput}
          placeholder="Type message..."
          multiline
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textexhi}>MAKE AN APPOINTMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Meeting;
