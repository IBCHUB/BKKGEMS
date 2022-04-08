import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Headercomp from '../../Components/Headercomp';
import styles from './styles';

const Event = ({navigation}) => {
  const [data, setData] = useState([
    {
      text: 'THE NEW FACES',
    },
    {
      text: 'THE NICHE SHOWCASE',
    },
    {
      text: 'THE JEWELLERS',
    },
    {
      text: 'FASHION SHOW',
    },
    {
      text: 'WORKSHOPS AND DEMONSTRATIONS',
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headercomp item={'EVENTS'} navigation={navigation} />
        <View style={styles.containerview}>
          <FlatList
            data={data}
            renderItem={({index, item}) => {
              return (
                <View>
                  <TouchableOpacity
                    // onPress={() => {
                    //   navigation.navigate('ExhibitorsDetail', {item});
                    // }}
                    style={styles.buttonflat}>
                    <Text style={styles.text}>{item.text}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Event;
