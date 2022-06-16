import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Headerchat from '../../Components/Headerchat';
import Allchat from './Allchat';
import Chatbot from './Chatbot';

import styles from './styles';
const Chat = ({navigation, route}) => {
  const [page, setpage] = useState(0);

  return (
    <View style={styles.container}>
      <Headerchat item={'CHAT'} navigation={navigation} />
      {/* <View style={styles.viewrow}>
        <TouchableOpacity
          onPress={() => {
            setpage(0);
          }}
          style={[
            styles.touch,
            {
              borderBottomWidth: page === 0 ? 3 : 0.5,
              borderBottomColor: page === 0 ? '#DAA560' : '#00000029',
            },
          ]}>
          <Text
            style={[styles.text, {color: page === 0 ? '#DAA560' : '#888888'}]}>
            Official
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setpage(1);
          }}
          style={[
            styles.touch,
            {
              borderBottomWidth: page === 1 ? 3 : 0.5,
              borderBottomColor: page === 1 ? '#DAA560' : '#00000029',
            },
          ]}>
          <Text
            style={[styles.text, {color: page === 1 ? '#DAA560' : '#888888'}]}>
            Live Chat
          </Text>
        </TouchableOpacity>
      </View> */}
      <Chatbot />
      {/* {page === 1 && <Allchat navigation={navigation} />} */}
    </View>
  );
};

export default Chat;
