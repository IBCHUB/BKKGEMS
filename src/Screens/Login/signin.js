import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Input from './input';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const signin = ({navigation, onPress}) => {
  const [modal, setmodal] = useState(false);
  const [modalfalse, setmodalfalse] = useState(false);
  const [modalemail, setmodalemail] = useState(false);
  const [body, setbody] = useState({
    Email: '',
    Password: '',
    securePassword: true,
  });
  const updateSecurePassword = () => {
    setbody({
      ...body,
      securePassword: !body.securePassword,
    });
  };
  return (
    <View style={styles.containersignup}>
      <Modal
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
            <Text style={styles.texttopicmodal}>Forgot your password?</Text>
            <Text style={[styles.textdetailmodal, {fontSize: 16}]}>
              We’ll send the account details to your email.
            </Text>
            <Input placeholder="Email" autoCapitalize="none" />
            <TouchableOpacity style={styles.buttonexhi}>
              <Text style={styles.textexhi}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalfalse}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalfalse(!modalfalse);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalfalse(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Ionicons
              name="close"
              size={60}
              color="#D76060"
              style={{alignSelf: 'center'}}
            />
            <Text style={styles.texttopicmodal}>
              Sorry, wrong username or password.
            </Text>
            <TouchableOpacity style={styles.buttonexhi}>
              <Text style={styles.textexhi}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalemail}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalemail(!modalemail);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalemail(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Ionicons
              name="mail-open-outline"
              size={32}
              color="#DAA560"
              style={{alignSelf: 'center'}}
            />
            <Text style={styles.texttopicmodal}>
              Send e-mail already {'\n'} Please check your E-mail
            </Text>
          </View>
        </View>
      </Modal>
      <View style={{marginTop: 50}} />
      <Input
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={text => {
          setbody({...body, Email: text});
        }}
      />
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
              style={styles.icon}
            />
          ) : (
            <FontAwesome5
              name="eye"
              size={20}
              color="#444444"
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={[styles.row, {marginTop: 25}]}>
        <Text style={styles.text}>Don’t have an account yet? </Text>
        <TouchableOpacity onPress={onPress} style={styles.up}>
          <Text style={styles.textup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setmodal(true);
        }}
        style={[styles.up, {marginTop: 10}]}>
        <Text style={styles.textup}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.buttonsignup}>
        <Text style={styles.textsigeup}>LOG - IN</Text>
      </TouchableOpacity>
      <View style={styles.viewor}>
        <View style={styles.lineror} />
        <Text style={styles.textor}>or</Text>
        <View style={styles.lineror} />
      </View>
      <TouchableOpacity style={styles.buttonexhi}>
        <Ionicons
          name="log-in"
          size={25}
          color={'#DAA560'}
          style={{alignSelf: 'center', marginRight: 10}}
        />
        <Text style={styles.textexhi}>EXHIBITORLOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signin;
