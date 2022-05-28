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
  ImageBackground,
  Dimensions,
} from 'react-native';
import Headercomp from '../../Components/Headercomp';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {New} from '../../action/data.action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const {width, height} = Dimensions.get('window');
const News = ({navigation, dispatch}) => {
  const refRBSheet = useRef();
  const [data, setData] = useState([]);
  const [textSearch, settextSearch] = useState('');
  const _News = async values => {
    try {
      var request = 'page=' + '' + '&limits=' + '10' + '&order=' + 'desc';
      const response = await dispatch(New(request));
      // console.log(response);
      if (response.res_code == '00') {
        setData(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const searchSubmit = async text => {
    console.log('searchSubmit');
    var request =
      'page=' +
      '' +
      '&limits=' +
      '10' +
      '&order=' +
      'desc' +
      '&type=' +
      '' +
      '&text=' +
      textSearch;
    const response = await dispatch(New(request));
    // console.log(response);
    if (response.res_code == '00') {
      setData(response.res_result);
      console.log('1111');
    } else {
      console.log('2222');
    }
  };
  const searchChange = text => {
    console.log(text);
    settextSearch(text);
  };
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            handleCheckBox(item.id);
          }}
          style={{flexDirection: 'row', marginBottom: 5}}>
          <FontAwesome
            name={isChecked(item.id) ? 'check-circle' : 'circle-thin'}
            size={26}
            color="#DAA560"
            uncheckedColor="#ceced4"
          />
          <View style={{marginLeft: 10}} />
          <Text style={styles.textsortdetail}>{item.text}</Text>
        </TouchableOpacity>
        <View />
      </View>
    );
  };
  const [selectedId, setselectedId] = useState([]);
  console.log(selectedId);
  const [checked, setChecked] = useState(false);

  const isChecked = id => {
    const isCheck = selectedId.includes(id);
    return isCheck;
  };
  const handleCheckBox = id => {
    const ids = [...selectedId, id];
    if (isChecked(id)) {
      console.log('เอาออก');
      setselectedId(selectedId.filter(item => item !== id));
    } else {
      console.log('เอาเข้า');
      setselectedId(ids);
    }
    setChecked(selectedId.length + 1 == sort.length);
  };
  const sort = [
    {
      id: 1,
      text: 'Show News',
    },
    {
      id: 2,
      text: 'Show Trenes',
    },
  ];
  useEffect(() => {
    _News();
  }, []);

  // 1 new
  // 2 trends
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <Headercomp item={'NEWS & TRENDS'} navigation={navigation} />
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
            width: '100%',
            alignSelf: 'center',
            height: '25%',
          },
        }}>
        <View style={styles.containersort}>
          <View style={styles.viewsort}>
            <View />
            <Text style={styles.textsort}>Filters</Text>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}
              style={{alignSelf: 'center'}}>
              <EvilIcons name="close" size={25} color={'#000'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.textsorthead}>Sort</Text>
          <View style={{marginTop: 5}}>
            <View style={{width: '100%'}}>
              <FlatList
                data={sort}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={styles.rowbar}>
            <TouchableOpacity
              onPress={() => {
                if ({checked}) {
                  setselectedId([]);
                } else {
                  let ids2 = [];
                  sort.map((value, item) => {
                    ids2.push(value.id);
                  });
                }
                setChecked(!checked);
              }}
              style={styles.touch}>
              <Text style={styles.textouch}>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                console.log('111');
                var request =
                  'page=' +
                  '' +
                  '&limits=' +
                  '10' +
                  '&order=' +
                  'desc' +
                  '&type=' +
                  selectedId;
                const response = await dispatch(New(request));
                // console.log(response);
                if (response.res_code == '00') {
                  setData(response.res_result);
                  refRBSheet.current.close();
                  console.log('1111');
                } else {
                  console.log('2222');
                }
              }}
              style={[styles.touch, {backgroundColor: '#DAA560'}]}>
              <Text style={[styles.textouch, {color: '#fff'}]}>DONE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <View style={styles.containerview}>
        <View style={{paddingBottom: 50}}>
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
          <FlatList
            data={data}
            style={{height: height * 0.725}}
            renderItem={({index, item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NewDetail', {item});
                  }}>
                  <ImageBackground
                    style={styles.buttonflat}
                    source={{
                      uri: item.blog_img,
                    }}>
                    <LinearGradient
                      colors={['#00000000', '#1D0F0FF7']}
                      style={styles.linear}>
                      <Text style={styles.text}>{item.blog_title}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />

          <View style={{marginBottom: 50}} />
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(News);
