import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import Octicons from 'react-native-vector-icons/Octicons';
import {connect} from 'react-redux';
import {logoutUser} from '../action/auth.action';
const Headercomp = ({navigation, item, dispatch, authUser}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.row}>
        <Octicons
          size={20}
          name="three-bars"
          color={'#DAA560'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.texthead}>{item}</Text>
      </View>
      <View style={styles.row}>
        {authUser.token === null ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(logoutUser());
            }}
            style={{marginRight: 20}}>
            <Image
              source={require('../../assets/image/iconSend.png')}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={{marginRight: 20}}>
            <Image
              source={require('../../assets/image/iconSend.png')}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        )}

        {authUser.token === null ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(logoutUser());
            }}>
            <Image
              source={require('../../assets/image/iconprofile.png')}
              style={styles.iconprofile}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/image/iconprofile.png')}
              style={styles.iconprofile}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  // LoadingCounters: state.dataReducer.LoadingCounters,
  authUser: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Headercomp);
