import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import Octicons from 'react-native-vector-icons/Octicons';

import {connect} from 'react-redux';
import {logoutUser} from '../action/auth.action';
import {ViewScale} from '../config/ViewScale';

const Headerhome = ({navigation, dispatch}) => {
  // const [id, setid] = useState('');
  // const _GenerateRandomNumber = () => {
  //   var RandomNumber = Math.floor(Math.random() * 100) + 1;
  //   console.log('RandomNumber' + RandomNumber);
  //   setTimeout(() => {
  //     setid(RandomNumber);
  //   }, 1000);
  // };
  // useEffect(() => {
  //   _GenerateRandomNumber();
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.row}>
        <Octicons
          size={ViewScale(20)}
          name="three-bars"
          color={'#DAA560'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>

      <Image
        source={require('../../assets/image/BKKGEMSlogo.png')}
        style={styles.logoBkk}
      />

      <View style={styles.row}>
        <TouchableOpacity
          // disabled
          onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('../../assets/image/iconSend.png')}
            style={styles.iconSend}
          />
        </TouchableOpacity>

        {/* {authUser.token === null ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(logoutUser());
            }}>
            <Image
              source={require('../../assets/image/iconProfile.png')}
              style={styles.iconprofile}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{uri: authUser?.token?.profile_img}}
              style={styles.iconprofile}
            />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   // LoadingCounters: state.dataReducer.LoadingCounters,
//   authUser: state.authReducer.authUser,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Headerhome);
