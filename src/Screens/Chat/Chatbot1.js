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
import {
  createTokenChat,
  createuserChat,
  generatechattoken,
} from '../../action/data.action';

const {width, height} = Dimensions.get('window');
function Chatbot({dispatch, authUser}) {
  const [messages, setMessages] = useState([]);
  const [token, settoken] = useState({});
  //console.log(token);
  const _CreatechatToken = async value => {
    try {
      const payload = {
        result: {
          appId: 'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k',
          secret: 'LmKNK0jFBGl8eVlvQBRqIiT4NHn0GHd3',
        },
      };
      const response = await dispatch(createTokenChat(payload));

      if ((response?.appToken !== undefined) === true) {
        const payload1 = {
          result: {
            uid:
              authUser.token === null
                ? '1630500107061'
                : authUser.token.user_id,
            socialUserRefId:
              authUser.token === null
                ? '1630500107061'
                : authUser.token.user_id,
            accountName:
              authUser.token === null
                ? '1630500107061'
                : authUser.token.fullname,
            firstName:
              authUser.token === null
                ? '1630500107061'
                : authUser.token.company_name,
            lastName: '',
            isActivate: 'true',
            isActivateBot: 'true',
            avatar: '',
            info: [
              {
                key: 'uuid',
                value:
                  authUser.token === null
                    ? '1630500107061'
                    : authUser.token.user_id,
                type: 'string',
              },
              {
                key: 'empId',
                value: 'นิติบุคคล',
                type: 'string',
              },
            ],
            token: 'aULEN70zchvBaFoX4QLu4z9sQGsfGtmn',
          },
          token: response.appToken,
        };
        const response1 = await dispatch(createuserChat(payload1));

        if (response1.responseBody.status === '400 BAD_REQUEST') {
          const payload = {
            result: {
              uid:
                authUser.token === null
                  ? '1630500107061'
                  : authUser.token.user_id,
            },
            token: response.appToken,
          };
          const response2 = await dispatch(generatechattoken(payload));
          if ((response2?.chatToken !== undefined) === true) {
            console.log(response2.chatToken);
            const url = 'wss://prod-mojito-gateway.socialenable.co';
            const socketIOConnOpt = {
              path: '/chat-socket/socket.io/',
              query: {
                token: response2.chatToken,
              },
              transports: ['websocket'],
              jsonp: false,
            };
            const socket = new SocketIOClient(url, socketIOConnOpt);

            console.log(';;;;;');
            console.log(socket);

            socket.on('connected', () => {
              Log.info('Connected to socket');
              console.log('so');
            });

            // socket.on('connected', () => {
            //   Log.info('Connected to socket');
            //   // console.log('connected');
            //   // socket.emit('hello', 'world');
            // });

            //  socket.on('connected', res => {
            //     console.log('Connect==> New');

            //   });
          } else {
            console.log('errorresponse2');
          }
        } else {
          const payload = {
            result: {
              uid:
                authUser.token === null ? 'BKK' + '65' : authUser.token.user_id,
            },
            token: response.appToken,
          };
          const response3 = await dispatch(generatechattoken(payload));
          if ((response3?.chatToken !== undefined) === true) {
            settoken(response3.chatToken);
          } else {
            console.log('errorresponse3');
          }
        }
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
            <View>
              <InputToolbar
                {...props}
                placeholder="Message..."
                textInputStyle={{
                  fontSize: 18,
                  fontWeight: 'normal',
                }}
                containerStyle={{
                  borderWidth: 1.5,
                  borderColor: '#e7e7e7',

                  marginLeft: Platform.OS === 'android' ? 15 : 15,

                  borderRadius: 8,
                  height: 38,
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

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
