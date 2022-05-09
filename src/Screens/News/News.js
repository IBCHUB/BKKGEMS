import React, {useEffect, useRef, useState} from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {New} from '../../action/data.action';
const News = ({navigation, dispatch}) => {
  const [data, setData] = useState([]);
  // const [search, setsearch] = useState('');
  // console.log(search);

  // function onSearch() {
  //   data.filter(item => {
  //     return item.blog_title.toLowerCase().includes(search.toLowerCase());
  //   });
  // }
  // const search = data.filter(item => console.log(item.blog_title));

  const _News = async values => {
    try {
      var request = 'page=' + '' + '&limits=' + '10' + '&order=' + '';
      const response = await dispatch(New(request));
      // console.log(response);
      if (response.res_code == '00') {
        setData(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _News();
  }, []);
  // 1 new
  // 2 trends
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headercomp item={'NEWS & TRENDS'} navigation={navigation} />
        <View style={styles.containerview}>
          <View style={{paddingBottom: 50}}>
            <View style={styles.viewsearch}>
              <FontAwesome5
                name="search"
                size={15}
                color={'#44444480'}
                style={styles.icon1}
              />
              <TextInput
                placeholder="Search news or articles"
                placeholderTextColor="#646363"
                style={styles.input}
                // onChangeText={setsearch}
              />
            </View>
            <FlatList
              data={data}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('NewDetail', {item});
                    }}>
                    <ImageBackground
                      style={styles.buttonflat}
                      source={{
                        uri: item.blog_img,
                      }}>
                      <LinearGradient
                        colors={['#00000000', '#1D0F0FF7']}
                        style={styles.linear}>
                        <Text style={styles.text}>{item.blog_title}</Text>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableOpacity>
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
            </TouchableOpacity>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>PREVIOUS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>NEXT</Text>
              </TouchableOpacity>
            </View> */}
            <View style={{marginBottom: 50}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(News);
