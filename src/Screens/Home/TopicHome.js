import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CountDown from 'react-native-countdown-component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {Topic} from '../../action/data.action';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopicHome = ({dispatch}) => {
  const [data, setdata] = useState();

  const [day, setday] = useState();
  const [hours, sethours] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();

  const focus = useIsFocused();
  const _Topic = async values => {
    try {
      const response = await dispatch(Topic());
      if (response.res_code == '00') {
        setdata(response.res_result);
        runTime(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  // 166251960

  useEffect(() => {
    _Topic();
  }, [focus]);

  const runTime = dateAPI => {
    const time = dateAPI != undefined && dateAPI.Fair_start_in;
    var countDownDate = new Date(time).getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance > 0) {
        setday(days);
        sethours(hours);
        setminutes(minutes);
        setseconds(seconds);
      } else {
        clearInterval(x);
      }
    }, 1000);
  };

  return (
    <View style={styles.linearGradient}>
      <View style={styles.viewfair}>
        <Text style={styles.textfair}>BANGKOK GEMS</Text>
        <Text style={styles.textfair}>& JEWELRY FAIR</Text>
        <View style={styles.rowfair}>
          <View style={styles.dimon} />
          <View style={styles.linerfair} />
          <View style={styles.dimon} />
        </View>
        <View style={styles.rowfair}>
          <Text style={styles.texttime}>67</Text>
          <Text style={styles.texttime1}>th</Text>
          <Text style={styles.texttime}> Edition September 2022</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          InAppBrowser.open('https://bgjf.git.or.th/git');
        }}>
        <Image
          source={require('../../../assets/image/logopre.png')}
          style={styles.imgpre}
        />
      </TouchableOpacity>
      <ImageBackground
        source={require('../../../assets/image/imgtime.png')}
        style={styles.imgtime}>
        <Text
          style={{fontSize: 10, fontFamily: 'Cantoria MT Std', marginLeft: 70}}>
          Fair start in
        </Text>
        <View style={styles.rowcall}>
          <View>
            <Text style={styles.count}>{day}</Text>
            <Text style={styles.count1}>Days</Text>
          </View>
          <Text style={styles.count2}>:</Text>
          <View>
            <Text style={styles.count}>{hours}</Text>
            <Text style={styles.count1}>Hours</Text>
          </View>
          <Text style={styles.count2}>:</Text>
          <View>
            <Text style={styles.count}>{minutes}</Text>
            <Text style={styles.count1}>Minutes</Text>
          </View>
          <Text style={styles.count2}>:</Text>
          <View>
            <Text style={styles.count}>{seconds}</Text>
            <Text style={styles.count1}>Seconds</Text>
          </View>
        </View>
        {/* {data != undefined && (
          <CountDown
            // moment().add(6, "hours").valueOf()
            until={moment(data.Fair_start_in).add(24, 'hours').valueOf()}
            size={30}
            digitStyle={{height: 25}}
            digitTxtStyle={{
              color: '#000',
              fontSize: 25,
              fontWeight: '600',
            }}
            // timeToShow={['M', 'S']}
            // timeLabels={{m: 'MM', s: 'SS'}}
            separatorStyle={{
              fontSize: 30,
              marginTop: -10,
              fontFamily: 'Cantoria MT Std',
              marginLeft: -10,
              marginRight: -10,
            }}
            timeLabelStyle={{
              fontSize: 8,
              color: '#000',
              fontFamily: 'Cantoria MT Std',
            }}
            showSeparator
          />
        )} */}
      </ImageBackground>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <MaterialCommunityIcons
            name="star-four-points"
            color="#D7A360"
            size={16}
            style={{marginRight: 5, alignSelf: 'center', marginTop: -5}}
          />
          <Text style={styles.texttop}>TRADE DAY</Text>
        </View>

        <Text style={styles.texttop1}>{data?.trade_day}</Text>
      </View>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <MaterialCommunityIcons
            name="star-four-points"
            color="#D7A360"
            size={16}
            style={{marginRight: 5, alignSelf: 'center', marginTop: -5}}
          />
          <Text style={styles.texttop}>PUBLIC DAY</Text>
        </View>

        <Text style={styles.texttop1}>{data?.public_day}</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'flex-start'}]}>
        <MaterialIcons
          name="location-pin"
          color="#D7A360"
          size={14}
          style={{marginRight: 10}}
        />
        <Text style={[styles.texttop1, {fontSize: 12}]}>{data?.place}</Text>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(TopicHome);
