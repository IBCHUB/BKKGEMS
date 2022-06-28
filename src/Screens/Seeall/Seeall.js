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
  TextInput,
  RefreshControl,
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import RBSheetsearch from './RBSheetall';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {Exhibitor_List, Exprofile, Search} from '../../action/data.action';
import {ViewScale} from '../../config/ViewScale';
import Autocomplete from 'react-native-autocomplete-input';
const Seeall = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const scrollRef = useRef();
  const textSearch1 = route.params.textSearch;
  const selectedtags = route.params.selectedtags;
  const [textSearch, settextSearch] = useState(textSearch1);
  const [CKAZ, setCKAZ] = useState(true);
  const [CKZA, setCKZA] = useState(false);

  const [isrefresh, setIsRefresh] = useState(false);
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
  const key = route.params.key;
  console.log(key);

  const [deatilall, setdeatilallall] = useState(route.params.data);
  console.log(deatilall);

  const [state, setstate] = useState([]);
  const [query, setQuery] = useState('');

  const test = text => {
    setQuery(text);
    let i = 3;
    let interval = setInterval(() => {
      if (i > 1) {
        _Search1(text);
        clearInterval(interval);

        return i;
      }
      i += 1;
    }, 1000);
  };
  const _Search1 = async values => {
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
    const response = await dispatch(Exhibitor_List(request));
    if (response.res_code == '00') {
      setstate([]);
      if (key === 'product') {
        setdeatilallall(response.res_result.product);
      } else if (key === 'company') {
        setdeatilallall(response.res_result.company);
      } else {
        setdeatilallall(response.res_result.brand);
      }
    } else {
      console.log('2222');
    }
  };

  const renderTextInput = props => {
    return <TextInput {...props} onSubmitEditing={onSubmit}></TextInput>;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback navigation={navigation} item="SEARCH" />
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
        <RBSheetsearch
          onPress={() => {
            refRBSheet.current.close();
          }}
          navigation={navigation}
          key={key}
          setproduct={route.params.setproduct}
          setcompany={route.params.setcompany}
          setbrand={route.params.setbrand}
          settypetem={route.params.settypetem}
          setNum={route.params.setNum}
        />
      </RBSheet>
      <View style={{backgroundColor: '#EEECE2'}}>
        <View style={styles.viewsearch}>
          <View style={styles.viewinsearch}>
            <FontAwesome5
              name="search"
              size={ViewScale(20)}
              color={'#44444480'}
              style={styles.icon1}
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
                          let data =
                            key === 'product' ? 1 : key === 2 ? 'company' : 3;
                          var request =
                            'meet=' +
                            '1' +
                            '&tags=' +
                            '' +
                            '&type=' +
                            data +
                            '&text=' +
                            item;
                          console.log(request);
                          const response = await dispatch(
                            Exhibitor_List(request),
                          );
                          console.log(response);
                          if (response.res_code == '00') {
                            setstate([]);
                            if (key === 'product') {
                              setdeatilallall(response.res_result.product);
                            } else if (key === 'company') {
                              setdeatilallall(response.res_result.company);
                            } else {
                              setdeatilallall(response.res_result.brand);
                            }
                            settextSearch(item);
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
                  Platform.OS === 'ios' ? ViewScale(40) : ViewScale(45),
                zIndex: 99,
                position: 'absolute',
                borderRadius: ViewScale(5),
              }}
            />
            {/* <TextInput
              clearButtonMode="always"
              placeholder="What are you looking for?"
              placeholderTextColor={'#888888'}
              style={styles.input}
              onSubmitEditing={searchSubmit}
              onChange={event => {
                searchChange(event.nativeEvent.text);
              }}
            /> */}
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

        <View style={styles.tags}>
          <View style={styles.roow}>
            <View style={styles.roww}>
              <Text style={styles.texttags}>
                {key === 'product'
                  ? 'Product'
                  : key === 'company'
                  ? 'Company'
                  : 'Brand'}{' '}
                <Text style={[styles.texttags, {color: '#DAA560'}]}>
                  “
                  {textSearch != undefined && textSearch.length > 15
                    ? textSearch.substring(0, 14) + '...'
                    : textSearch}
                  ”
                </Text>{' '}
                Found {deatilall.count} Items
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={async () => {
                  let data = key === 'product' ? 1 : key === 'company' ? 3 : 2;
                  var request =
                    'meet=' +
                    '1' +
                    '&tags=' +
                    selectedtags +
                    '&type=' +
                    data +
                    '&text=' +
                    '' +
                    '&order=' +
                    'ASC';
                  console.log(request);
                  const response = await dispatch(Exhibitor_List(request));
                  console.log(response);
                  if (response.res_code == '00') {
                    if (key === 'product') {
                      setdeatilallall(response.res_result.product);
                    } else if (key === 'company') {
                      setdeatilallall(response.res_result.company);
                    } else {
                      setdeatilallall(response.res_result.brand);
                    }
                    setCKAZ(true);
                    setCKZA(false);
                  } else {
                    console.log('2222');
                  }
                }}
                style={[
                  styles.botton,
                  {backgroundColor: CKAZ === true ? '#DAA560' : '#EEECE2'},
                ]}>
                <Text style={styles.textb}>A-Z</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  let data = key === 'product' ? 1 : key === 'company' ? 3 : 2;
                  var request =
                    'meet=' +
                    '1' +
                    '&tags=' +
                    selectedtags +
                    '&type=' +
                    data +
                    '&text=' +
                    '' +
                    '&order=' +
                    'DESC';
                  console.log(request);
                  const response = await dispatch(Exhibitor_List(request));
                  if (response.res_code == '00') {
                    if (key === 'product') {
                      setdeatilallall(response.res_result.product);
                    } else if (key === 'company') {
                      setdeatilallall(response.res_result.company);
                    } else {
                      // console.log(response.res_result);
                      setdeatilallall(response.res_result.brand);
                    }
                    setCKAZ(false);
                    setCKZA(true);
                  } else {
                    console.log('2222');
                  }
                }}
                style={[
                  styles.botton,
                  {backgroundColor: CKZA === true ? '#DAA560' : '#EEECE2'},
                ]}>
                <Text style={styles.textb}>Z-A</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={deatilall.data}
            numColumns={2}
            ref={scrollRef}
            style={{height: 650}}
            renderItem={({index, item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={async () => {
                      try {
                        var request = 'exid=' + item.company_id;
                        const response = await dispatch(Exprofile(request));
                        //console.log(response);
                        if (response.res_code == '00') {
                          setTimeout(() => {
                            navigation.navigate('ExhibitorsDetail', {
                              res: response.res_result,
                            });
                          }, 300); // console.log('1111');
                        } else {
                          // console.log('2222');
                        }
                      } catch (error) {}
                    }}
                    style={styles.buttonflat}>
                    <Image
                      style={styles.imgflat}
                      source={{
                        uri:
                          item.product_img_name != undefined
                            ? item.product_img_name
                            : item.company_cover,
                      }}
                    />
                    <View style={styles.row}>
                      <Image
                        style={styles.imglogo}
                        source={{uri: item.company_logo}}
                      />
                      <Text numberOfLines={1} style={styles.text}>
                        {item.product_img_title != undefined
                          ? item.product_img_title
                          : item.company_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            refreshControl={<RefreshControl refreshing={isrefresh} />}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressTouch}
            style={styles.FloatingActionButtonStyle}>
            <Feather
              size={25}
              name="arrow-up-left"
              color={'#DAA560'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   authUser: state.authReducer.authUser,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Seeall);
