import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  Linking,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headerhome from '../../Components/Headerhome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import TopicHome from './TopicHome';
import RBSheetHome from './RBSheetHome';
import AboutHome from './AboutHome';
import {getUser} from '../../action/auth.action';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {connect} from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import {Search} from '../../action/data.action';

const Home = ({navigation, dispatch, authData}) => {
  const [online, setOnline] = useState(false);
  const refRBSheet = useRef();
  const [state, setstate] = useState();
  const [query, setQuery] = useState('');
  // console.log(query);
  const _loginUser = async values => {
    try {
      const response = await dispatch(getUser());
      // console.log('2222222', response);
      if (response.res_code == '00') {
        // console.log('1111');
      } else {
        setmodalfalse(true);
        console.log('2222');
      }
    } catch (error) {}
  };

  const test = text => {
    setQuery(text);
    let i = 3;
    let interval = setInterval(() => {
      if (i > 1) {
        _Search(text);
        clearInterval(interval);
        return i;
      }
      i += 1;
    }, 1000);
  };

  const _Search = async values => {
    // console.log('xxxx');
    try {
      var request = 'text=' + values + '&type=' + '1';
      const response = await dispatch(Search(request));
      // console.log('2222222>>>>>>', response);
      if (response.res_code == '00') {
        setstate(response.res_result);
        // console.log('1111');
      } else {
        // console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _loginUser();
    _Search();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <Headerhome navigation={navigation} />
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
        <RBSheetHome
          onPress={() => {
            refRBSheet.current.close();
          }}
          navigation={navigation}
        />
      </RBSheet>
      <ScrollView style={{backgroundColor: '#000'}}>
        <View style={styles.viewback}>
          <Image
            source={require('../../../assets/image/imgpre.png')}
            style={styles.imgtop}
          />
          <Image
            source={require('../../../assets/image/imgdiamond1.png')}
            style={styles.imgletf}
          />
          <Image
            source={require('../../../assets/image/imgdiamond.png')}
            style={styles.imgR}
          />
          <Image
            source={require('../../../assets/image/imgdimon.png')}
            style={styles.imgB}
          />
        </View>
        <View style={styles.viewon}>
          <View style={styles.viewsearch}>
            <View style={styles.viewinsearch}>
              {/* <TextInput
                  clearButtonMode="always"
                  placeholder="What are you looking for?"
                  style={styles.input}
                  // onChangeText={e => {
                  //   SearchSubmit(e);
                  // }}
                /> */}
              <FontAwesome5
                name="search"
                size={18}
                color={'#44444480'}
                style={styles.icon}
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
                        onPress={() =>
                          navigation.navigate('Searchno', {text: item})
                        }>
                        <Text
                          style={{
                            fontSize: 16,
                            padding: 3,
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
                  width: 280,
                  marginTop: 35,
                  zIndex: 99,
                  position: 'absolute',
                  borderRadius: 5,
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

          <TopicHome />

          <TouchableOpacity
            onPress={() => {
              InAppBrowser.open('https://www.bgjf-vtf.com/');
            }}
            style={styles.imglive}>
            <Image
              source={require('../../../assets/image/join.png')}
              style={styles.imgS}
            />
          </TouchableOpacity>

          <AboutHome navigation={navigation} />
        </View>
        <View style={{marginBottom: 50}} />
      </ScrollView>
    </View>
  );
};

// export default Home;
// const mapStateToProps = state => ({
//   LoadingCounters: state.dataReducer.LoadingCounters,
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Home);
