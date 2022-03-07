import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import Headercomp from '../../Components/Headercomp';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
const Hightligth = ({navigation}) => {
  const [data, setData] = useState([
    {
      img: require('../../../assets/image/exhi/11.png'),
      text: 'GUANGXI WUZHOU STARSGEM CO., LTD',
      icon: require('../../../assets/image/iocn/1.png'),
    },
    {
      img: require('../../../assets/image/exhi/12.png'),
      text: 'GUANGXI WUZHOU STARSGEM CO., LTD',
      icon: require('../../../assets/image/iocn/2.png'),
    },
    {
      img: require('../../../assets/image/exhi/13.png'),
      text: 'A AND D PACKAGE CARD CO.,LTD.',
      icon: require('../../../assets/image/iocn/3.png'),
    },
    {
      img: require('../../../assets/image/exhi/14.png'),
      text: '3 J JEWELRY CO., LTD.',
      icon: require('../../../assets/image/iocn/4.png'),
    },
    {
      img: require('../../../assets/image/exhi/11.png'),
      text: 'A ROYAL CO.',
      icon: require('../../../assets/image/iocn/5.png'),
    },
    {
      img: require('../../../assets/image/exhi/13.png'),
      text: 'A B IMPEX CO.,LTD.',
      icon: require('../../../assets/image/iocn/6.png'),
    },
    {
      img: require('../../../assets/image/exhi/14.png'),
      text: 'A.M.G.JEWELRY (THAILAND) CO.,LTD.',
      icon: require('../../../assets/image/iocn/7.png'),
    },
    {
      img: require('../../../assets/image/exhi/12.png'),
      text: 'A.J. THAI GEMS CO., LTD',
      icon: require('../../../assets/image/iocn/8.png'),
    },
    {
      img: require('../../../assets/image/exhi/13.png'),
      text: 'A B IMPEX CO.,LTD.',
      icon: require('../../../assets/image/iocn/6.png'),
    },
    {
      img: require('../../../assets/image/exhi/11.png'),
      text: 'A AND D PACKAGE CARD CO.,LTD.',
      icon: require('../../../assets/image/iocn/3.png'),
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headercomp item={'HIGHLIGHT'} navigation={navigation} />
        <ScrollView style={{backgroundColor: '#010302'}}>
          <View style={{marginBottom: 90}}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({index, item}) => {
                return (
                  <View>
                    <TouchableOpacity style={styles.buttonflat}>
                      <ImageBackground style={styles.imgflat} source={item.img}>
                        <View style={styles.row}>
                          <Image style={styles.imglogo} source={item.icon} />
                          <Text numberOfLines={1} style={styles.text}>
                            {item.text}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <TouchableOpacity style={styles.dimon}>
              <Feather
                size={25}
                name="arrow-up-left"
                color={'#DAA560'}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Hightligth;
