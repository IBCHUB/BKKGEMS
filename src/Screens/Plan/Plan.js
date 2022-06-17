import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
  Platform,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';
import AutoHeightWebView from 'react-native-autoheight-webview';
const Plan = ({navigation, dispatch}) => {
  const item = require('../../../assets/image/parn.png');
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback navigation={navigation} item={'FLOOR PLAN'} />

      <View style={styles.view}>
        <Image style={styles.img} source={item} />

        <View style={{marginBottom: 30}} />
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Plan);
