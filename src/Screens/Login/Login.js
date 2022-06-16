import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  AppState,
  BackHandler,
} from 'react-native';
import Signin from './signin';
import Signup from './signup';
import styles from './styles';
import RNExitApp from 'react-native-exit-app';

const Login = ({navigation, route}) => {
  const [page, setpage] = useState(1);
  const params = route.params || {};
  const {personId, id, section} = params;

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'background'
      ) {
        console.log('background *****');
        // if(){

        // }
        BackHandler.exitApp();
        RNExitApp.exitApp();
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    console.log('>>', params);
    console.log(id);
    console.log(section);
  }, []);

  return (
    <View style={styles.container}>
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
          <Signup onPress={() => setpage(1)} navigation={navigation} />
        )}
        {page === 1 && (
          <Signin onPress={() => setpage(0)} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default Login;
