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
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headercomp from '../../Components/Headercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import RBSheetExhi from './RBSheetExhi';
import {connect} from 'react-redux';
import {Exhibitor} from '../../action/data.action';

const Exhibitors = ({navigation, dispatch, authUser}) => {
  const refRBSheet = useRef();
  const [data, setData] = useState([]);

  const [offset, setOffset] = useState(1);
  const _Exhibitor = async values => {
    try {
      var request = 'pageNumber=' + offset + '&pageSize=' + '10';
      const response = await dispatch(Exhibitor(request));
      console.log(response);
      if (response.res_code == '00') {
        setData(response.res_result);
        setOffset(offset + 1);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Exhibitor();
  }, []);

  return (
    <View style={styles.container}>
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
          <View style={{marginBottom: 50}}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({index, item}) => {
                console.log(item);
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
            />
            {/* <TouchableOpacity style={styles.dimon}>
              <Feather
                size={25}
                name="arrow-up-left"
                color={'#DAA560'}
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.row1}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>PREVIOUS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbotton}>NEXT</Text>
              </TouchableOpacity>
            </View> */}
            <View style={{height: 80}} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitors);
