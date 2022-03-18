import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window');
const product = ({item, navigation}) => {
  const carouselRef = useRef();

  const [index, setIndex] = useState(0);
  const [highligth, sethighligth] = useState(false);
  const [selectedtags, setselectedtags] = useState([]);

  const [list, setlist] = useState(false);
  const [selectedlist, setselectedlist] = useState([]);

  const isHighligth = id => {
    const isChecktags = selectedtags.includes(id);
    return isChecktags;
  };

  const handleCheckBoxtags = id => {
    const ids = [...selectedtags, id];
    if (isHighligth(id)) {
      console.log('เอาออก');
      setselectedtags(selectedtags.filter(item => item !== id));
    } else {
      console.log('เอาเข้า');
      setselectedtags(ids);
    }
    sethighligth(selectedtags.length + 1 == data.length);
  };

  const isList = id => {
    const isCheck = selectedlist.includes(id);
    return isCheck;
  };

  const handleChecklist = id => {
    const ids = [...selectedlist, id];
    if (isList(id)) {
      console.log('เอาออก');
      setselectedlist(selectedlist.filter(item => item !== id));
    } else {
      console.log('เอาเข้า');
      setselectedlist(ids);
    }
    setlist(selectedlist.length + 1 == data.length);
  };

  const [data, setData] = useState([
    {
      id: 1,
      img: require('../../../assets/image/exhi/1.png'),
      text: 'Sapphire Earring',
    },
    {
      id: 2,
      img: require('../../../assets/image/exhi/2.png'),
      text: '7 Days Birthstone',
    },
    {
      id: 3,
      img: require('../../../assets/image/exhi/3.png'),
      text: 'Ruby Rosegold Ring',
    },
    {
      id: 4,
      img: require('../../../assets/image/exhi/4.png'),
      text: 'Sapphire Topaz Bracelet',
    },
  ]);
  return (
    <View style={styles.containerproduct}>
      <View>
        <Carousel
          ref={carouselRef}
          data={data}
          sliderWidth={width * 1}
          itemWidth={width * 1}
          layout={'tinder'}
          loop
          layoutCardOffset={`18`}
          onSnapToItem={index => setIndex(index)}
          renderItem={({item, index}) => {
            return (
              <ImageBackground source={item.img} style={styles.viewproduct}>
                <View style={styles.viewlist}>
                  <TouchableOpacity
                    style={[
                      styles.buttonlist,
                      {
                        borderColor:
                          isHighligth(item.id) === false ? '#999' : '#DAA560',
                        backgroundColor:
                          isHighligth(item.id) === false ? '#fff' : '#DAA560',
                        marginRight: 10,
                      },
                    ]}
                    onPress={() => {
                      sethighligth(val => !val);
                      handleCheckBoxtags(item.id);
                    }}>
                    <AntDesign
                      name="star"
                      size={20}
                      color={isHighligth(item.id) === false ? '#999' : '#fff'}
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonlist,
                      {
                        borderColor:
                          isList(item.id) === false ? '#999' : '#DAA560',
                        backgroundColor:
                          isList(item.id) === false ? '#fff' : '#DAA560',
                      },
                    ]}
                    onPress={() => {
                      setlist(val => !val);
                      handleChecklist(item.id);
                    }}>
                    <Feather
                      name="file-text"
                      size={20}
                      color={isList(item.id) === false ? '#999' : '#fff'}
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            );
          }}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={carouselRef}
          containerStyle={{marginTop: -15}}
          dotStyle={{
            width: 40,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 3,
            backgroundColor: '#F4BB41',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

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
      <View style={{marginBottom: 100}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({index, item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setData(item);
                    // navigation.navigate('ExhibitorsDetail', {item});
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
