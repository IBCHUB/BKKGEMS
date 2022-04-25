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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headercomp from '../../Components/Headercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import RBSheetExhi from './RBSheetExhi';
import {connect} from 'react-redux';
import {Exhibitor} from '../../action/data.action';

const Exhibitors = ({navigation, dispatch, authUser, LoadingCounters}) => {
  const refRBSheet = useRef();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [fetching_from_server, setFetching_from_server] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);
  const [isrefresh, setIsRefresh] = useState(false);
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

        console.log('1111');
        setFetching_from_server(false);
        setOffset(1);
      } else {
        console.log('2222');
        setIsListEnd(true);
        setFetching_from_server(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Exhibitor();
  }, []);

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
  // const renderFooter = () => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.7}
  //       onPress={onPressTouch}
  //       style={styles.FloatingActionButtonStyle}>
  //       <Feather
  //         size={25}
  //         name="arrow-up-left"
  //         color={'#fff'}
  //         style={styles.icon}
  //       />
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headercomp item={'EXHIBITORS LIST'} navigation={navigation} />
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
                size={20}
                color={'#44444480'}
                style={styles.icon1}
              />
              <TextInput
                clearButtonMode="always"
                placeholder="What are you looking for?"
                placeholderTextColor={'#44444480'}
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
          <FlatList
            data={data}
            numColumns={2}
            ref={scrollRef}
            style={{height: 600}}
            renderItem={({index, item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ExhibitorsDetail', {item});
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
                      <Text numberOfLines={2} style={styles.text}>
                        {item.company_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
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

          {/* <TouchableOpacity onPress={onPressTouch} style={styles.dimon}>
              <Feather
                size={25}
                name="arrow-up-left"
                color={'#DAA560'}
                style={styles.icon}
              />
            </TouchableOpacity> */}

          {/* <View style={styles.row1}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>PREVIOUS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setOffset(offset + 1);
                }}
                style={styles.button}>
                <Text style={styles.textbotton}>NEXT</Text>
              </TouchableOpacity>*/}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressTouch}
            style={styles.FloatingActionButtonStyle}>
            <Feather
              size={25}
              name="arrow-up-left"
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitors);
