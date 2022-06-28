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
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import RBSheetsearch from './RBSheetsearch';
import {
  Exhibitor_List,
  Exprofile,
  Search,
  Tags,
} from '../../action/data.action';
import {connect} from 'react-redux';
import {ViewScale} from '../../config/ViewScale';
import Autocomplete from 'react-native-autocomplete-input';
import {savePtag} from '../../recoil/atoms';
import {useRecoilState} from 'recoil';
import Headerbacksearch from '../../Components/Headerbacksearch';
import Loader from '../../Components/Loader';

const Searchno = ({navigation, dispatch, route, LoadingCounters}) => {
  const [Ptag, setPtag] = useRecoilState(savePtag);
  // console.log(Ptag);
  const refRBSheet = useRef();
  const item = route.params.item;
  // console.log(item);
  const text = route.params.text;
  const {selectedId, selectedtags} = route.params;
  console.log(selectedtags);
  const [state, setstate] = useState([]);
  const [typetem, settypetem] = useState(selectedtags);
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
  const [product, setproduct] = useState(item.product);
  // console.log(product);
  const [company, setcompany] = useState(item.company);
  const [brand, setbrand] = useState(item.brand);
  const [textSearch, settextSearch] = useState(text);
  const [categorys, setcategorys] = useState([
    {
      img: require('../../../assets/image/iocn/014.png'),
      text: 'GOLD JEWELRY',
      product_category_id: 1,
    },
    {
      img: require('../../../assets/image/iocn/005.png'),
      text: 'GEMSTONES',
      product_category_id: 2,
    },
    {
      img: require('../../../assets/image/iocn/001.png'),
      text: 'INTERNATIONAL PAVILION',
      product_category_id: 3,
    },
    {
      img: require('../../../assets/image/iocn/015.png'),
      text: 'SILVER JEWELRY',
      product_category_id: 4,
    },
    {
      img: require('../../../assets/image/iocn/002.png'),
      text: 'DISPLAY & PACKAGING',
      product_category_id: 5,
    },
    {
      img: require('../../../assets/image/iocn/012.png'),
      text: 'DIAMONDS',
      product_category_id: 6,
    },
    {
      img: require('../../../assets/image/iocn/004.png'),
      text: 'FINE JEWELRY',
      product_category_id: 7,
    },
    {
      img: require('../../../assets/image/iocn/006.png'),
      text: 'PEARLS',
      product_category_id: 8,
    },
    {
      img: require('../../../assets/image/iocn/007.png'),
      text: 'EQUIPMENT & TOOLS',
      product_category_id: 9,
    },
    {
      img: require('../../../assets/image/iocn/013.png'),
      text: 'SYNTHETIC STONES',
      product_category_id: 10,
    },
    {
      img: require('../../../assets/image/iocn/009.png'),
      text: 'OTHERS',
      product_category_id: 11,
    },
    {
      img: require('../../../assets/image/iocn/010.png'),
      text: 'PRECIOUS METALS',
      product_category_id: 12,
    },
    {
      img: require('../../../assets/image/iocn/003.png'),
      text: 'COSTUME & FASHION JEWELRY',
      product_category_id: 13,
    },
    {
      img: require('../../../assets/image/iocn/011.png'),
      text: 'JEWELRY PARTS',
      product_category_id: 14,
    },
    {
      img: require('../../../assets/image/iocn/008.png'),
      text: 'MACHINERY',
      product_category_id: 15,
    },
  ]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log('>>>++', route.params);
  //     setproduct(item.product);
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  const _Search = async (v1, v2) => {
    renderNum();
    console.log(v1);
    try {
      let tagstem = '';
      let typetem = '';
      if (v1 != undefined) {
        tagstem = [1, 2, 3];
      } else {
        tagstem = selectedtags;
      }
      if (v2 != undefined) {
        typetem = v2;
      } else {
        typetem = selectedId;
      }
      var request =
        'meet=' +
        '1' +
        '&tags=' +
        typetem +
        '&type=' +
        tagstem +
        '&text=' +
        textSearch;
      console.log(request);
      const response = await dispatch(Exhibitor_List(request));
      console.log('????????', response.res_result);
      if (response.res_code == '00') {
        settypetem(typetem);
        setproduct(response.res_result.product);
        setbrand(response.res_result.brand);
        setcompany(response.res_result.company);
        if (response.res_result.product.data.length === 0) {
          setNum(
            parseInt(response.res_result.company.data.length) +
              parseInt(response.res_result.brand.data.length),
          );
        } else if (response.res_result.company.data.length === 0) {
          setNum(
            parseInt(response.res_result.product.data.length) +
              parseInt(response.res_result.brand.data.length),
          );
        } else if (response.res_result.brand.data.length === 0) {
          setNum(
            parseInt(response.res_result.product.data.length) +
              parseInt(response.res_result.company.data.length),
          );
        } else if (
          response.res_result.product.data.length === 0 &&
          response.res_result.company.data.length === 0
        ) {
          setNum(parseInt(response.res_result.brand.data.length));
        } else if (
          response.res_result.brand.data.length === 0 &&
          response.res_result.company.data.length === 0
        ) {
          setNum(parseInt(response.res_result.product.data.length));
        } else if (
          response.res_result.product.data.length === 0 &&
          response.res_result.brand.data.length === 0 &&
          response.res_result.company.data.length === 0
        ) {
          setNum('0');
        } else {
          setNum(
            parseInt(response.res_result.product.data.length) +
              parseInt(response.res_result.company.data.length) +
              parseInt(response.res_result.brand.data.length),
          );
        }
      } else {
        console.log('2222');
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
    console.log(request);
    const response = await dispatch(Exhibitor_List(request));

    if (response.res_code == '00') {
      setstate([]);
      setproduct(response.res_result.product);
      setbrand(response.res_result.brand);
      setcompany(response.res_result.company);
      if (response.res_result.product.data.length === 0) {
        setNum(
          parseInt(response.res_result.company.data.length) +
            parseInt(response.res_result.brand.data.length),
        );
      } else if (response.res_result.company.data.length === 0) {
        setNum(
          parseInt(response.res_result.product.data.length) +
            parseInt(response.res_result.brand.data.length),
        );
      } else if (response.res_result.brand.data.length === 0) {
        setNum(
          parseInt(response.res_result.product.data.length) +
            parseInt(response.res_result.company.data.length),
        );
      } else if (
        response.res_result.product.data.length === 0 &&
        response.res_result.company.data.length === 0
      ) {
        setNum(parseInt(response.res_result.brand.data.length));
      } else if (
        response.res_result.brand.data.length === 0 &&
        response.res_result.company.data.length === 0
      ) {
        setNum(parseInt(response.res_result.product.data.length));
      } else if (
        response.res_result.product.data.length === 0 &&
        response.res_result.brand.data.length === 0 &&
        response.res_result.company.data.length === 0
      ) {
        setNum('0');
      } else {
        setNum(
          parseInt(response.res_result.product.data.length) +
            parseInt(response.res_result.company.data.length) +
            parseInt(response.res_result.brand.data.length),
        );
      }
    } else {
      console.log('2222');
    }
  };

  const renderTextInput = props => {
    return <TextInput {...props} onSubmitEditing={onSubmit}></TextInput>;
  };
  const [Num, setNum] = useState('');
  // console.log(product.data.length, company.data.length, brand.data.length);
  const renderNum = () => {
    if (product.data.length === 0) {
      setNum(parseInt(company.data.length) + parseInt(brand.data.length));
    } else if (company.data.length === 0) {
      setNum(parseInt(product.data.length) + parseInt(brand.data.length));
    } else if (brand.data.length === 0) {
      setNum(parseInt(product.data.length) + parseInt(company.data.length));
    } else if (product.data.length === 0 && company.data.length === 0) {
      setNum(parseInt(brand.data.length));
    } else if (brand.data.length === 0 && company.data.length === 0) {
      setNum(parseInt(product.data.length));
    } else if (
      product.data.length === 0 &&
      brand.data.length === 0 &&
      company.data.length === 0
    ) {
      setNum('0');
    } else {
      setNum(
        parseInt(product.data.length) +
          parseInt(company.data.length) +
          parseInt(brand.data.length),
      );
    }
  };
  useEffect(() => {
    renderNum();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerbacksearch navigation={navigation} item="SEARCH" />
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
          selectedtagsSend={selectedtags}
          selectedIdSend={selectedId}
          Search={_Search}
        />
      </RBSheet>
      <ScrollView style={{backgroundColor: '#EEECE2'}}>
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
                            setproduct(response.res_result.product);
                            setbrand(response.res_result.brand);
                            setcompany(response.res_result.company);
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
        <View style={styles.tags1}>
          <Text style={styles.texttags}>
            All Results For{' '}
            <Text
              numberOfLines={1}
              style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
              “
              {Ptag.length === 0
                ? textSearch.length > 15
                  ? textSearch.substring(0, 15) + '...'
                  : textSearch
                : Ptag.map((step, i) => {
                    return (
                      <Text>
                        {i > 0 && ','}
                        {step}
                      </Text>
                    );
                  })}
              ”
            </Text>{' '}
            Total {Num} Items
          </Text>
        </View>
        {console.log('ooooo', product)}
        {product != undefined && product.data.length === 0 ? (
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Product{' '}
              <Text
                numberOfLines={1}
                style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
                “
                {textSearch.length > 15
                  ? textSearch.substring(0, 15) + '...'
                  : textSearch}
                ”
              </Text>{' '}
              Found {product.data.length} Items
            </Text>
            <Image
              source={require('../../../assets/image/folder.png')}
              style={styles.iconsea2}
            />
            <Text style={styles.textccom}>No result found</Text>
          </View>
        ) : (
          <View style={styles.tags}>
            <View style={styles.roww}>
              <Text style={styles.texttags}>
                Product{' '}
                <Text
                  style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
                  “
                  {textSearch.length > 15
                    ? textSearch.substring(0, 15) + '...'
                    : textSearch}
                  ”
                </Text>{' '}
                Found {product.data.length} Items
              </Text>
              {product.data.length > 3 && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Seeall', {
                      key: 'product',
                      data: product,
                      textSearch: textSearch,
                      selectedtags: selectedtags,
                      setproduct: setproduct,
                      setcompany: setcompany,
                      setbrand: setbrand,
                      settypetem: settypetem,
                      setNum: setNum,
                    })
                  }
                  style={styles.line}>
                  <Text
                    style={[
                      styles.texttags,
                      {
                        color: '#DAA560',
                      },
                    ]}>
                    SEE ALL
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <FlatList
              data={product.data}
              horizontal={true}
              renderItem={({index, item}) => {
                return (
                  <View style={{marginRight: 10}}>
                    <TouchableOpacity
                      onPress={async () => {
                        try {
                          var request = 'exid=' + item.company_id;
                          const response = await dispatch(Exprofile(request));
                          //console.log(response);
                          if (response.res_code == '00') {
                            // setdetail(response.res_result);
                            setTimeout(() => {
                              navigation.navigate('ExhibitorsDetail', {
                                res: response.res_result,
                              });
                            }, 300);

                            // console.log('1111');
                          } else {
                            // console.log('2222');
                          }
                        } catch (error) {}
                      }}
                      style={styles.buttonflat}>
                      <Image
                        style={styles.imgflat}
                        source={{uri: item.product_img_name}}
                        resizeMode="stretch"
                      />

                      <View style={styles.row}>
                        <Image
                          style={styles.imglogo}
                          source={{uri: item.company_logo}}
                        />
                        <Text numberOfLines={1} style={styles.text}>
                          {item.product_img_title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        )}
        {company.data.length == 0 ? (
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Company{' '}
              <Text style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
                “
                {textSearch.length > 15
                  ? textSearch.substring(0, 15) + '...'
                  : textSearch}
                ”
              </Text>{' '}
              Found {company.data.length} Items
            </Text>
            <Image
              source={require('../../../assets/image/folder.png')}
              style={styles.iconsea2}
            />
            <Text style={styles.textccom}>No result found</Text>
          </View>
        ) : (
          <View style={styles.tags}>
            <View style={styles.roww}>
              <Text style={styles.texttags}>
                Company{' '}
                <Text
                  style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
                  “
                  {textSearch.length > 15
                    ? textSearch.substring(0, 15) + '...'
                    : textSearch}
                  ”
                </Text>{' '}
                Found {company.data.length} Items
              </Text>
              {company.data.length > 3 && (
                <TouchableOpacity
                  style={styles.line}
                  onPress={() =>
                    navigation.navigate('Seeall', {
                      key: 'company',
                      data: company,
                      textSearch: textSearch,
                      selectedtags: selectedtags,
                      setproduct: setproduct,
                      setcompany: setcompany,
                      setbrand: setbrand,
                      settypetem: settypetem,
                      setNum: setNum,
                    })
                  }>
                  <Text
                    style={[
                      styles.texttags,
                      {
                        color: '#DAA560',
                      },
                    ]}>
                    SEE ALL
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <FlatList
              data={company.data}
              horizontal={true}
              renderItem={({index, item}) => {
                return (
                  <View style={{marginRight: 10}}>
                    <TouchableOpacity
                      onPress={async () => {
                        try {
                          var request = 'exid=' + item.company_id;
                          const response = await dispatch(Exprofile(request));
                          //console.log(response);
                          if (response.res_code == '00') {
                            // setdetail(response.res_result);
                            setTimeout(() => {
                              navigation.navigate('ExhibitorsDetail', {
                                res: response.res_result,
                              });
                            }, 300);

                            // console.log('1111');
                          } else {
                            // console.log('2222');
                          }
                        } catch (error) {}
                      }}
                      style={styles.buttonflat}>
                      <Image
                        style={styles.imgflat}
                        source={{uri: item.company_cover}}
                        resizeMode="stretch"
                      />

                      <View style={styles.row}>
                        <Image
                          style={styles.imglogo}
                          source={{uri: item.company_logo}}
                        />
                        <Text numberOfLines={1} style={styles.text}>
                          {item.company_name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        )}

        {typetem.length === 0 && (
          <View>
            {brand.data.length === 0 ? (
              <View style={styles.tags}>
                <Text style={styles.texttags}>
                  Brand{' '}
                  <Text
                    style={[styles.texttags, {color: '#DAA560', fontSize: 14}]}>
                    “
                    {textSearch.length > 15
                      ? textSearch.substring(0, 15) + '...'
                      : textSearch}
                    ”
                  </Text>{' '}
                  Found {brand.count} Items
                </Text>
                <Image
                  source={require('../../../assets/image/folder.png')}
                  style={styles.iconsea2}
                />
                <Text style={styles.textccom}>No result found</Text>
              </View>
            ) : (
              <View style={styles.tags}>
                <View style={styles.roww}>
                  <Text style={styles.texttags}>
                    Brand{' '}
                    <Text
                      style={[
                        styles.texttags,
                        {color: '#DAA560', fontSize: 14},
                      ]}>
                      “
                      {textSearch.length > 15
                        ? textSearch.substring(0, 15) + '...'
                        : textSearch}
                      ”
                    </Text>{' '}
                    Found {brand.data.length} Items
                  </Text>
                  {brand.data.length > 3 && (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Seeall', {
                          key: 'brand',
                          data: brand,
                          textSearch: textSearch,
                          selectedtags: selectedtags,
                          setproduct: setproduct,
                          setcompany: setcompany,
                          setbrand: setbrand,
                          settypetem: settypetem,
                          setNum: setNum,
                        })
                      }
                      style={styles.line}>
                      <Text
                        style={[
                          styles.texttags,
                          {
                            color: '#DAA560',
                          },
                        ]}>
                        SEE ALL
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
                <FlatList
                  data={brand.data}
                  horizontal={true}
                  renderItem={({index, item}) => {
                    return (
                      <View style={{marginRight: 10}}>
                        <TouchableOpacity
                          onPress={async () => {
                            try {
                              var request = 'exid=' + item.company_id;
                              const response = await dispatch(
                                Exprofile(request),
                              );
                              //console.log(response);
                              if (response.res_code == '00') {
                                // setdetail(response.res_result);
                                setTimeout(() => {
                                  navigation.navigate('ExhibitorsDetail', {
                                    res: response.res_result,
                                  });
                                }, 300);

                                // console.log('1111');
                              } else {
                                // console.log('2222');
                              }
                            } catch (error) {}
                          }}
                          style={styles.buttonflat}>
                          <Image
                            style={styles.imgflat}
                            source={{uri: item.company_cover}}
                            resizeMode="stretch"
                          />

                          <View style={styles.row}>
                            <Image
                              style={styles.imglogo}
                              source={{uri: item.company_logo}}
                            />
                            <Text numberOfLines={1} style={styles.text}>
                              {item.company_name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>
        )}

        <View style={styles.tags}>
          <View style={styles.roww}>
            <Text style={styles.texttags}>Categories</Text>
            <View style={styles.line}>
              <Text
                style={[
                  styles.texttags,
                  {
                    color: '#DAA560',
                  },
                ]}></Text>
            </View>
          </View>
          <FlatList
            data={categorys}
            horizontal={true}
            renderItem={({index, item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Cate', {
                      item: item.product_category_id,
                      text: item.text,
                    });
                  }}
                  style={{marginRight: 10}}>
                  <ImageBackground
                    source={require('../../../assets/image/iocn/000.png')}
                    style={styles.imgflat1}>
                    <Image
                      resizeMode="contain"
                      style={styles.imgflat2}
                      source={item.img}
                    />
                  </ImageBackground>
                  <Text numberOfLines={2} style={styles.text1}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchno);
