import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Button,
  Linking,
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import {
  GiftedChat,
  Bubble,
  Time,
  Avatar,
  MessageImage,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
const Chatbot = dispatch => {
  return (
    <View>
      <Text>Chatbot</Text>
    </View>
  );
};

// const mapStateToProps = state => ({

//   });

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Chatbot);
