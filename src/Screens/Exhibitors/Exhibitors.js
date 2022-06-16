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
  ActivityIndicator,
  Alert,
  RefreshControl,
  Dimensions,
  Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headercomp from '../../Components/Headercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import RBSheetExhi from './RBSheetExhi';
import {connect} from 'react-redux';
import {
  Exhibitor,
  Exhibitor_List,
  Exprofile,
  Search,
} from '../../action/data.action';
import {ViewScale} from '../../config/ViewScale';
import Autocomplete from 'react-native-autocomplete-input';

const {width, height} = Dimensions.get('window');
const Exhibitors = ({navigation, dispatch, authUser, LoadingCounters}) => {
  const refRBSheet = useRef();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [fetching_from_server, setFetching_from_server] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);
  const [isrefresh, setIsRefresh] = useState(false);

  const [datatext, setdatatext] = useState();
  const [textSearch, settextSearch] = useState('');
  const scrollRef = useRef();
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };

  const _Exhibitor = async values => {
    try {
      setFetching_from_server(true);
      var request = 'pageNumber=' + '1' + '&pageSize=' + '10';
      const response = await dispatch(Exhibitor(request));
      setIsListEnd(false);
      if (response.res_code == '00') {
        setData(response.res_result);

        // console.log('1111');
        setFetching_from_server(false);
        setOffset(1);
      } else {
        console.log('2222');
        setIsListEnd(true);
        setFetching_from_server(false);
      }
    } catch (error) {}
  };

  const LoadMore = async () => {
    try {
      setFetching_from_server(true);
      var request = 'pageNumber=' + offset + '&pageSize=' + '10';
      const response = await dispatch(Exhibitor(request));
      if (response.res_code == '00') {
        setData([...data, ...response.res_result]);
        // setData(response.res_result);
        setFetching_from_server(false);
        setOffset(val => val + 1);
      } else {
        setIsListEnd(true);
        setFetching_from_server(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = async () => {
    _Exhibitor();
  };
  const [state, setstate] = useState([]);
  const [query, setQuery] = useState('');
  console.log(query);
  const test = text => {
    setQuery(text);
    _Search(text);
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

  useEffect(() => {
    _Exhibitor();
    _Search();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Headercomp item={'EXHIBITOR  LIST'} navigation={navigation} />
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
              data={state.slice(0, 10)}
              value={query}
              hideResults={query.length == 0 ? true : false}
              autoCorrect={false}
              placeholder="What are you looking for?"
              placeholderTextColor={'#888888'}
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
                          [1, 2, 3] +
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
                width: ViewScale(320),
                marginTop:
                  Platform.OS === 'ios' ? ViewScale(35) : ViewScale(45),
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

        <FlatList
          data={data}
          numColumns={2}
          ref={scrollRef}
          style={{
            height: Platform.OS === 'ios' ? height * 0.725 : height * 0.74,
          }}
          renderItem={({index, item}) => {
            // console.log(item);
            return (
              <TouchableOpacity
                onPress={async () => {
                  try {
                    var request = 'exid=' + item.company_id;
                    const response = await dispatch(Exprofile(request));
                    //console.log(response);
                    if (response.res_code == '00') {
                      // setdetail(response.res_result);
                      navigation.navigate('ExhibitorsDetail', {
                        res: response.res_result,
                      });
                      // console.log('1111');
                    } else {
                      // console.log('2222');
                    }
                  } catch (error) {}
                }}
                style={styles.buttonflat}>
                <Image
                  resizeMode="stretch"
                  style={styles.imgflat}
                  source={{uri: item.company_cover}}
                  defaultSource={require('../../../assets/image/noimg-exhibitor.png')}
                />
                <View style={styles.row}>
                  <Image
                    resizeMode="cover"
                    style={styles.imglogo}
                    source={{uri: item.company_logo}}
                    defaultSource={require('../../../assets/image/noimg-exhibitor.png')}
                  />
                  <Text numberOfLines={1} style={styles.text}>
                    {item.company_name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          onEndReached={() => {
            if (!fetching_from_server && !isListEnd) {
              LoadMore();
            }
          }}
          onEndReachedThreshold={0.5}
          // ListFooterComponent={renderFooter}
          refreshControl={
            <RefreshControl refreshing={isrefresh} onRefresh={onRefresh} />
          }
        />

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
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
  // authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitors);
