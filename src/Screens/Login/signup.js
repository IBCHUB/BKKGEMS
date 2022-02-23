import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import Input from './input';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const signup = ({navigation}) => {
  const placeholder = {
    label: 'aaa',
    value: null,
    color: '#777777',
  };
  const [open, setOpen] = useState([
    {label: 'Football', value: 'football'},
    {label: 'Baseball', value: 'baseball'},
    {label: 'Hockey', value: 'hockey'},
  ]);
  const [body, setbody] = useState({
    Email: '',
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
    </View>
  );
};

export default signup;
