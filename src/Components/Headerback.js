import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {logoutUser} from '../action/auth.action';
const Headerback = ({navigation, item, dispatch, authUser}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.goBack('');
        }}>
        <FontAwesome5
          name="arrow-left"
          size={20}
          color={'#DAA560'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.texthead}>
          {item}
        </Text>
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
            disabled
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
              source={{uri: authUser.token.profile_img}}
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
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Headerback);
