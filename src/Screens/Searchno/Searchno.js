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
import {Exhibitor_List} from '../../action/data.action';
import {connect} from 'react-redux';
const Searchno = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const item = route.params != undefined && route.params.item;
  const tag = item != undefined && item.selectedtags;
  const type = item != undefined && item.selectedId;
  const text = route.params.text == undefined ? ' ' : route.params.text;
  const [product, setproduct] = useState([]);
  const [company, setcompany] = useState([]);
  const [brand, setbrand] = useState([]);
  const [data, setdata] = useState([]);
  console.log(data);
  const [categorys, setcategorys] = useState([
    {
      img: require('../../../assets/image/iocn/014.png'),
      text: 'GOLD JEWELRY',
    },
    {
      img: require('../../../assets/image/iocn/005.png'),
      text: 'GEMSTONES',
    },
    {
      img: require('../../../assets/image/iocn/001.png'),
      text: 'INTERNATIONAL PAVILION',
    },
    {
      img: require('../../../assets/image/iocn/015.png'),
      text: 'SILVER JEWELRY',
    },
    {
      img: require('../../../assets/image/iocn/002.png'),
      text: 'DISPLAY & PACKAGING',
    },
    {
      img: require('../../../assets/image/iocn/012.png'),
      text: 'DIAMONDS',
    },
    {
      img: require('../../../assets/image/iocn/004.png'),
      text: 'FINE JEWELRY',
    },
    {
      img: require('../../../assets/image/iocn/006.png'),
      text: 'PEARLS',
    },
    {
      img: require('../../../assets/image/iocn/007.png'),
      text: 'EQUIPMENT & TOOLS',
    },
    {
      img: require('../../../assets/image/iocn/013.png'),
      text: 'SYNTHETIC STONES',
    },
    {
      img: require('../../../assets/image/iocn/009.png'),
      text: 'OTHERS',
    },
    {
      img: require('../../../assets/image/iocn/008.png'),
      text: 'PRECIOUS METALS',
    },
    {
      img: require('../../../assets/image/iocn/011.png'),
      text: 'COSTUME & FASHION JEWELRY',
    },
    {
      img: require('../../../assets/image/iocn/003.png'),
      text: 'JEWELRY PARTS',
    },
    {
      img: require('../../../assets/image/iocn/010.png'),
      text: 'MACHINERY',
    },
  ]);

  const _Exhibitor_List = async values => {
    try {
      var request =
        'meet=' + '1' + '&tags=' + tag + '&type=' + type + '&text=' + text;
      const response = await dispatch(Exhibitor_List(request));

      if (response.res_code == '00') {
        setproduct(response.res_result.product);
        setcompany(response.res_result.company);
        setbrand(response.res_result.brand);
        setdata(response.res_result);
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Exhibitor_List();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
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

        {product.data ? (
          <View style={styles.com}>
            <Image
              source={require('../../../assets/image/folder.png')}
              style={styles.iconsea2}
            />
            <Text style={styles.textccom}>No result found</Text>
          </View>
        ) : (
          <View>
            {product.count == 0 ? (
              <Text style={[styles.texttags, {color: '#DAA560'}]}>
                No result found
              </Text>
            ) : (
              <View style={styles.tags}>
                <View style={styles.roww}>
                  <Text style={styles.texttags}>
                    Product{' '}
                    <Text style={[styles.texttags, {color: '#DAA560'}]}>
                      “{text}”
                    </Text>{' '}
                    Found {product.count} Items
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Seeall', {
                        key: 'product',
                        data: {data},
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
                </View>
                <FlatList
                  data={product.data}
                  horizontal={true}
                  renderItem={({index, item}) => {
                    return (
                      <View style={{marginRight: 20}}>
                        {index <= 2 && (
                          <TouchableOpacity style={styles.buttonflat}>
                            <Image
                              style={styles.imgflat}
                              source={{uri: item.company_cover}}
                            />

                            <Text numberOfLines={2} style={styles.text}>
                              {item.company_name}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
            )}
            {company.count == 0 ? (
              ' '
            ) : (
              <View style={styles.tags}>
                <View style={styles.roww}>
                  <Text style={styles.texttags}>
                    Company{' '}
                    <Text style={[styles.texttags, {color: '#DAA560'}]}>
                      “{text}”
                    </Text>{' '}
                    Found {company.count} Items
                  </Text>
                  <TouchableOpacity style={styles.line}>
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
                </View>
                <FlatList
                  data={company.data}
                  horizontal={true}
                  renderItem={({index, item}) => {
                    return (
                      <View style={{marginRight: 20}}>
                        {index <= 2 && (
                          <TouchableOpacity style={styles.buttonflat}>
                            <Image
                              style={styles.imgflat}
                              source={{uri: item.company_cover}}
                            />

                            <Text numberOfLines={2} style={styles.text}>
                              {item.company_name}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
            )}
            {brand.count == 0 ? (
              ' '
            ) : (
              <View style={styles.tags}>
                <View style={styles.roww}>
                  <Text style={styles.texttags}>
                    Brand{' '}
                    <Text style={[styles.texttags, {color: '#DAA560'}]}>
                      “{text}”
                    </Text>{' '}
                    Found {brand.count} Items
                  </Text>
                  <TouchableOpacity style={styles.line}>
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
                </View>
                <FlatList
                  data={brand.data}
                  horizontal={true}
                  renderItem={({index, item}) => {
                    return (
                      <View style={{marginRight: 20}}>
                        {index <= 2 && (
                          <TouchableOpacity style={styles.buttonflat}>
                            <Image
                              style={styles.imgflat}
                              source={{uri: item.company_cover}}
                            />

                            <Text numberOfLines={2} style={styles.text}>
                              {item.company_name}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>
        )}
        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#DAA560'}} />
        <View style={styles.tags}>
          <View style={styles.roww}>
            <Text style={styles.texttags}>Categorys</Text>
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
              // console.log(item);
              return (
                <View style={{marginRight: 20}}>
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
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchno);
