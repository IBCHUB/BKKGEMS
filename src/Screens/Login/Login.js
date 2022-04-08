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

const Login = ({navigation}) => {
  const [page, setpage] = useState(1);

  return (
    <View style={styles.container}>
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
            <Signup onPress={() => setpage(1)} navigation={navigation} />
          )}
          {page === 1 && (
            <Signin onPress={() => setpage(0)} navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
