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

const Search = ({navigation, dispatch, authUser, route}) => {
  const ID = authUser.token.user_id;
  console.log(ID);
  const refRBSheet = useRef();
  const item = route.params.item;

  const tag = item != undefined && item.selectedtags;
  const type = item != undefined && item.selectedId;
  const text = route.params.text == undefined ? ' ' : route.params.text;

  const [product, setproduct] = useState([]);
  console.log(product);
  const [company, setcompany] = useState([]);
  const [brand, setbrand] = useState([]);
  const [categorys, setcategorys] = useState([]);

  const _Exhibitor_List = async values => {
    try {
      var request =
        'meet=' +
        '1' +
        '&tags=' +
        tag +
        '&type=' +
        type +
        '&text=' +
        text +
        '&user_id=' +
        ID;
      const response = await dispatch(Exhibitor_List(request));
      console.log(response);
      if (response.res_code == '00') {
        setproduct(response.res_result.product);
        setcompany(response.res_result.company);
        setbrand(response.res_result.brand);
        setcategorys(response.res_result.categorys);
        console.log('1111');
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
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
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
          <RBSheetsearch refRBSheet={refRBSheet} navigation={navigation} />
        </RBSheet>
        <ScrollView>
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
          {product.count == 0 ? (
            ' '
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
              data={categorys.data}
              horizontal={true}
              renderItem={({index, item}) => {
                console.log(item);
                return (
                  <View style={{marginRight: 20}}>
                    <View>
                      <Image
                        style={styles.imgflat1}
                        source={{uri: item.category_img}}
                      />

                      <Text numberOfLines={2} style={styles.text1}>
                        {item.product_category_name_en}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </SafeAreaView>
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
