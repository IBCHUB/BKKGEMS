import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
  Image,
  Linking,
} from 'react-native';
import Routes from './Navigation/Routes';
import {connect} from 'react-redux';

import Loader from './Components/Loader';

const main = ({dispatch, LoadingCounters}) => {
  return (
    <View style={{flex: 1}}>
      <Routes />
      {LoadingCounters > 0 && <Loader />}
    </View>
  );
};
const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(main);
