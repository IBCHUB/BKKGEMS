import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const product = ({item}) => {
  const [highligth, sethighligth] = useState(false);
  const [list, setlist] = useState(false);
  const [data, setData] = useState([
    {
      img: require('../../../assets/image/exhi/1.png'),
      text: 'Sapphire Earring',
    },
    {
      img: require('../../../assets/image/exhi/2.png'),
      text: '7 Days Birthstone',
    },
    {
      img: require('../../../assets/image/exhi/3.png'),
      text: 'Ruby Rosegold Ring',
    },
    {
      img: require('../../../assets/image/exhi/4.png'),
      text: 'Sapphire Topaz Bracelet',
    },
  ]);
  return (
    <View style={styles.containerproduct}>
      <ImageBackground source={item.img} style={styles.viewproduct}>
        <View style={styles.viewlist}>
          <TouchableOpacity
            style={[
              styles.buttonlist,
              {
                borderColor: highligth === true ? '#999' : '#DAA560',
                backgroundColor: highligth === true ? '#fff' : '#DAA560',
                marginRight: 10,
              },
            ]}
            onPress={() => {
              sethighligth(val => !val);
            }}>
            <AntDesign
              name="star"
              size={20}
              color={highligth === true ? '#999' : '#fff'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonlist,
              {
                borderColor: list === true ? '#999' : '#DAA560',
                backgroundColor: list === true ? '#fff' : '#DAA560',
              },
            ]}
            onPress={() => {
              setlist(val => !val);
            }}>
            <Feather
              name="file-text"
              size={20}
              color={list === true ? '#999' : '#fff'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Text style={styles.texttoproduct}>Amour Pearl Ring</Text>
      <Text style={styles.textdetailproduct}>
        For over 20 years, Golden Stone is recognized as a major influence that
        continues to shape the jewelry industry
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.minibutton}>
          <Text style={styles.minitext}>GEMSTONES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minibutton}>
          <Text style={styles.minitext}>GOLD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minibutton}>
          <Text style={styles.minitext}>SILVER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minibutton}>
          <Text style={styles.minitext}>RING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minibutton}>
          <Text style={styles.minitext}>EARRING</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.texthead}>OTHER PRODUCTS</Text>
      <View style={{marginBottom: 50}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({index, item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ExhibitorsDetail', {item});
                  }}
                  style={styles.buttonflat}>
                  <Image style={styles.imgflat} source={item.img} />

                  <Text style={styles.textflat}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default product;
