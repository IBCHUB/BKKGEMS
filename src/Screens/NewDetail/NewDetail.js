import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Share,
  Dimensions,
  Platform,
  Linking,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import AutoHeightWebView from 'react-native-autoheight-webview';
import styles from './styles';
import {ViewScale} from '../../config/ViewScale';
const {width, height} = Dimensions.get('window');
const NewDetail = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);
  const scrollRef = useRef();
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: item.blog_title,
        url: item.url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback navigation={navigation} item={item.blog_title} />
      <ScrollView
        style={{backgroundColor: '#EEECE2', marginBottom: ViewScale(20)}}>
        <Image source={{uri: item.blog_img}} style={styles.imgHeader} />
        <Text style={styles.textheader}>{item.blog_title}</Text>
        <View style={styles.row}>
          <Text style={styles.textmini}>
            Post on : {moment(item.blog_date_start).format('DD MMMM,YYYY')}
          </Text>
          <TouchableOpacity onPress={onShare} style={styles.botton}>
            <Octicons
              name="share-android"
              size={ViewScale(12)}
              color={'#fff'}
              style={styles.iconshare}
            />
            <Text style={styles.textshare}>SHARE</Text>
          </TouchableOpacity>
        </View>
        <AutoHeightWebView
          style={styles.auto}
          source={{
            html: item.blog_detail,
          }}
          // onLoad={x => {
          //   setloadhtml(false);
          // }}
          viewportContent={'width=device-width, user-scalable=no'}
          scrollEnabled={false}
          customStyle={`
                * {
                  color:#646363 !important;
                  font-size: 16px !important;
                  font-family: Cantoria MT Std;
                  
                }
              `}
          onShouldStartLoadWithRequest={request => {
            if (request.url !== 'about:blank') {
              Linking.openURL(request.url);
              return false;
            } else return true;
          }}
        />
        <View
          style={{
            height: Platform.OS === 'ios' ? ViewScale(30) : height * 0.15,
          }}
        />
        {/* <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressTouch}
          style={styles.FloatingActionButtonStyle}>
          <Feather
            size={ViewScale(25)}
            name="arrow-up-left"
            color={'#DAA560'}
            style={styles.icon}
          />
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

export default NewDetail;
