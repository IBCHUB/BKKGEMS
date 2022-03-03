import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Headerback from '../../Components/Headerback';
import styles from './styles';
const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback navigation={navigation} item={'ABOUT FAIR'} />
        <ScrollView style={{backgroundColor: '#000', marginBottom: 10}}>
          <View style={styles.viewinput}>
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
          </View>
          <View style={styles.viewtags}>
            <Text style={styles.textags}>
              Office of Lifestyle Trade Promotion Department of International
              Trade Promotion Ministry of Commerce, Thailand
            </Text>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/gps.png')}
              />
              <Text style={styles.textags1}>
                563 Nonthaburi Road, Muang, Nonthaburi 11000 Thailand
              </Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/phone.png')}
              />
              <Text style={styles.textags1}>+66 2507 8392, 8393</Text>
            </View>
            <View style={styles.rowtags}>
              <Image
                style={styles.icon}
                source={require('../../../assets/image/Message.png')}
              />
              <Text style={styles.textags1}>official@bkkgems.com</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Contact;
