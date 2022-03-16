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
import Routes from './navigation/Routes';
import {connect} from 'react-redux';
import ErrorBoundary from 'react-native-error-boundary';
import Loader from './Components/Loader';

const main = ({dispatch, LoadingCounters, authData}) => {
  return (
    <View>
      <Text>main</Text>
    </View>
  );
};
const mapStateToProps = state => ({
  LoadingCounters: state.globalReducer.LoadingCounters,
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(main);
