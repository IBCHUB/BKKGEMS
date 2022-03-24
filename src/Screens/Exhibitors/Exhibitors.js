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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headercomp from '../../Components/Headercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import RBSheetExhi from './RBSheetExhi';

const Exhibitors = ({navigation}) => {
  const [data, setData] = useState([
    {
      img: require('../../../assets/image/exhi/1.png'),
      text: 'GUANGXI WUZHOU STARSGEM CO., LTD',
      icon: require('../../../assets/image/iocn/1.png'),
    },
    {
      img: require('../../../assets/image/exhi/2.png'),
      text: 'GUANGXI WUZHOU STARSGEM CO., LTD',
      icon: require('../../../assets/image/iocn/2.png'),
    },
    {
      img: require('../../../assets/image/exhi/3.png'),
      text: 'A AND D PACKAGE CARD CO.,LTD.',
      icon: require('../../../assets/image/iocn/3.png'),
    },
    {
      img: require('../../../assets/image/exhi/4.png'),
      text: '3 J JEWELRY CO., LTD.',
      icon: require('../../../assets/image/iocn/4.png'),
    },
    {
      img: require('../../../assets/image/exhi/5.png'),
      text: 'A ROYAL CO.',
      icon: require('../../../assets/image/iocn/5.png'),
    },
    {
      img: require('../../../assets/image/exhi/1.png'),
      text: 'A B IMPEX CO.,LTD.',
      icon: require('../../../assets/image/iocn/6.png'),
    },
    {
      img: require('../../../assets/image/exhi/2.png'),
      text: 'A.M.G.JEWELRY (THAILAND) CO.,LTD.',
      icon: require('../../../assets/image/iocn/7.png'),
    },
    {
      img: require('../../../assets/image/exhi/4.png'),
      text: 'A.J. THAI GEMS CO., LTD',
      icon: require('../../../assets/image/iocn/8.png'),
    },
  ]);
  const refRBSheet = useRef();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headercomp item={'EXHIBITORS LIST'} navigation={navigation} />
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              width: '96%',
              alignSelf: 'center',
              height: '60%',
            },
          }}>
          <RBSheetExhi refRBSheet={refRBSheet} navigation={navigation} />
        </RBSheet>
        <ScrollView style={{backgroundColor: '#EEECE2'}}>
          <View style={styles.viewsearch}>
            <View style={styles.viewinsearch}>
              <FontAwesome5
                name="search"
                size={20}
                color={'#44444480'}
                style={styles.icon1}
              />
              <TextInput
                clearButtonMode="always"
                placeholder="What are you looking for?"
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{alignSelf: 'center'}}>
              <Image
                source={require('../../../assets/image/icontouch.png')}
                style={styles.iconsea}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 50}}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({index, item}) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ExhibitorsDetail', {item});
                      }}
                      style={styles.buttonflat}>
                      <Image style={styles.imgflat} source={item.img} />
                      <View style={styles.row}>
                        <Image style={styles.imglogo} source={item.icon} />
                        <Text style={styles.text}>{item.text}</Text>
                      </View>
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
            <View style={styles.row1}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>PREVIOUS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Exhibitors;
