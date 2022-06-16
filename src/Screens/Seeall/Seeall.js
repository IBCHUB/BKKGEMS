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
import RBSheetsearch from './RBSheetall';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {Exhibitor_List, Exprofile} from '../../action/data.action';
import {ViewScale} from '../../config/ViewScale';

const Seeall = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const scrollRef = useRef();
  const [textSearch, settextSearch] = useState('');
  console.log(textSearch);
  const [isrefresh, setIsRefresh] = useState(false);
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
  const key = route.params.key;
  const [deatilall, setdeatilallall] = useState(route.params.data);
  console.log(deatilall);
  const _Search = async value => {
    try {
      var request =
        'meet=' + '2' + '&tags=' + '' + '&type=' + '' + '&text=' + textSearch;

      const response = await dispatch(Exhibitor_List(request));
      console.log('????????', response.res_result);
      if (response.res_code == '00') {
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

        <View style={styles.tags}>
          <View style={styles.roww}>
            <Text style={styles.texttags}>
              {key === 'product'
                ? 'Product'
                : key === 'company'
                ? 'Company'
                : 'Brand'}{' '}
              <Text style={[styles.texttags, {color: '#DAA560'}]}>
                “{textSearch != undefined && textSearch}”
              </Text>{' '}
              Found {deatilall.count} Items
            </Text>
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
            refreshControl={<RefreshControl refreshing={isrefresh} />}
          />
          {deatilall.data.length > 8 && (
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
          )}
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
