import React, {useEffect, useRef, useState} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Product_Highlight} from '../../action/data.action';
import {connect} from 'react-redux';
const Hightligth = ({navigation, dispatch}) => {
  const [highlight, setHighlight] = useState([]);

  const _Highlight = async values => {
    try {
      const response = await dispatch(Product_Highlight());
      console.log(response);
      if (response.res_code == '00') {
        setHighlight(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _Highlight();
  }, []);
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
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headercomp item={'HIGHLIGHT'} navigation={navigation} />
        <ScrollView style={{backgroundColor: '#010302', height: '100%'}}>
          <View style={{marginBottom: 90}}>
            <FlatList
              data={highlight}
              numColumns={2}
              renderItem={({index, item}) => {
                console.log(item);
                return (
                  <View>
                    <TouchableOpacity style={styles.buttonflat}>
                      <ImageBackground
                        style={styles.imgflat}
                        source={{uri: item.product_img_name}}>
                        <LinearGradient
                          colors={['#00000000', '#1D0F0FF7']}
                          style={styles.row}>
                          <Image
                            style={styles.imglogo}
                            source={{uri: item.company_logo}}
                          />
                          <Text numberOfLines={1} style={styles.text}>
                            {item.company_name}
                          </Text>
                        </LinearGradient>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            {/* <TouchableOpacity style={styles.dimon}>
              <Feather
                size={25}
                name="arrow-up-left"
                color={'#DAA560'}
                style={styles.icon}
              />
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Hightligth);
