import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  addMyFav,
  AddnameList,
  AddtoList,
  ItemList,
  MyFav,
  MyLists,
  Removefev,
} from '../../action/data.action';
import RBSheet from 'react-native-raw-bottom-sheet';
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const product = ({item, navigation, detail, dispatch}) => {
  const carouselRef = useRef();
  // console.log(data);
  const refRBSheet = useRef();
  const [index, setIndex] = useState(0);
  const [highligth, sethighligth] = useState(false);

  const [selectedtags, setselectedtags] = useState([]);
  // console.log(selectedtags);
  const [list, setlist] = useState(false);
  const [myfev, setmyfev] = useState([]);
  // console.log(myfev);
  const [list1, setlist1] = useState([]);
  const [data1, setdata1] = useState();
  const [selectedlist, setselectedlist] = useState([]);
  const [modal, setmodal] = useState(false);
  const [modalre, setmodalre] = useState(false);
  const isHighligth = id => {
    const isChecktags = selectedtags.includes(id);
    return isChecktags;
  };
  const _MyFav = async values => {
    try {
      const response = await dispatch(MyFav());
      if (response.res_code == '00') {
        // console.log('ssss', response.res_result);
        setmyfev(response.res_result);
        setselectedtags([1]);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const handleCheckBoxtags = async id => {
    const ids = [...selectedtags, id];
    if (isHighligth(id)) {
      console.log('เอาออก', id);
      setselectedtags(selectedtags.filter(item => item !== id));
    } else {
      console.log('เอาเข้า', ids);
      setselectedtags(ids);
      var request = 'item=' + ids;
      // console.log(request);
      const response = await dispatch(addMyFav(request));
      // console.log(response);
      if (response.res_code == '00') {
        console.log('1111');
      } else {
        console.log('2222');
      }
    }
    sethighligth(selectedtags.length + 1 == detail.length);
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
    setlist(selectedlist.length + 1 == img.length);
  };
  // console.log(detail);
  const [img, setimg] = useState([]);
  // console.log(img);
  const [data, setdata] = useState([]);

  const _Data2 = () => {
    setimg([detail.product_list[0]]);
    setdata(detail.product_list);
  };

  const _MyList = async values => {
    try {
      const response = await dispatch(MyLists());
      // console.log("11122",response.res_result);
      if (response.res_code == '00') {
        var test = [];
        response.res_result.map(async (value, item) => {
          var request = 'my_list_id=' + value.my_list_id;
          const response2 = await dispatch(ItemList(request));
          if (response2.res_code == '00') {
            response2.res_result.map((value2, item) => {
              test.push(value2.product_img_id);
              // console.log();
            });
            console.log(test);
            setselectedlist(test);
            // test.push({
            //   created_at: value.created_at,
            //   my_list_id: value.my_list_id,
            //   my_list_name: value.my_list_name,
            //   my_list_status: value.my_list_status,
            //   sum: value.sum,
            //   updated_at: value.updated_at,
            //   user_id: value.user_id,
            //   listDetail: response2.res_result,
            // });
          }
          // console.log('-----');
          // console.log(test[1].listDetail);
        });

        setlist1(response.res_result);
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _AddnameList = async values => {
    try {
      var request = 'listname=' + values.listname;
      const response = await dispatch(AddnameList(request));

      if (response.res_code == '00') {
        const response1 = await dispatch(MyLists());
        if (response1.res_code == '00') {
          setmodal(false);

          // setList(response1.res_result);
        }
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _AddtoList = async values => {
    try {
      var list = selectedlist != undefined && selectedlist;
      var id = data != undefined && data1.my_list_id;
      var request = 'item=' + list + '&my_list_id=' + id;
      const response = await dispatch(AddtoList(request));
      if (response.res_code == '00') {
        const response1 = await dispatch(MyLists());
        if (response1.res_code == '00') {
          setmodalre(false);

          // setList(response1.res_result);
        }
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const _Removefev = async values => {
    try {
      var list = selectedlist != undefined && selectedlist;
      var request = 'item=' + list;
      const response = await dispatch(Removefev(request));
      console.log(response);
      if (response.res_code == '00') {
        const response1 = await dispatch(MyFav());
        console.log(response1);
        if (response1.res_code == '00') {
          setmyfev(response.res_result);
        }
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _Data2();
    _MyList();
    _MyFav();
  }, []);

  return (
    <View style={styles.containerproduct}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodal(!modal);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodal(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Text style={styles.textopmodal}>Create new List</Text>
            <Formik
              initialValues={{
                listname: '',
              }}
              onSubmit={values => {
                _AddnameList(values);
              }}
              validationSchema={yup.object().shape({
                listname: yup.string().required(),
              })}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <Fragment>
                  <View style={styles.viewinput}>
                    <TextInput
                      placeholder="List Name"
                      style={styles.input}
                      onChangeText={handleChange('listname')}
                      onBlur={() => setFieldTouched('listname')}
                      value={values.listname}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.touchedit}>
                    <Text style={styles.textedit}>CREATE</Text>
                  </TouchableOpacity>
                </Fragment>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalre}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalre(!modalre);
        }}>
        <View style={styles.containermodal}>
          <View style={styles.viewmodal}>
            <TouchableOpacity
              onPress={() => {
                setmodalre(false);
              }}
              style={styles.iconmodal}>
              <AntDesign name="close" size={20} color="#444444" />
            </TouchableOpacity>
            <Text style={styles.textopmodal}>Confirm Recording</Text>
            {/* confirm recording */}
            <Text style={styles.textopmodal}>
              My List : {data1 != undefined && data1.my_list_name}
            </Text>
            <TouchableOpacity onPress={_AddtoList} style={styles.touchedit}>
              <Text style={styles.textedit}>Add to List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: '96%',
            alignSelf: 'center',
            height: '50%',
          },
        }}>
        <View style={styles.containersort}>
          <View style={styles.viewsort}>
            <View />
            <Text style={styles.textsort}>add to My list</Text>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}
              style={{alignSelf: 'center'}}>
              <EvilIcons name="close" size={25} color={'#000'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textsorthead}>My List</Text>
          <FlatList
            data={list1}
            renderItem={({index, item}) => {
              // console.log(item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    refRBSheet.current.close();
                    setTimeout(() => {
                      setdata1(item);
                      setmodalre(true);
                    }, 300);
                  }}
                  style={styles.row3}>
                  <View style={{alignSelf: 'center'}}>
                    <Text style={styles.textlist1}>{item.my_list_name}</Text>
                  </View>
                  <Text style={styles.texthead}>{item.sum} item</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.linersort} />
        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close();
              setTimeout(() => {
                setmodal(true);
              }, 300);
            }}
            style={styles.row5}>
            <Image
              source={require('../../../assets/image/+.png')}
              style={styles.iconpust}
            />
            <Text style={styles.textlist1}>Create new list</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <View>
        <Carousel
          ref={carouselRef}
          data={img}
          sliderWidth={width * 1}
          itemWidth={width * 1}
          layout={'tinder'}
          loop
          layoutCardOffset={`18`}
          onSnapToItem={index => setIndex(index)}
          renderItem={({item, index}) => {
            return (
              <ImageBackground
                source={{uri: item.product_img_name}}
                style={styles.viewproduct}
                resizeMode="stretch">
                <View style={styles.viewlist}>
                  <TouchableOpacity
                    style={[
                      styles.buttonlist,
                      {
                        borderColor:
                          isHighligth(item.product_img_id) === false
                            ? '#999'
                            : '#DAA560',
                        backgroundColor:
                          isHighligth(item.product_img_id) === false
                            ? '#fff'
                            : '#DAA560',
                        marginRight: 10,
                      },
                    ]}
                    onPress={() => {
                      sethighligth(val => !val);
                      handleCheckBoxtags(item.product_img_id);
                    }}>
                    <AntDesign
                      name="star"
                      size={20}
                      color={
                        isHighligth(item.product_img_id) === false
                          ? '#999'
                          : '#fff'
                      }
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonlist,
                      {
                        borderColor:
                          isList(item.product_img_id) === false
                            ? '#999'
                            : '#DAA560',
                        backgroundColor:
                          isList(item.product_img_id) === false
                            ? '#fff'
                            : '#DAA560',
                      },
                    ]}
                    onPress={() => {
                      setlist(val => !val);
                      handleChecklist(item.product_img_id);
                      refRBSheet.current.open();
                    }}>
                    <Feather
                      name="file-text"
                      size={20}
                      color={
                        isList(item.product_img_id) === false ? '#999' : '#fff'
                      }
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            );
          }}
        />
        <Pagination
          dotsLength={img.length}
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

      <Text style={styles.texttoproduct}>
        {img[0] != undefined && img[0].product_img_title}
      </Text>
      <Text style={styles.textdetailproduct}>
        {img[0] != undefined && img[0].product_img_des}
      </Text>
      <FlatList
        // data={img}
        horizontal
        renderItem={({index, item}) => {
          // console.log(item.tags);
          return (
            <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.minitext}>{item.tags}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.texthead}>OTHER PRODUCTS</Text>
      <View style={{marginBottom: 20}}>
        <FlatList
          data={data.filter(
            item => item.product_img_id !== img[0].product_img_id,
          )}
          // extraData={img}

          horizontal={true}
          renderItem={({index, item}) => {
            // console.log(item);
            return (
              <TouchableOpacity
                onPress={() => {
                  // console.log(data);
                  setimg([item]);
                  // navigation.navigate('ExhibitorsDetail', {item});
                }}
                style={styles.buttonflat}>
                <Image
                  resizeMode="stretch"
                  style={styles.imgflat}
                  source={{uri: item.product_img_name}}
                />

                <Text style={styles.textflat}>{item.product_img_title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(product);
