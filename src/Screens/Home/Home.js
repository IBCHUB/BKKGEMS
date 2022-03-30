import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headerhome from '../../Components/Headerhome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import TopicHome from './TopicHome';
import RBSheetHome from './RBSheetHome';
import AboutHome from './AboutHome';
import {getUser} from '../../action/auth.action';
import {connect} from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';

const Home = ({navigation, dispatch, authData}) => {
  const [online, setOnline] = useState(false);
  const refRBSheet = useRef();
  const [data, setdata] = useState([]);
  const [state, setstate] = useState([]);
  const {query} = state;

  const _loginUser = async values => {
    try {
      const response = await dispatch(getUser());
      // console.log('2222222', response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        setmodalfalse(true);
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _loginUser();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
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
                <FontAwesome5
                  name="search"
                  size={18}
                  color={'#44444480'}
                  style={styles.icon}
                />
                <TextInput
                  clearButtonMode="always"
                  placeholder="What are you looking for?"
                  style={styles.input}
                  // onChangeText={e => {
                  //   SearchSubmit(e);
                  // }}
                />
                {/* <Autocomplete
                  data={data}
                  value={query}
                  onChangeText={text => setstate({query: text})}
                  flatListProps={{
                    keyExtractor: (_, idx) => idx,
                    renderItem: ({item}) => <Text>{item}</Text>,
                  }}
                /> */}
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

            {online === false && (
              <ImageBackground
                source={require('../../../assets/image/imglive.png')}
                style={styles.imglive}>
                <Image
                  source={require('../../../assets/image/imss.png')}
                  style={styles.imgS}
                />
                <View style={{marginLeft: 10}}>
                  <Image
                    source={require('../../../assets/image/logo-banner.png')}
                    style={styles.logob}
                  />
                  <Image
                    source={require('../../../assets/image/logoonline.png')}
                    style={styles.logonline}
                  />
                </View>
              </ImageBackground>
            )}
            <AboutHome navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
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
