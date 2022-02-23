import React, {useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            source={require('../../../assets/image/splash.png')}
            style={styles.imssplash}
          />
          <Image
            source={require('../../../assets/image/dimon.png')}
            style={styles.imgdimon}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Splash;
