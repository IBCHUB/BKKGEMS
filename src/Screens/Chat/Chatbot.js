import React, {useCallback, useEffect, useState} from 'react';
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
  Dimensions,
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import {GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import styles from './styles';
import {createTokenChat} from '../../action/data.action';

const {width, height} = Dimensions.get('window');
function Chatbot({dispatch}) {
  const [messages, setMessages] = useState([]);

  const _CreatechatToken = async value => {
    try {
      const response = await dispatch(createTokenChat());
      // console.log('KKKKKKKKK', response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _CreatechatToken();
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: '',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.chat}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={props => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={{marginLeft: 15}}>
                <Image
                  style={{width: 20, resizeMode: 'contain', marginTop: 4}}
                  source={require('../../../assets/image/Paper.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 15}}>
                <Image
                  style={{width: 23, resizeMode: 'contain', marginTop: 4}}
                  source={require('../../../assets/image/Image1.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{width: width * 0.66}}>
              <InputToolbar
                {...props}
                placeholder="Message..."
                textInputStyle={{
                  fontSize: 18,
                  fontWeight: 'normal',
                }}
                containerStyle={{
                  borderTopWidth: 1.5,
                  borderTopColor: '#e7e7e7',
                  borderLeftWidth: 1.5,
                  borderLeftColor: '#e7e7e7',
                  marginLeft: Platform.OS === 'android' ? 15 : 15,
                  flex: 1,
                  borderRadius: 8,
                  height: 40,
                  width: width * 0.75,
                }}
              />
            </View>
          </View>
        )}
        renderSend={props => (
          <Send
            {...props}
            containerStyle={{
              borderTopColor: '#FFF',
            }}>
            <Image
              style={{
                width: 20,
                resizeMode: 'contain',
                marginRight: 5,
                marginBottom: 5,
              }}
              source={require('../../../assets/image/iconSend.png')}
            />
          </Send>
        )}
      />
    </View>
  );
}

// const mapStateToProps = state => ({

//   });

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Chatbot);
