import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Signin from './signin';
import Signup from './signup';
import styles from './styles';
import {loginUser} from 'actions/auth.action';
import {connect} from 'react-redux';
import Loader from '../../Components/Loader';

const Login = ({navigation, dispatch, authData, LoadingCounters}) => {
  const [page, setpage] = useState(0);

  const _loginUser = async values => {
    try {
      var request =
        'email=' +
        'pronthep.d@ibusiness.co.th' +
        '&password=' +
        '123456789' +
        '&type=' +
        '1' +
        '&version=' +
        '11' +
        '&token=' +
        '11';
      const response = await dispatch(loginUser(request));
      console.log('data');
      console.log(response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      {console.log(authData.token)}
      {LoadingCounters > 0 && <Loader />}
      <SafeAreaView>
        <Image
          source={require('../../../assets/image/BKKGEMSlogo.png')}
          style={styles.logobkk}
        />
        <View style={styles.view}>
          <Animated.View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setpage(0);
              }}
              style={[
                styles.buttonsign,
                {
                  backgroundColor: page === 0 ? '#DAA560' : '#EEECE2',
                  height: page === 0 ? 55 : 50,
                  marginTop: page === 0 ? -5 : 0,
                },
              ]}>
              <Text
                style={[
                  styles.textsige,
                  {
                    color: page === 0 ? '#fff' : '#000',
                    fontSize: page === 0 ? 22 : 18,
                  },
                ]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpage(1);
              }}
              style={[
                styles.buttonsign,
                {
                  backgroundColor: page === 1 ? '#DAA560' : '#EEECE2',
                  height: page === 1 ? 55 : 50,
                  marginTop: page === 1 ? -5 : 0,
                },
              ]}>
              <Text
                style={[
                  styles.textsige,
                  {
                    color: page === 1 ? '#fff' : '#000',
                    fontSize: page === 1 ? 22 : 18,
                  },
                ]}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </Animated.View>
          {page === 0 && (
            <Signup onPress={() => setpage(1)} loginUser={_loginUser} />
          )}
          {page === 1 && (
            <Signin onPress={() => setpage(0)} navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

// export default Login;

const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
  authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
