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
} from 'react-native';
import Headerback from '../../Components/Headerback';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import AutoHeightWebView from 'react-native-autoheight-webview';
import styles from './styles';
const NewDetail = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);
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
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={item.blog_title} />
        <ScrollView style={{backgroundColor: '#EEECE2', marginBottom: 20}}>
          <Image source={{uri: item.blog_img}} style={styles.imgHeader} />
          <Text style={styles.textheader}>{item.blog_title}</Text>
          <View style={styles.row}>
            <Text style={styles.textmini}>
              Post on : {moment(item.blog_date_start).format('DD MMMM,YYYY')}
            </Text>
            <TouchableOpacity onPress={onShare} style={styles.botton}>
              <Octicons
                name="share-android"
                size={11}
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
                  font-family: 'Cantoria MT Std';
                  
                }
              `}
          />

          <View style={styles.rowtags}>
            <Text style={styles.tags}>Tags : </Text>

            <FlatList
              data={item.blog_tags}
              horizontal
              renderItem={({index, item}) => {
                return (
                  <View style={styles.viewtag}>
                    <Text style={styles.textags}>{item}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NewDetail;
