import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  Linking,
  Dimensions,
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headerhome from '../../Components/Headerhome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import TopicHome from './TopicHome';
import RBSheetHome from './RBSheetHome';
import AboutHome from './AboutHome';
import {getUser} from '../../action/auth.action';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {connect} from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import {
  Exhibitor_List,
  ImgTopic,
  Search,
  Topic,
} from '../../action/data.action';
import {ViewScale} from '../../config/ViewScale';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import GeneralStatusBarColor from '../../Components/GeneralStatusBarColor';
import {savePtag, saveRBSearch} from '../../recoil/atoms';
import {useRecoilState} from 'recoil';
const {width, height} = Dimensions.get('window');
const Home = ({navigation, dispatch, authData}) => {
  const [online, setOnline] = useState();
  // console.log(online);
  const refRBSheet = useRef();
  const [state, setstate] = useState([]);
  const [img, setimg] = useState();
  console.log('456789', img);
  const [query, setQuery] = useState('');

  const test = text => {
    setQuery(text);
    let i = 3;
    let interval = setInterval(() => {
      if (i > 1) {
        _Search(text);
        clearInterval(interval);
        return i;
      }
      i += 1;
    }, 1000);
  };

  const _Search = async values => {
    try {
      var request = 'text=' + values + '&type=' + '1';
      const response = await dispatch(Search(request));
      // console.log('2222222>>>>>>', response);
      if (response.res_code == '00') {
        setstate(response.res_result);
        // console.log('1111');
      } else {
        // console.log('2222');
      }
    } catch (error) {}
  };

  const _Topic = async values => {
    try {
      const response = await dispatch(Topic());
      if (response.res_code == '00') {
        var countDownDate = new Date(2022, 9, 7, 10, 0, 0).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        setOnline(distance);

        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  // 166251960.
  const [textSearch, settextSearch] = useState('');
  console.log(textSearch);

  const onSubmit = async values => {
    var request =
      'meet=' +
      '1' +
      '&tags=' +
      '' +
      '&type=' +
      [1, 2, 3] +
      '&text=' +
      textSearch;
    console.log(request);
    const response = await dispatch(Exhibitor_List(request));

    if (response.res_code == '00') {
      console.log(response);
      setstate([]);
      navigation.navigate('Searchno', {
        item: response.res_result,
        text: textSearch,
        selectedtags: [],
      });
    } else {
      console.log('2222');
    }
  };

  const renderTextInput = props => {
    return <TextInput {...props} onSubmitEditing={onSubmit}></TextInput>;
  };

  const _Img = async values => {
    try {
      const response = await dispatch(ImgTopic());
      console.log('2222222>>>>>>', response);
      if (response.res_code == '00') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        setimg(response.res_result[randomNumber].img);
        // console.log('1111');
      } else {
        // console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    // _loginUser();
    _Search();
    _Topic();
    _Img();
  }, []);

  return (
    <View style={styles.container}>
      <GeneralStatusBarColor barStyle="light-content" />
      <Headerhome navigation={navigation} />
      {/* <RBSheet
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
            borderTopRightRadius: ViewScale(10),
            borderTopLeftRadius: ViewScale(10),
            width: '96%',
            alignSelf: 'center',
            height: '60%',
          },
        }}>
        <RBSheetHome
          onPress={() => {
            refRBSheet.current.close();
          }}
          navigation={navigation}
        />
      </RBSheet> */}
      <ScrollView style={{backgroundColor: '#000'}}>
        <View style={styles.viewback}>
          <Image
            // source={require('../../../assets/image/imgpre.png')}
            source={{uri: img}}
            style={styles.imgtop}
          />
          <Image
            source={require('../../../assets/image/imgdiamond1.png')}
            style={styles.imgletf}
          />
          <Image
            source={require('../../../assets/image/imgdiamond.png')}
            style={styles.imgR}
          />
          <Image
            source={require('../../../assets/image/imgdimon.png')}
            style={styles.imgB}
          />
        </View>
        <View style={styles.viewon}>
          {/* <View style={styles.viewsearch}>
            <View style={styles.viewinsearch}>
              <FontAwesome5
                name="search"
                size={ViewScale(18)}
                color={'#44444480'}
                style={styles.icon}
              />

              <Autocomplete
                data={state.slice(0, 10)}
                value={query}
                hideResults={query.length == 0 ? true : false}
                autoCorrect={false}
                placeholder="What are you looking for?"
                placeholderTextColor={'#888888'}
                renderTextInput={renderTextInput}
                onChangeText={text => {
                  test(text);
                  settextSearch(text);
                }}
                flatListProps={{
                  keyExtractor: (_, idx) => idx,
                  renderItem: ({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={
                          async () => {
                            var request =
                              'meet=' +
                              '1' +
                              '&tags=' +
                              '' +
                              '&type=' +
                              [1, 2, 3] +
                              '&text=' +
                              item;
                            const response = await dispatch(
                              Exhibitor_List(request),
                            );
                            console.log(response);
                            if (response.res_code == '00') {
                              setstate([]);
                              navigation.navigate('Searchno', {
                                item: response.res_result,
                                text: item,
                                selectedtags: [],
                              });
                            } else {
                              console.log('2222');
                            }
                          }
                          // navigation.navigate('Searchno', {text: item})
                        }>
                        <Text
                          style={{
                            fontSize: ViewScale(18),
                            padding: ViewScale(3),
                            fontFamily: 'Cantoria MT Std',
                            color: '#000',
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
                style={styles.input}
                listContainerStyle={{
                  width: ViewScale(325),
                  marginTop:
                    Platform.OS === 'ios' ? ViewScale(35) : ViewScale(45),
                  zIndex: 99,
                  position: 'absolute',
                  borderRadius: ViewScale(5),
                }}
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
          </View> */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bkkgems.com/data/file/exhibitors/BGJF67%20E-Fair%20Cat%20A-Z.pdf',
              );
            }}
            style={styles.viewsearch}>
            <View style={styles.viewinsearch}>
              <View style={styles.rowfair}>
                <Text style={styles.up}>67</Text>
                <Text style={styles.up1}>th</Text>
                <Text style={styles.up}> EXHIBITOR LIST (UPDATED)</Text>
              </View>
            </View>
            <ImageBackground
              source={require('../../../assets/image/2.png')}
              style={styles.new}>
              <Text style={styles.textnew}> NEW</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TopicHome />

          {online != undefined && online === 0 ? (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.bgjf-vtf.com/');
              }}
              style={styles.imglive}>
              <Image
                source={require('../../../assets/image/join.png')}
                style={styles.imgS}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.imglive}>
              <Image
                source={require('../../../assets/image/logobkk.png')}
                style={styles.imgS}
              />
            </View>
          )}

          <AboutHome navigation={navigation} />
        </View>

        <View
          style={{
            height: Platform.OS === 'ios' ? height * 0.28 : height * 0.65,
          }}
        />
      </ScrollView>
    </View>
  );
};

// export default Home;
// const mapStateToProps = state => ({
//   LoadingCounters: state.dataReducer.LoadingCounters,
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Home);
