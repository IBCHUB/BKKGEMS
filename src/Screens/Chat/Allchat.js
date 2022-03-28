import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
const Allchat = ({navigation}) => {
  const [data, setData] = useState([
    {
      chat: 'GOLDEN STONE CO., LTD.',
      icon: require('../../../assets/image/iocn/1.png'),
      text: 'Greeting from Bangko…',
      read: false,
      time: 'Today 09:34',
    },
    {
      chat: 'OPALS MINE FACTORY',
      icon: require('../../../assets/image/iocn/2.png'),
      text: 'Dear Sir, We apologize for…',
      read: true,
      time: 'Dec 9,2021 21:48',
    },
    {
      chat: 'ABC STONE CO.,LTD.',
      icon: require('../../../assets/image/iocn/3.png'),
      text: 'We have a New year promo...',
      read: true,
      time: 'Dec 7,2021 20:14',
    },
    {
      chat: 'ALPER TUNCOKU JEWELRY',
      icon: require('../../../assets/image/iocn/4.png'),
      text: 'Thank you …',
      read: true,
      time: 'Dec 7,2021 20:09',
    },
  ]);
  return (
    <FlatList
      data={data}
      renderItem={({index, item}) => {
        return (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Pagechat')}
              style={styles.buttonflat}>
              <Image style={styles.imgflat} source={item.icon} />
              <View style={styles.roww}>
                <View style={styles.row}>
                  <Text numberOfLines={1} style={styles.topchat}>
                    {item.chat}
                  </Text>
                  <Text style={styles.detail}>{item.text}</Text>
                </View>
                <View style={styles.row}>
                  {item.read == false ? (
                    <View style={styles.unread} />
                  ) : (
                    <View />
                  )}
                  <Text numberOfLines={1} style={styles.texttime}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default Allchat;
