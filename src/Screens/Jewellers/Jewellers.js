import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Linking,
  Platform,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import styles from '../Event/styles';
const Jewellers = ({navigation}) => {
  const [data, setData] = useState([
    {
      text: '65th The Jewellers',
      navigation: 'Page1',
    },
    {
      text: '64th The Jeweller and Innovation Design Zone (IDZ)',
      navigation: 'Page2',
    },
    {
      text: '63rd The Jeweller and Innovation Design Zone (IDZ)',
      navigation: 'Page3',
    },
    {
      text: '62nd Thailand Jewelry Brands and Innovation',
      navigation: 'Page4',
    },
    {
      text: '61st Thailand Jewelry Brands and Innovation',
      navigation: '',
    },
  ]);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: Platform.OS === 'android' && 25,
        }}
      />
      <Headerback item={'The Jewellers'} navigation={navigation} />
      <View style={styles.containerview}>
        <FlatList
          data={data}
          renderItem={({index, item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    if (item.navigation === '') {
                      Linking.openURL(
                        'https://www.bkkgems.com/data/file/special_activity/file11.pdf',
                      );
                    } else {
                      navigation.navigate(item.navigation);
                    }
                  }}
                  style={styles.buttonflat}>
                  <Text numberOfLines={2} style={styles.text1}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Jewellers;
