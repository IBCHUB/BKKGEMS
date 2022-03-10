import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Input from './input';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const signup = ({navigation, onPress, loginUser}) => {
  const [modal, setmodal] = useState(false);
  const [body, setbody] = useState({
    Email: 'drive.bkkgems2022@gmail.com',
    Password: '',
    Repassword: '',
    FullName: '',
    CompanyName: '',
    Country: '',
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
            <Text style={styles.texttopicmodal}>Email Confirmation</Text>
            <Text style={styles.textdetailmodal}>
              We have sent an e-mail to drive.
            </Text>
            <Text style={styles.textemaillmodal}>{body.Email}</Text>
            <Text style={styles.textdetailmodal}>
              Please confirm the validity {'\n'} of our e-mail address by
              following instructions in the confirmation e-mail.
            </Text>
            <View style={styles.liner} />
            <View style={styles.viewrow}>
              <Text style={styles.textdetailmodal}>
                If you do not get any e-mail,
              </Text>
              <TouchableOpacity style={styles.up}>
                <Text style={styles.textup}>click here</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textdetailmodal}>
              to resend confirmation e-mail.
            </Text>
          </View>
        </View>
      </Modal>
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
      <Input
        placeholder="Full Name"
        autoCapitalize="none"
        onChangeText={text => {
          setbody({...body, FullName: text});
        }}
      />
      <Input
        placeholder="Company Name"
        autoCapitalize="none"
        onChangeText={text => {
          setbody({...body, CompanyName: text});
        }}
      />
      <Input
        placeholder="Country"
        autoCapitalize="none"
        onChangeText={text => {
          setbody({...body, Country: text});
        }}
      />
      <View style={[styles.row, {marginTop: 25}]}>
        <Text style={styles.text}>Already Have An Account? </Text>
        <TouchableOpacity onPress={onPress} style={styles.up}>
          <Text style={styles.textup}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          // setmodal(true);
          loginUser();
        }}
        style={styles.buttonsignup}>
        <Text style={styles.textsigeup}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signup;
