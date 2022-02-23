import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headercomp from '../../Components/Headercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import TopicHome from './TopicHome';
import RBSheetHome from './RBSheetHome';
import AboutHome from './AboutHome';

const Home = ({navigation}) => {
  const [online, setOnline] = useState(false);
  const refRBSheet = useRef();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headercomp navigation={navigation} />
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
          <RBSheetHome onPress={() => refRBSheet.current.close()} />
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
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5
                  name="search"
                  size={20}
                  color={'#44444480'}
                  style={styles.icon}
                />
                <TextInput
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

export default Home;
