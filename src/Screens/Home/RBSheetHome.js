import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const {width, height} = Dimensions.get('window');
const RBSheetHome = ({onPress}) => {
  const [data, setData] = useState([
    {A: 'Creative Jewely'},
    {A: 'Decorative Items'},
    {A: 'Everyday Jewely'},
    {A: 'Fashion Jewely'},
    {A: 'Craft & Heritage'},
    {A: 'High Jewely'},
    {A: 'Jewely For Men'},
    {A: 'Jewely For Pet'},
    {A: 'Jewely For Seniors'},
    {A: 'Specaial Occasions'},
    {A: 'Spiritual Power'},
  ]);
  return (
    <View style={{flex: 1, padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.9,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20, width: 70}}></Text>
        <Text style={{fontSize: 20, width: 70}}>Filters</Text>
        <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
          <EvilIcons name="close" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text>Sort</Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={{marginTop: 10}}>
                <Text># {index}</Text>
              </View>
            );
          }}
        />
        <View
          style={{
            width: width * 0.85,
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#444',
            marginVertical: 15,
          }}
        />
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    width: width * 0.4,
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#44444450',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{alignSelf: 'center', fontSize: 16}}>
                    {item.A}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default RBSheetHome;
