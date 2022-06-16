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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import RBSheetsearch from './RBSheetsearch';
import {Exhibitor_List, Exprofile} from '../../action/data.action';
import {connect} from 'react-redux';
import {ViewScale} from '../../config/ViewScale';

const Search = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const item = route.params.item;
  const text = route.params.text;
  const {selectedId, selectedtags} = route.params;
  console.log(item);

  const [product, setproduct] = useState(item.product);
  const [company, setcompany] = useState(item.brand);
  const [brand, setbrand] = useState(item.company);
  const [datatext, setdatatext] = useState();
  const [textSearch, settextSearch] = useState('');

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

  const _Search = async (v1, v2) => {
    // console.log(values);
    try {
      let tagstem = '';
      let typetem = '';
      if (v1 != undefined) {
        tagstem = v1;
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
        '2' +
        '&tags=' +
        tagstem +
        '&type=' +
        typetem +
        '&text=' +
        textSearch;
      console.log(request);
      const response = await dispatch(Exhibitor_List(request));
      // console.log('????????', response.res_result);
      if (response.res_code == '00') {
        setproduct(response.res_result.product);
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const searchSubmit = text => {
    console.log('searchSubmit');
    _Search();
  };
  const searchChange = text => {
    console.log(text);
    settextSearch(text);
  };

  return (
    <View style={styles.container}>
      <Headerback navigation={navigation} item="SEARCH" />
      <RBSheet
        ref={refRBSheet}
        openDuration={250}
        animationType="slide"
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent',
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
              size={20}
              color={'#44444480'}
              style={styles.icon1}
            />
            <TextInput
              clearButtonMode="always"
              placeholder="What are you looking for?"
              placeholderTextColor={'#888888'}
              style={styles.input}
              onSubmitEditing={searchSubmit}
              onChange={event => {
                searchChange(event.nativeEvent.text);
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
        </View>

        {product.count == 0 ? (
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Company{' '}
              <Text style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                “{datatext}”
              </Text>{' '}
              Found {company.count} Items
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
                  style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                  “{datatext}”
                </Text>{' '}
                Found {product.count} Items
              </Text>
              {product.count > 3 && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Seeall', {
                      key: 'product',
                      data: product,
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
                  <View style={{marginRight: 20}}>
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
        {company.count == 0 ? (
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Company{' '}
              <Text style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                “{datatext}”
              </Text>{' '}
              Found {company.count} Items
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
                  style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                  “{datatext}”
                </Text>{' '}
                Found {company.count} Items
              </Text>
              {company.count > 3 && (
                <TouchableOpacity
                  style={styles.line}
                  onPress={() =>
                    navigation.navigate('Seeall', {
                      key: 'company',
                      data: company,
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
                  <View style={{marginRight: 20}}>
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
        {brand.count == 0 ? (
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Company{' '}
              <Text style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                “{datatext}”
              </Text>{' '}
              Found {company.count} Items
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
                  style={[styles.texttags, {color: '#DAA560', fontSize: 11}]}>
                  “{datatext}”
                </Text>{' '}
                Found {brand.count} Items
              </Text>
              {brand.count > 3 && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Seeall', {
                      key: 'brand',
                      data: brand,
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
                  <View style={{marginRight: 20}}>
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
              console.log(item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Cate', {
                      item: item.product_category_id,
                    });
                  }}
                  style={{marginRight: 20}}>
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
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
