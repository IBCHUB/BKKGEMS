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
} from 'react-native';
import Headercomp from '../../Components/Headercomp';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const News = ({navigation}) => {
  const [data, setData] = useState([
    {
      img: require('../../../assets/image/new/1.png'),
      text: 'Bangkok Gems & Jewelry Fair’s Highest Covid-19 Preventive Measures',
    },
    {
      img: require('../../../assets/image/new/2.png'),
      text: 'The Trading Arena of Global Gems & Jewelry Industry',
    },
    {
      img: require('../../../assets/image/new/3.png'),
      text: 'DITP collaborates with French branding guru to unveil the most influential …',
    },
    {
      img: require('../../../assets/image/new/4.png'),
      text: 'The Bangkok Gems & Jewelry Fair is ready to celebrate its 60th edition with…',
    },
    {
      img: require('../../../assets/image/new/5.png'),
      text: 'Reminder for BGJF Exhibitors Hurry Up!',
    },
    {
      img: require('../../../assets/image/new/3.png'),
      text: 'DITP Gears up for Buyers Recruit to join 59th BGJF',
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headercomp navigation={navigation} />
        <ScrollView style={styles.containerview}>
          <View>
            <FlatList
              data={data}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                  // onPress={() => {
                  //   navigation.navigate('ExhibitorsDetail', {item});
                  // }}
                  >
                    <ImageBackground
                      style={styles.buttonflat}
                      source={item.img}>
                      <LinearGradient
                        colors={['#00000000', '#1D0F0FF7']}
                        style={styles.linear}>
                        <Text style={styles.text}>{item.text}</Text>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>122</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default News;
