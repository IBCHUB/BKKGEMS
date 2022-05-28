import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './styles';
import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {GetallChat} from '../../action/data.action';
const Allchat = ({navigation, dispatch, authUser}) => {
  // const UserId = authUser.token.user_id;
  const [data, setData] = useState([]);

  const _GetallChat = async values => {
    try {
      var request = 'user_id=' + UserId;
      const response = await dispatch(GetallChat(request));
      console.log(response);
      if (response.res_code == '00') {
        setData(response.res_result);
      } else {
        setmodalfalse(true);
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _GetallChat();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({index, item}) => {
        console.log(item);
        return (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Pagechat', {item})}
              style={styles.buttonflat}>
              <Image style={styles.imgflat} source={{uri: item.company_logo}} />
              <View style={styles.roww}>
                <View style={styles.row}>
                  <Text numberOfLines={1} style={styles.topchat}>
                    {item.company_name}
                  </Text>
                  <Text style={styles.detail}>{item.text}</Text>
                </View>
                <View style={styles.row}>
                  {item.read == false ? (
                    <View style={styles.unread} />
                  ) : (
                    <View />
                  )}
                  <Text numberOfLines={1} style={styles.texttime}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

// const mapStateToProps = state => ({
//   authUser: state.authReducer.authUser,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Allchat);
