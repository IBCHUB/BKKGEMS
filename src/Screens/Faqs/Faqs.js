import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TextInput,
  Linking,
} from 'react-native';

import Headerback from '../../Components/Headerback';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {Faq} from '../../action/data.action';
import AutoHeightWebView from 'react-native-autoheight-webview';
import Animated from 'react-native-reanimated';
import {ViewScale} from '../../config/ViewScale';
const Faqs = ({navigation, dispatch}) => {
  const [selectedId, setselectedId] = useState([]);
  const [faqs, setFaqs] = useState([]);
  // console.log(faqs);
  const [checked, setChecked] = useState(false);

  const isChecked = id => {
    const isCheck = selectedId.includes(id);
    return isCheck;
  };
  const handleCheckBox = id => {
    const ids = [...selectedId, id];
    if (isChecked(id)) {
      // console.log('เอาออก');
      setselectedId(selectedId.filter(item => item !== id));
    } else {
      // console.log('เอาเข้า');
      setselectedId(ids);
    }
    setChecked(selectedId.length + 1 == faqs.length);
  };
  const onBridgeMessage = url => {
    Linking.canOpenURL(url).then(supported => {
      console.log(supported);
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  const _Faqs = async values => {
    try {
      const response = await dispatch(Faq());
      // console.log(response.res_result);
      if (response.res_code == '00') {
        setFaqs(response.res_result);
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Faqs();
  }, []);
  return (
    <View style={styles.container}>
      <Headerback navigation={navigation} item={'FAQs'} />
      <ScrollView style={{backgroundColor: '#000'}}>
        <View style={styles.containerview}>
          <FlatList
            data={faqs}
            renderItem={({index, item}) => {
              console.log(item);
              return (
                <Animated.View>
                  <TouchableOpacity
                    onPress={() => {
                      handleCheckBox(item.faq_id);
                    }}
                    style={styles.buttonflat}>
                    <Text style={styles.text}>{item.faq_title}</Text>
                    <Entypo
                      name="chevron-thin-down"
                      size={ViewScale(18)}
                      color={'#DAA560'}
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  {isChecked(item.faq_id) && (
                    <Animated.View style={styles.containertags}>
                      <AutoHeightWebView
                        style={styles.auto}
                        source={{
                          html: item.faq_detail,
                        }}
                        // onLoad={x => {
                        //   setloadhtml(false);
                        // }}
                        viewportContent={'width=device-width, user-scalable=no'}
                        scrollEnabled={false}
                        customStyle={`
                           * {
                             color:#646363 !important;
                             font-size: 18px !important;
                             
                           }
                         `}
                        onShouldStartLoadWithRequest={request => {
                          if (request.url !== 'about:blank') {
                            Linking.openURL(request.url);
                            return false;
                          } else return true;
                        }}
                      />
                    </Animated.View>
                  )}
                </Animated.View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Faqs);
