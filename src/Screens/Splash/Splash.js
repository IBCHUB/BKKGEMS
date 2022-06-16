import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Input from '../Login/input';

const Splash = ({navigation}) => {
  const [modal, setmodal] = useState(false);
  const [modalre, setmodalre] = useState(false);
  const [body, setbody] = useState({
    Password: '',
    Repassword: '',
    securePassword: true,
    secureRepassword: true,
  });
  const updateSecurePassword = () => {
    setbody({
      ...body,
      securePassword: !body.securePassword,
    });
  };
  const updateSecureRepassword = () => {
    setbody({
      ...body,
      secureRepassword: !body.secureRepassword,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Modal
        animationType="none"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodal(!modal);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <FontAwesome5
              name="check-double"
              size={26}
              color="#DAA560"
              style={styles.icon}
            />
            <Text style={styles.texttopicmodal}>Verification Successful</Text>

            <TouchableOpacity style={styles.buttonsec}>
              <Text style={styles.textsec}>GO TO SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      {/* <Modal
        animationType="none"
        transparent={true}
        visible={modalre}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalre(!modalre);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalre(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>

            <Text style={styles.texttopicmodal}>Reset Password</Text>
            <View style={styles.viewrow}>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={body.securePassword ? true : false}
                onChangeText={text => {
                  setbody({...body, Password: text});
                }}
              />
              <TouchableOpacity
                onPress={updateSecurePassword}
                style={{alignSelf: 'center'}}>
                {body.securePassword ? (
                  <FontAwesome5
                    name="eye-slash"
                    size={20}
                    color="#444444"
                    style={styles.iconeye}
                  />
                ) : (
                  <FontAwesome5
                    name="eye"
                    size={20}
                    color="#444444"
                    style={styles.iconeye}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.viewrow}>
              <Input
                placeholder="Re Type Password"
                autoCapitalize="none"
                secureTextEntry={body.secureRepassword ? true : false}
                onChangeText={text => {
                  setbody({...body, Repassword: text});
                }}
              />
              <TouchableOpacity
                onPress={updateSecureRepassword}
                style={{alignSelf: 'center'}}>
                {body.secureRepassword ? (
                  <FontAwesome5
                    name="eye-slash"
                    size={20}
                    color="#444444"
                    style={styles.iconeye}
                  />
                ) : (
                  <FontAwesome5
                    name="eye"
                    size={20}
                    color="#444444"
                    style={styles.iconeye}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonsec}>
              <Text style={styles.textsec}>SET NEW PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

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
    </View>
  );
};

export default Splash;
