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
  Dimensions,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Time,
  Avatar,
  MessageImage,
  InputToolbar,
  Send,
  renderAvatar,
  MessageText,
} from 'react-native-gifted-chat';
import styles from './styles';
import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import Headerpage from '../../Components/Headerpage';
import {SeadChat} from '../../action/data.action';
const {width, height} = Dimensions.get('window');
const Pagechat = ({authUser, dispatch, route, navigation}) => {
  const UserId = authUser.token.user_id;
  const Company = authUser.token.company_name;
  const Fullname = authUser.token.fullname;
  const Country = authUser.token.country_name;
  const Email = authUser.token.email;
  const {item} = route.params;
  const room_key = item.room_key;
  const User_ditpone = item.company_tax_id;
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    database()
      .ref('chatroom/' + room_key + '/chat')
      // .orderByChild('time')
      .on('value', snapshot => {
        const data = snapshot.val();

        let newArr = Object.keys(data).map((key, index) => {
          let newData = {
            _id: 1,
            text: data[key].message_type === 'text' ? data[key].message : '',
            textfile:
              data[key].message_type === 'file' ? data[key].original_name : '',
            filetype:
              data[key].message_type === 'file' ? data[key].path_file : '',
            createdAt: data[key].time,
            image:
              data[key].message_type === 'photo' ? data[key].path_original : '',
            userview: UserId,
            user: {
              _id: data[key].user_id === UserId ? UserId : data[key].user_id,
              avatar:
                data[key].user_id != UserId
                  ? 'http://one.ditp.go.th/uploads/member_profile/profile_new.png'
                  : '',
            },
          };
          return newData;
        });
        const sortAscending = newArr.sort((a, b) =>
          new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1,
        );

        setMessages(sortAscending);
      });
  }, []);

  const _SeadChat = async values => {
    try {
      var request =
        'room_key=' +
        room_key +
        '&user_id=' +
        UserId +
        '&company=' +
        Company +
        '&fullname=' +
        Fullname +
        '&country=' +
        Country +
        '&email=' +
        Email +
        '&user_ditpone=' +
        User_ditpone +
        '&message=' +
        messages[0].text +
        '&type_chat=' +
        'text';
      const response = await dispatch(SeadChat(request));
      console.log('103>>>', response);
      if (response.res_code == '00') {
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const onSend = useCallback((messages = []) => {
    let postChat = database().ref('/chatroom/' + room_key + '/chat');
    postChat
      .push({
        message: messages[0].text,
        message_type: 'text',
        isRead: false,
        status: 1,
        time: new Date().getTime(),
        time_zone: 'Asia/Bangkok',
        user_id: UserId,
      })
      .then(res => {
        console.log(postChat);
      });
    const payload = {
      _id: UserId,
      text: messages[0].text,
      createdAt: messages[0].createdA,
      user: {
        _id: UserId,
        avatar: '',
      },
      BBuser: 'UserBB',
    };

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, payload),
    );
  }, []);
  const renderTime = props => {
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

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerpage navigation={navigation} item={item.company_name} />
        <View style={styles.chat}>
          <GiftedChat
            // ref={c => {
            //   console.log(c);
            // }}
            scrollToBottom={false}
            style={{borderWidth: 1, flex: 1}}
            renderAvatarOnTop={true}
            messages={messages}
            onSend={messages => {
              _SeadChat();
              onSend(messages);
            }}
            user={{
              _id: UserId,
            }}
            showAvatarForEveryMessage={true}
            alwaysShowSend={true}
            showUserAvatar={false}
            isTyping={false}
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
            renderTime={renderTime}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagechat);
