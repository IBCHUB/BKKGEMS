import React, {useCallback, Component} from 'react';
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
  KeyboardAvoidingView,
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
import styles from './styles';
import {
  ativebotChat,
  createTokenChat,
  createuserChat,
  generatechattoken,
  HisChat,
} from '../../action/data.action';
import CustomView from './CustomView';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import IconAndroid from 'react-native-vector-icons/MaterialIcons';
import {getUniqueId, getManufacturer} from 'react-native-device-info';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {width, height} = Dimensions.get('window');

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      getUniqueId1: '',
      totalCount: null,
      dataHistoryChat: [],
    };
  }

  // _GenerateRandomNumber = () => {
  //   var RandomNumber = Math.floor(Math.random() * 100) + 1;
  //   console.log('RandomNumber' + RandomNumber);

  //   this.setState({
  //     getUniqueId1: RandomNumber,
  //   });
  // };

  componentDidMount() {
    // const {navigetion} = this.props;
    this._CreatechatToken();
    // this._GenerateRandomNumber();
    this.setState({getUniqueId1: getUniqueId() + 1});

    // setTimeout(() => {
    //   this.props.navigation.navigate('Home');
    // }, 60000);
  }

  _CreatechatToken = async value => {
    try {
      const payload = {
        result: {
          appId: 'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k',
          secret: 'LmKNK0jFBGl8eVlvQBRqIiT4NHn0GHd3',
        },
      };
      const response = await this.props.dispatch(createTokenChat(payload));
      if ((response?.appToken !== undefined) === true) {
        // console.log(response?.appToken);
        var request =
          'token=' +
          'Bearer ' +
          response?.appToken +
          '&text=' +
          this.state.getUniqueId1;
        const response2 = await this.props.dispatch(ativebotChat(request));
        const payload1 = {
          result: {
            uid: this.state.getUniqueId1,
            socialUserRefId: this.state.getUniqueId1,
            accountName: this.state.getUniqueId1,
            firstName: this.state.getUniqueId1,
            lastName: '',
            isActivate: 'true',
            isActivateBot: 'true',
            avatar: '',
            info: [
              {
                key: 'uuid',
                value: this.state.getUniqueId1,
                type: 'string',
              },
              {
                key: 'empId',
                value: '???????????????????????????',
                type: 'string',
              },
            ],
            token: 'aULEN70zchvBaFoX4QLu4z9sQGsfGtmn',
          },
          token: response.appToken,
        };
        const response1 = await this.props.dispatch(createuserChat(payload1));

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var dayStart = yyyy + '-' + mm + '-' + dd + 'T00:00:00.000Z';
        var dayend = yyyy + '-' + mm + '-' + dd + 'T23:59:59.999Z';

        const payload2 = {
          result: {
            limit: 30,
            page: 0,
            period: {
              start: dayStart,
              end: dayend,
            },
            social_network_ref_id: 'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k',
            social_user_ref_id: this.state.getUniqueId1,
          },
          token: response.appToken,
        };

        const response3 = await this.props.dispatch(HisChat(payload2));

        console.log('2233', response3);
        this.setState({
          totalCount: response3.totalCount,
          dataHistoryChat: response3.messages,
        });
        if (response1.responseBody.status === '400 BAD_REQUEST') {
          const payload = {
            result: {
              uid: this.state.getUniqueId1,
            },
            token: response.appToken,
          };
          const response2 = await this.props.dispatch(
            generatechattoken(payload),
          );
          if ((response2?.chatToken !== undefined) === true) {
            console.log('1234', response2.chatToken);

            this.socket = SocketIOClient(
              'wss://prod-mojito-gateway.socialenable.co',
              {
                path: '/chat-socket/socket.io',
                query: {
                  token: response2.chatToken,
                },
                transports: ['websocket'],
                jsonp: false,
                useSSL: false,
              },
            );

            console.log('321', this.socket);

            const t = this;
            t.socket.on('connected', async res => {
              console.log('Connect==> New');
              console.log(res);
              // const uid = this.props.getUser.userDetails.res_result.naturalId;
              const uid = this.state.getUniqueId1;

              await t.socket.emit('join', uid);
            });
            t.socket.on('join', async res => {
              console.log('Join==>OOOOOOO');
              console.log(res);
              this.getstartChat({refId: 'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k'});
            });
            this.onSend = this.onSend.bind(this);
          } else {
            console.log('errorresponse2');
          }
        } else {
          const payload = {
            result: {
              uid: this.state.getUniqueId1,
            },
            token: response.appToken,
          };
          const response3 = await this.props.dispatch(
            generatechattoken(payload),
          );
          if ((response3?.chatToken !== undefined) === true) {
            console.log('1111');
          } else {
            console.log('errorresponse3');
          }
        }
      } else {
        console.log('18');
      }
    } catch (error) {
      console.log(error);
    }
  };

  getstartChat = async value => {
    try {
      const uid = this.state.getUniqueId1;
      if (this.state.totalCount === 0) {
        const payload = {
          sender: {
            id: `${uid}`,
            type: 'user',
            avatar: '',
          },
          recipient: {
            id: `${value.refId}`,
          },
          message: {
            web_mid: `${uid}` + new Date().getTime(),
            postback: {
              title: '?????????????????????????????????',
              payload: 'get_started',
            },
          },
          timestamp: new Date().getTime(),
        };
        await this.socket.emit('chat', payload);
        console.log('879', payload);
      } else {
        let numchat = parseInt(this.state.totalCount);
        console.log('LLLKLKLK', this.state.dataHistoryChat);
        // let gg = numchat -1

        for (var i = numchat >= 25 ? 20 : numchat - 1; i >= 0; i--) {
          // alert('kkk' + i);

          if (
            this.state.dataHistoryChat[i].message != null &&
            this.state.dataHistoryChat[i].sender != null &&
            this.state.dataHistoryChat[i].recipient != null &&
            this.state.dataHistoryChat[i].message?.postback?.payload !==
              'get_started'
          ) {
            const dataBack = {
              dataquick_replies:
                this.state.dataHistoryChat[i].message?.quick_replies ===
                undefined
                  ? undefined
                  : this.state.dataHistoryChat[i].message?.quick_replies,
              title_name:
                this.state.dataHistoryChat[i].message?.postback?.title,
              text1:
                this.state.dataHistoryChat[i].message !== undefined
                  ? this.state.dataHistoryChat[i].message?.text
                  : this.state.dataHistoryChat[i].message?.postback?.title,

              showtextdataquick_replies:
                this.state.dataHistoryChat[i].message !== undefined
                  ? this.state.dataHistoryChat[i].message?.text
                  : this.state.dataHistoryChat[i].message?.postback?.title,

              textdataquick_replies:
                this.state.dataHistoryChat[i].message !== undefined
                  ? this.state.dataHistoryChat[i].message?.attachment ===
                    undefined
                    ? ''
                    : this.state.dataHistoryChat[i].message?.text
                  : this.state.dataHistoryChat[i].message?.postback?.title,
              image:
                this.state.dataHistoryChat[i].message?.attachment !==
                  undefined &&
                this.state.dataHistoryChat[i].message?.attachment?.type ===
                  'image'
                  ? this.state.dataHistoryChat[i].message.attachment.payload.url
                  : this.state.dataHistoryChat[i].message?.type === 'IMAGE'
                  ? this.state.dataHistoryChat[i].message?.url
                  : '',

              imageList:
                this.state.dataHistoryChat[i].message?.attachment !==
                  undefined &&
                this.state.dataHistoryChat[i].message?.attachment?.type ===
                  'template'
                  ? this.state.dataHistoryChat[i].message?.attachment?.payload
                      ?.template_type === 'generic'
                    ? this.state.dataHistoryChat[i].message?.attachment?.payload
                        ?.elements
                    : this.state.dataHistoryChat[i].message?.attachment?.payload
                  : undefined,

              user: {
                _id:
                  this.state.dataHistoryChat[i].sender?.type === undefined
                    ? this.state.dataHistoryChat[i].sender?.id ===
                      this.state.getUniqueId1
                      ? 'user'
                      : 'bot'
                    : this.state.dataHistoryChat[i].sender?.type,

                name: 'name',
                avatar:
                  this.state.dataHistoryChat[i].sender.type === 'user'
                    ? require('../../../assets/image/iconProfile.png')
                    : require('../../../assets/image/iconAdminChat.png'),
              },
              iduser: this.state.dataHistoryChat[i].recipient.id,
              _id: 'HomeBot',
            };
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, dataBack),
            }));
          }
        }
      }
      this.socket.on('chat', dataChat => {
        if (
          dataChat !== null &&
          dataChat?.message?.postback?.payload !== 'get_started'
        ) {
          const dataBack = {
            dataquick_replies:
              dataChat.message.quick_replies === undefined
                ? undefined
                : dataChat.message.quick_replies,
            title_name: dataChat?.message?.postback?.title,
            text1:
              dataChat.message !== undefined
                ? dataChat.message.text
                : dataChat?.message?.postback?.title,

            showtextdataquick_replies:
              dataChat.message !== undefined
                ? dataChat.message.text
                : dataChat?.message?.postback?.title,

            textdataquick_replies:
              dataChat.message !== undefined
                ? dataChat.message.attachment === undefined
                  ? ''
                  : dataChat.message.text
                : dataChat?.message?.postback?.title,

            image:
              dataChat.message.attachment !== undefined &&
              dataChat.message.attachment.type === 'image'
                ? dataChat.message.attachment.payload.url
                : '',
            imageList:
              dataChat.message.attachment !== undefined &&
              dataChat.message.attachment.type === 'template'
                ? dataChat.message.attachment.payload.template_type ===
                  'generic'
                  ? dataChat.message.attachment.payload.elements
                  : dataChat.message.attachment.payload
                : undefined,
            user: {
              _id: dataChat.sender.type,
              name: 'name',
              avatar:
                dataChat.sender.type === 'user'
                  ? require('../../../assets/image/iconProfile.png')
                  : require('../../../assets/image/iconAdminChat.png'),
            },
            iduser: dataChat.recipient.id,
            _id: 'HomeBot',
          };
          this.setState({message: ''});

          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, dataBack),
          }));
        }
      });
    } catch (error) {
      console.log('ERROR' + error);
    }
  };

  async OpenWeb(item) {
    console.log('>>>', item);
    try {
      Linking.openURL(item);
    } catch (error) {
      Linking.openURL(item);
    }
  }
  renderCustomView(props) {
    return <CustomView {...props} />;
  }
  renderBubble = props => {
    if (
      props.currentMessage.image === '' &&
      props.currentMessage._id === 'HomeBot' &&
      props.currentMessage.imageList != undefined
    ) {
      return (
        <View style={[styles.viewMainBotChat, {flex: 1}]}>
          {props.currentMessage.image === '' &&
          props.currentMessage.imageList != undefined &&
          props.currentMessage.imageList.buttons === undefined &&
          props.currentMessage.imageList.dataquick_replies === undefined ? (
            <ScrollView
              horizontal={true}
              style={{
                width: width * 0.8,
                backgroundColor: '#FFF',
                borderRadius: 13,
              }}>
              {props.currentMessage.imageList.map((item, index) => {
                return (
                  <View
                    style={{
                      // borderWidth: 1,
                      backgroundColor: '#e7e7e7',
                      width: 200,
                      height: 280,
                      borderRadius: 8,
                      flex: 1,
                      marginHorizontal: 4,
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode={'contain'}
                        style={{
                          width: 190,
                          height: 180,
                          borderRadius: 13,
                          marginHorizontal: 0,
                          alignSelf: 'center',
                          marginTop: -20,
                        }}
                        source={{uri: item.image_url}}
                      />
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          fontFamily: 'Cantoria MT Std',
                          fontWeight: 'normal',
                          marginTop: -20,
                          color: '#000',
                          width: 180,
                          alignSelf: 'center',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginHorizontal: 10,
                          color: '#4d4d4d',
                          fontFamily: 'Cantoria MT Std',
                          fontWeight: 'normal',
                        }}>
                        {item.subtitle}
                      </Text>
                      <View>
                        {item.buttons.map(data => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                props.onSend(
                                  '',
                                  data.payload,
                                  data.title,
                                  'user',
                                  props.currentMessage.iduser,
                                  data.type,
                                  data.url,
                                );
                              }}
                              style={{
                                borderWidth: 1,
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginBottom: 5,
                                marginTop: 5,
                                height: 30,
                                justifyContent: 'center',
                                borderColor: '#FFF',
                                backgroundColor: '#fff',
                                width: 150,
                              }}>
                              <Text
                                numberOfLines={1}
                                style={{
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                  marginHorizontal: 20,
                                  color: '#4d4d4d',
                                  fontFamily: 'Cantoria MT Std',
                                  fontWeight: 'normal',
                                }}>
                                {data.title}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <View
              style={{
                backgroundColor: '#e7e7e7',
                borderRadius: 8,
                width: width * 0.7,
              }}>
              <Text
                style={{
                  borderRadius: 10,
                  marginBottom: 10,
                  marginTop: 5,
                  height: null,
                  justifyContent: 'center',

                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  marginHorizontal: 15,
                  color: '#4d4d4d',
                  fontFamily: 'Cantoria MT Std',
                  fontWeight: 'normal',
                }}>
                {props.currentMessage.imageList.text.replace(
                  getUniqueId(),
                  'BKKGEMS User',
                )}
              </Text>
              <View>
                {props.currentMessage.imageList.buttons.map(data => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.onSend(
                          '',
                          data.payload,
                          data.title,
                          'user',
                          props.currentMessage.iduser,
                          data.type,
                          data.url,
                        );
                      }}
                      style={{
                        borderWidth: 1,
                        marginHorizontal: 45,
                        borderRadius: 10,
                        marginBottom: 10,
                        marginTop: 1,
                        height: 30,
                        justifyContent: 'center',
                        borderColor: '#FFF',
                        backgroundColor: '#FFF',
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginHorizontal: 10,
                          color: '#4d4d4d',
                          fontFamily: 'Cantoria MT Std',
                          fontWeight: 'normal',
                        }}>
                        {data.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              {props.currentMessage.dataquick_replies !== undefined ? (
                <View style={{marginHorizontal: 30}}>
                  {props.currentMessage.dataquick_replies.map(data => {
                    return (
                      <View style={{}}>
                        <TouchableOpacity
                          onPress={() => {
                            props.onSend(
                              '',
                              data.payload,
                              data.title,
                              'user',
                              props.currentMessage.iduser,
                              data.type,
                            );
                          }}
                          style={{
                            borderWidth: 1,
                            marginHorizontal: 15,
                            borderRadius: 10,
                            marginBottom: 10,
                            marginTop: 5,
                            height: 30,
                            justifyContent: 'center',
                            borderColor: '#1A4797',
                            backgroundColor: '#FFF',
                          }}>
                          <Text
                            numberOfLines={2}
                            style={{
                              fontSize: 18,
                              fontWeight: 'bold',
                              textAlign: 'center',
                              marginHorizontal: 20,
                              color: '#1A4797',
                              fontFamily: 'Cantoria MT Std',
                              fontWeight: 'normal',
                            }}>
                            {data.title}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              ) : (
                <View />
              )}
            </View>
          )}
        </View>
      );
    } else {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: '#e7e7e7',

              // backgroundColor: '#fff',
            },
            right: {
              backgroundColor: '#e6eff7',
            },
          }}
          // textStyle={{
          //   left: {color: '#4d4d4d', fontWeight: 'normal'},
          //   right: {color: '#4d4d4d', fontWeight: 'normal'},
          // }}
        />
      );
    }
  };

  async onSend(
    textinputma = '',
    text = '',
    text2 = '',
    text3 = '',
    IDtext = '',
    cktype = '',
    url,
    textinput,
  ) {
    console.log('text3' + text3);
    if (text3 === 'user') {
      // alert(textinputma);
      // this.setState({clearhomebot: 'clear'});

      // this.setState({ckdddd:'fuck',ckgetstart:'stop'})
      if (cktype === 'web_url') {
        this.OpenWeb(url);
      } else {
        const payload1 = {
          sender: {
            id: IDtext,
            type: 'user',
            avatar: '',
          },
          recipient: {
            id: `${'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k'}`,
          },
          message: {
            web_mid: IDtext + new Date().getTime(),
            postback: {
              title: text2,
              payload: text,
            },
          },
          timestamp: new Date().getTime(),
        };

        console.log('????????????????????????????????????????????????qqq', payload1);

        await this.socket.emit('chat', payload1);
      }
    } else {
      // alert("uNPxpBP5afzA4u5NtZxSahtUsKZSX40k")
      console.log('userssss' + textinputma);

      const payload = {
        sender: {
          id: `${this.state.getUniqueId1}`,
          type: 'user',
          avatar: 'http://one.ditp.go.th/dist/img/icon/iconAdminChat.png',
        },
        recipient: {
          // GceJq7rsxysT9BeFPL56nyaLmhFDGNaQ
          id: `${'uNPxpBP5afzA4u5NtZxSahtUsKZSX40k'}`,
        },
        message: {
          web_mid: `${this.state.getUniqueId1}` + new Date().getTime(),
          text: textinputma,
          type: 'text',
        },
        timestamp: new Date().getTime(),
      };

      // alert(JSON.stringify(payload) )

      await this.socket.emit('chat', payload);
    }

    this.instance._messageContainerRef.current.scrollToIndex({
      index: 0,
      viewOffset: 0,
      viewPosition: 1,
    });
  }

  renderAvatar = props => {
    return (
      <>
        {props.currentMessage.title_name !== null && (
          <Avatar
            {...props}
            imageStyle={{
              left: {width: 40, height: 40},
              right: {width: 40, height: 40},
            }}
          />
        )}
      </>
    );
  };

  renderTime = props => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: {
            color: '#4d4d4d',
          },
          right: {
            color: '#4d4d4d',
          },
        }}
      />
    );
  };

  renderMessageImage = props => {
    return (
      <MessageImage
        {...props}
        // style={[styless.image, { }]}
        imageStyle={{
          resizeMode: 'contain',
          borderRadius: 10,
          // height: height * 0.2,
          // width: width * 0.9,
          width: 250,
          height: 190,
          backgroundColor: '#e7e7e7',
          borderColor: '#e7e7e7',
          // backgroundColor: 'red',
          // borderColor:'red'
        }}
        // imageProps={{defaultSource: require('../../Images/bg_image.jpg')}}
      />
    );
  };

  renderInputToolbar(props) {
    //Add the extra styles via containerStyle
    return (
      <InputToolbar
        {...props}
        placeholder="message ..."
        textInputStyle={{
          fontSize: 18,
          fontFamily: 'Cantoria MT Std',
          fontWeight: 'normal',
          marginTop: Platform.OS === 'android' ? 0 : Platform.isPad ? 15 : 15,
        }}
        containerStyle={{
          borderWidth: 1.5,
          borderColor: '#e7e7e7',
          width: width * 0.96,
          borderRadius: 5,
          alignSelf: 'center',
          marginHorizontal: 10,
          justifyContent: 'center',
          height: 45,
          paddingBottom: Platform.OS === 'ios' ? 0 : 5,
          marginTop: Platform.OS === 'ios' ? -7 : 5,
          marginBottom: 10,
        }}
      />
    );
  }
  renderSend(props) {
    return (
      <Send
        {...props}
        containerStyle={{
          borderTopColor: '#FFF',
        }}>
        <IconAndroid
          name="send"
          style={{
            top: Platform.isPad ? -5 : -15,
            marginRight: 15,
            fontSize: 25,
            color: '#3A97F9',
            alignSelf: 'center',
          }}
        />
      </Send>
    );
  }

  render() {
    return (
      <View>
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView style={{paddingTop: -50}}>
            <View style={styles.chat}>
              <GiftedChat
                messages={this.state.messages}
                renderAvatarOnTop={true}
                onSend={(
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                  text7,
                  text8,
                ) => {
                  if (text1 === '') {
                    console.log(
                      text1 +
                        text2 +
                        text3 +
                        text4 +
                        text5 +
                        text6 +
                        text7 +
                        text8,
                    );
                    this.onSend(
                      text1,
                      text2,
                      text3,
                      text4,
                      text5,
                      text6,
                      text7,
                    );
                  } else {
                    // alert(text1[0].text)
                    this.onSend(text1[0].text);
                  }
                }}
                user={{
                  _id: 'user',
                }}
                showAvatarForEveryMessage={true}
                alwaysShowSend={true}
                showUserAvatar={true}
                isTyping={true}
                renderTime={this.renderTime}
                renderMessageImage={this.renderMessageImage}
                renderBubble={this.renderBubble}
                renderCustomView={this.renderCustomView}
                renderAvatar={this.renderAvatar}
                renderSend={this.renderSend}
                renderInputToolbar={this.renderInputToolbar}
              />
            </View>
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAwareScrollView
            extraScrollHeight={height * 0.32}
            enableOnAndroid={true}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.chat}>
              <GiftedChat
                messages={this.state.messages}
                renderAvatarOnTop={true}
                onSend={(
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                  text7,
                  text8,
                ) => {
                  if (text1 === '') {
                    console.log(
                      text1 +
                        text2 +
                        text3 +
                        text4 +
                        text5 +
                        text6 +
                        text7 +
                        text8,
                    );
                    this.onSend(
                      text1,
                      text2,
                      text3,
                      text4,
                      text5,
                      text6,
                      text7,
                    );
                  } else {
                    // alert(text1[0].text)
                    this.onSend(text1[0].text);
                  }
                }}
                user={{
                  _id: 'user',
                }}
                // shouldScrollTo={offset => {
                //   console.log('offset', offset);
                // }}
                showAvatarForEveryMessage={true}
                alwaysShowSend={true}
                showUserAvatar={true}
                isTyping={true}
                renderTime={this.renderTime}
                renderMessageImage={this.renderMessageImage}
                renderBubble={this.renderBubble}
                renderCustomView={this.renderCustomView}
                renderAvatar={this.renderAvatar}
                renderSend={this.renderSend}
                renderInputToolbar={this.renderInputToolbar}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
