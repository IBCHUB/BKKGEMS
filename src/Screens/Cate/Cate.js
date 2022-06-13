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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import Autocomplete from 'react-native-autocomplete-input';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {
  Categories,
  Exhibitor_List,
  Exprofile,
  Search,
} from '../../action/data.action';
import RBSheetExhi from '../Exhibitors/RBSheetExhi';
import {ViewScale} from '../../config/ViewScale';
const Cate = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const scrollRef = useRef();
  const {item} = route.params;
  console.log(item);
  const [state, setstate] = useState();
  const [query, setQuery] = useState('');
  console.log(query);
  const test = text => {
    setQuery(text);
    _Search(text);
  };
  const [isrefresh, setIsRefresh] = useState(false);
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
  const _Search = async values => {
    try {
      var request = 'text=' + values + '&type=' + '1';
      const response = await dispatch(Search(request));

      if (response.res_code == '00') {
        setstate(response.res_result);
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const [data, setData] = useState([]);
  const _Categ = async values => {
    try {
      var request = 'tags=' + '' + '&type=' + '4' + '&text=' + item;
      const response = await dispatch(Categories(request));
      console.log(response);
      if (response.res_code == '00') {
        setData(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Search();
    _Categ();
  }, []);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <Headerback item={'Categories'} navigation={navigation} />
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
        <RBSheetExhi
          onPress={() => {
            refRBSheet.current.close();
          }}
          navigation={navigation}
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
              data={state}
              value={query}
              hideResults={query.length == 0 ? true : false}
              autoCorrect={false}
              placeholder="What are you looking for?"
              onChangeText={text => {
                test(text);
              }}
              flatListProps={{
                keyExtractor: (_, idx) => idx,
                renderItem: ({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        var request =
                          'meet=' +
                          '2' +
                          '&tags=' +
                          '' +
                          '&type=' +
                          '' +
                          '&text=' +
                          item;
                        const response = await dispatch(
                          Exhibitor_List(request),
                        );
                        if (response.res_code == '00') {
                          navigation.navigate('Search', {
                            item: response.res_result,
                            text: item,
                          });
                        } else {
                          console.log('2222');
                        }
                      }}>
                      <Text
                        style={{
                          fontSize: ViewScale(18),
                          padding: ViewScale(3),
                          fontFamily: 'Cantoria MT Std',
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
                marginTop: ViewScale(38),
                position: 'absolute',
                borderRadius: 5,
                backgroundColor: '#fff',
                zIndex: 999,
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
        <View style={styles.roww}>
          <Text style={styles.texttags}>
            Categories{' '}
            <Text style={[styles.texttags, {color: '#DAA560'}]}>""</Text> Found{' '}
            {data.length} Items
          </Text>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          ref={scrollRef}
          style={{height: 650}}
          renderItem={({index, item}) => {
            console.log(item);
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
                    source={{uri: item.company_cover}}
                    defaultSource={require('../../../assets/image/noimg-exhibitor.png')}
                  />
                  <View style={styles.row}>
                    <Image
                      style={styles.imglogo}
                      source={{uri: item.company_logo}}
                      defaultSource={require('../../../assets/image/noimg-exhibitor.png')}
                    />
                    <Text numberOfLines={2} style={styles.text}>
                      {item.company_name}
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
            size={ViewScale(25)}
            name="arrow-up-left"
            color={'#fff'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Cate);
