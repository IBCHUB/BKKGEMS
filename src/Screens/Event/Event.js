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
      text: 'The New Faces',
      navigation: 'Thenewfaces',
    },
    {
      text: 'The Niche Showcase',
      navigation: 'Theniche',
    },
    {
      text: 'The Jewellers',
      navigation: 'Jewellers',
    },
    {
      text: 'Fashion Show',
      navigation: 'Fashion',
    },
    {
      text: 'Workshops And Demonstrations',
      navigation: 'Workshops',
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
                    onPress={() => {
                      navigation.navigate(item.navigation);
                    }}
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
