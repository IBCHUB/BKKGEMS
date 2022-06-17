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
  RefreshControl,
  Dimensions,
  Platform,
} from 'react-native';
import Headercomp from '../../Components/Headercomp';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Exprofile, Product_Highlight} from '../../action/data.action';
import {connect} from 'react-redux';
import {ViewScale} from '../../config/ViewScale';

const {width, height} = Dimensions.get('window');
const Hightligth = ({navigation, dispatch}) => {
  const [highlight, setHighlight] = useState([]);
  const scrollRef = useRef();
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
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

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headercomp item={'HIGHLIGHT'} navigation={navigation} />
      <View style={{backgroundColor: '#010302', marginBottom: ViewScale(20)}}>
        <FlatList
          data={highlight}
          numColumns={2}
          style={{
            height: Platform.OS === 'ios' ? height * 0.81 : height * 0.84,
          }}
          ref={scrollRef}
          renderItem={({index, item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={async () => {
                    try {
                      var request =
                        'exid=' +
                        item.company_id +
                        '&product_id=' +
                        item.product_img_id;
                      const response = await dispatch(Exprofile(request));

                      if (response.res_code == '00') {
                        navigation.navigate('ExhibitorsDetail', {
                          res: response.res_result,
                        });
                        console.log('1111');
                      } else {
                        console.log('2222');
                      }
                    } catch (error) {}
                  }}
                  style={styles.buttonflat}>
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.imgflat}
                    source={{uri: item.product_img_name}}>
                    <LinearGradient
                      colors={['#00000000', '#1D0F0FF7']}
                      style={styles.row}>
                      <Image
                        resizeMode="cover"
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
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPressTouch}
        style={styles.FloatingActionButtonStyle}>
        <Feather
          size={ViewScale(25)}
          name="arrow-up-left"
          color={'#DAA560'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={{marginBottom: 30}} />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Hightligth);
