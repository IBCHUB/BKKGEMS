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
import RBSheetsearch from '../Search/RBSheetsearch';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {Exhibitor_List} from '../../action/data.action';
const Seeall = ({navigation, dispatch, authUser, route}) => {
  const refRBSheet = useRef();
  const scrollRef = useRef();
  const [isrefresh, setIsRefresh] = useState(false);
  const onPressTouch = () => {
    scrollRef?.current?.scrollToIndex({index: 0});
    // scrollRef.current?.scrollTo({
    //   y: 0,
    //   animated: true,
    // });
  };
  const detail = route.params.data.data;
  console.log(detail);
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

        <View style={styles.tags}>
          <View style={styles.roww}>
            <Text style={styles.texttags}>
              Product{' '}
              <Text style={[styles.texttags, {color: '#DAA560'}]}>“{''}”</Text>{' '}
              Found Items
            </Text>
          </View>
          {/* <FlatList
              data={route.params.data.data.product.data}
              numColumns={2}
              renderItem={({index, item}) => {
                console.log(item);
                return (
                  <View style={{marginRight: 20}}>
                    <TouchableOpacity style={styles.buttonflat}>
                      <Image
                        style={styles.imgflat}
                        source={{uri: item.company_cover}}
                      />

                      <Text numberOfLines={2} style={styles.text}>
                        {item.company_name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            /> */}
          <FlatList
            data={route.params.data.data.product.data}
            numColumns={2}
            ref={scrollRef}
            style={{height: 650}}
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
            refreshControl={<RefreshControl refreshing={isrefresh} />}
          />
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
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Seeall);
