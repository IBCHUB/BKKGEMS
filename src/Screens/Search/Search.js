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

const Search = ({navigation, dispatch, authUser}) => {
  const ID = authUser.token.user_id;
  console.log(ID);
  const refRBSheet = useRef();

  const _Exhibitor_List = async values => {
    try {
      var request = 'username=' + values.email + '&password=' + values.password;
      const response = await dispatch(Exhibitor_List(request));
      // console.log(response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    // _Exhibitor_List();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
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
          <View style={styles.tags}>
            <Text style={styles.texttags}>
              Product{' '}
              <Text style={[styles.texttags, {color: '#DAA560'}]}>“Pearl”</Text>{' '}
              Found 100 Items
            </Text>
            <FlatList />
          </View>
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
