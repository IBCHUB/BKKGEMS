import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RBSheetHome from './RBSheet';
import {connect} from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import {Exhibitor_List, Search} from '../../action/data.action';
const Suppliers = ({navigation, dispatch}) => {
  const [state, setstate] = useState();
  const [query, setQuery] = useState('');
  console.log(query);
  const test = text => {
    setQuery(text);
    _Search(text);
  };

  const _Search = async values => {
    try {
      var request = 'text=' + values + '&type=' + '1';
      const response = await dispatch(Search(request));
      console.log('2222222>>>>>>', response);
      if (response.res_code == '00') {
        setstate(response.res_result);
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
    _Search();
  }, []);
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} />
        <RBSheet
          ref={refRBSheet}
          openDuration={250}
          animationType="slide"
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
        <ScrollView style={{backgroundColor: '#EEECE2', paddingBottom: 50}}>
          <ImageBackground
            source={require('../../../assets/image/sup.png')}
            style={[styles.imgHeader, {zIndex: 999}]}>
            <View style={styles.header}>
              <Text style={styles.texthead}>
                Search for Thai Gems & Jewelry Suppliers and Manufacturers
              </Text>
              <View style={styles.viewsearch}>
                <View style={styles.viewinsearch}>
                  <FontAwesome5
                    name="search"
                    size={18}
                    color={'#44444480'}
                    style={[styles.icon, {marginRight: 3}]}
                  />
                  <Autocomplete
                    data={state}
                    value={query}
                    hideResults={query.length == 0 ? true : false}
                    autoCorrect={false}
                    placeholder="What are you looking for?"
                    onChangeText={text => {
                      test(text);
                    }}
                    flatListProps={{
                      keyExtractor: (_, idx) => idx,
                      renderItem: ({item}) => {
                        return (
                          <TouchableOpacity
                            onPress={async () => {
                              var request =
                                'meet=' +
                                '2' +
                                '&tags=' +
                                '' +
                                '&type=' +
                                '' +
                                '&text=' +
                                item;
                              const response = await dispatch(
                                Exhibitor_List(request),
                              );
                              if (response.res_code == '00') {
                                navigation.navigate('Search', {
                                  item: response.res_result,
                                  text: item,
                                });
                              } else {
                                console.log('2222');
                              }
                            }}>
                            <Text
                              style={{
                                fontSize: 16,
                                padding: 3,
                                fontFamily: 'Cantoria MT Std',
                              }}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        );
                      },
                    }}
                    style={styles.input}
                    listContainerStyle={{
                      width: 280,
                      marginTop: 38,
                      zIndex: 999,
                      position: 'absolute',
                      borderRadius: 5,
                      backgroundColor: '#fff',
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    refRBSheet.current.open();
                  }}
                  style={{alignSelf: 'center'}}>
                  <Image
                    source={require('../../../assets/image/icontouch.png')}
                    style={styles.iconsea}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <Text style={styles.textdetail}>
            For the past several decades, Thailand has been known among the gems
            and jewelry industry as the country to source the most beautiful
            gemstones, from ruby, sapphire to other precious stones in a variety
            of sizes, colors and origins. Famous for its heat treatment
            knowledge that has been passed on through the generations of
            craftsmen in the gems and jewelry industry, the skills and level of
            handicraft of the workforce in Thailand is hard to match anywhere
            else in the world.{'\n'}
            {'\n'}Not only is the country well-known for its heat treatment
            process, Thailand is also rich in the art of jewelry making with
            different provinces throughout the kingdom taking on a different
            expertise. Kanchanaburi is famous for its blue sapphire, while
            Chantaburi is a destination for those seeking gemstones. For silver,
            buyers from countries across the world would head north to
            Chiangmai, and for gold, Yaowarat or better known as Chinatown is
            the ultimate hub where all types, sizes and style of gold bars and
            gold jewelry are traded in the heart of the bustling capital of
            Bangkok.
          </Text>
          <Image
            source={require('../../../assets/image/sup1.png')}
            style={styles.imgHeader}
          />
          <Text style={styles.textdetail}>
            From an economic point of view, the gems and jewelry industry in
            Thailand generates income for over 1.2 million people from upstream
            to downstream in the industry’s workforce. Export of gems and
            jewelry accounted for US$ 15,691 million in 2019, the third largest
            exporting industry after computers and automotives.
            {'\n'}
            {'\n'}
            With its robust technology, resources and workforce, over the years
            numerous international jewelry brands have chosen Thailand as a
            manufacturing base for their products. Experts in the gems and
            jewelry industry worldwide have attributed Thailand’s attraction as
            a production hub to its proven manufacturing quality, innovative
            technology and integrity of the workforce.
          </Text>
          <Image
            source={require('../../../assets/image/sup2.png')}
            style={styles.imgHeader}
          />
          <Text style={styles.textdetail}>
            Most importantly, the long-established Bangkok Gems & Jewelry Fair,
            now in its 65th edition, is the ultimate trading platform that has
            been an important venue for gems and jewelry traders for over three
            decades. At the fair, buyers, sellers, traders, manufacturers,
            designers and boutiques gather to source the best gemstones and
            jewelry while networking and keeping up with the latest trends.
            Through seminars, exhibitions, and numerous events held at the fair,
            participants are offered a rare opportunity to seek inspiration and
            possible new partners for their businesses.
            {'\n'}
            {'\n'}
            To truly be immersed in the gems and jewelry industry, visit the
            Bangkok Gems & Jewelry Fair… the world’s gems and jewelry
            destination.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Suppliers);
