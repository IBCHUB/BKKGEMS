import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CountDown from 'react-native-countdown-component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const TopicHome = () => {
  return (
    <View style={styles.linearGradient}>
      <Image
        source={require('../../../assets/image/imggems.jpg')}
        style={styles.imghome}
      />
      <Image
        source={require('../../../assets/image/logopre.png')}
        style={styles.imgpre}
      />
      <ImageBackground
        source={require('../../../assets/image/imgtime.png')}
        style={styles.imgtime}>
        <Text style={{fontSize: 10}}>Fair start in</Text>
        <CountDown
          // moment().add(6, "hours").valueOf()
          until={500000000}
          size={30}
          // onFinish={() => alert('Finished')}
          digitStyle={{height: 25}}
          digitTxtStyle={{
            color: '#000',
            fontSize: 25,
            fontWeight: '600',
          }}
          // timeToShow={['M', 'S']}
          // timeLabels={{m: 'MM', s: 'SS'}}
          separatorStyle={{fontSize: 30, marginTop: -15}}
          timeLabelStyle={{fontSize: 8, color: '#000'}}
          showSeparator
        />
      </ImageBackground>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <MaterialCommunityIcons
            name="star-four-points"
            color="#D7A360"
            size={20}
            style={{marginRight: 10}}
          />
          <Text style={styles.texttop}>TRADE DAY</Text>
        </View>

        <Text style={styles.texttop1}>23-25 FEB 2022</Text>
      </View>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <MaterialCommunityIcons
            name="star-four-points"
            color="#D7A360"
            size={20}
            style={{marginRight: 10}}
          />
          <Text style={styles.texttop}>PUBLIC DAY</Text>
        </View>

        <Text style={styles.texttop1}>26-27 FEB 2022</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'flex-start'}]}>
        <MaterialIcons
          name="location-pin"
          color="#D7A360"
          size={20}
          style={{marginRight: 10}}
        />
        <Text style={[styles.texttop1, {fontSize: 12}]}>
          Challenger Hall 1-3 IMPACT, BANGKOK
        </Text>
      </View>
    </View>
  );
};

export default TopicHome;
