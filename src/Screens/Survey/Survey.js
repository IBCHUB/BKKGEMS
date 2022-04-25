import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';
const Survey = ({navigation, dispatch}) => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'SURVEY'} />

        <View style={styles.view}>
          <Text style={styles.texttop}>Please rate your experience</Text>
          <View style={styles.viewin}>
            <TouchableOpacity onPress={() => setChecked(val => !val)}>
              <Image
                style={styles.img}
                source={
                  checked === true
                    ? require('../../../assets/image/ya1.png')
                    : require('../../../assets/image/ya.png')
                }
              />
              <Text style={styles.textcenter}>Poor</Text>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st1.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st1.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChecked1(val => !val)}>
              <Image
                style={styles.img}
                source={
                  checked1 === true
                    ? require('../../../assets/image/yo1.png')
                    : require('../../../assets/image/yo.png')
                }
              />
              <Text style={styles.textcenter}>OK</Text>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st1.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChecked2(val => !val)}>
              <Image
                style={styles.img}
                source={
                  checked2 === true
                    ? require('../../../assets/image/yim1.png')
                    : require('../../../assets/image/yim.png')
                }
              />
              <Text style={styles.textcenter}>Great</Text>
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
                <Image
                  style={styles.icon}
                  source={require('../../../assets/image/st.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.texttop}>What can we do to improve service?</Text>
          <TextInput
            multiline
            placeholder="Type message..."
            placeholderTextColor={'#646363'}
            style={styles.input}
          />
          <TouchableOpacity style={styles.botton}>
            <Text style={styles.textbotton}>SEND FEEDBACK</Text>
          </TouchableOpacity>
          <View style={{marginBottom: 30}} />
        </View>
      </SafeAreaView>
    </View>
  );
};

// const mapStateToProps = state => ({
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Survey);
