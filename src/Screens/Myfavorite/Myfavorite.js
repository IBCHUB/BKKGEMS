import React, {Fragment, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  TextInput,
  ImageBackground,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  AddnameList,
  AddtoList,
  MyFav,
  MyLists,
  Removefev,
} from '../../action/data.action';
import {connect} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Formik} from 'formik';
import * as yup from 'yup';

const Myfavorite = ({navigation, dispatch}) => {
  const refRBSheet = useRef();
  const [selectedId, setselectedId] = useState([]);
  console.log(selectedId);
  const [checked, setChecked] = useState(false);
  const [myfev, setmyfev] = useState([]);
  const [modal, setmodal] = useState(false);
  const [modalre, setmodalre] = useState(false);
  const [data, setdata] = useState();

  const [list, setList] = useState([]);

  const isChecked = id => {
    const isCheck = selectedId.includes(id);
    return isCheck;
  };
  const handleCheckBox = id => {
    const ids = [...selectedId, id];
    if (isChecked(id)) {
      console.log('เอาออก');
      setselectedId(selectedId.filter(item => item !== id));
    } else {
      console.log('เอาเข้า');
      setselectedId(ids);
    }
    setChecked(selectedId.length + 1 == myfev.length);
  };

  const _MyFav = async values => {
    try {
      const response = await dispatch(MyFav());
      if (response.res_code == '00') {
        setmyfev(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _MyList = async values => {
    try {
      const response = await dispatch(MyLists());
      // console.log(response);
      if (response.res_code == '00') {
        setList(response.res_result);
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

          setList(response1.res_result);
        }
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  const _AddtoList = async values => {
    try {
      var list = selectedId != undefined && selectedId;
      var id = data != undefined && data.my_list_id;
      var request = 'item=' + list + '&my_list_id=' + id;
      const response = await dispatch(AddtoList(request));
      if (response.res_code == '00') {
        const response1 = await dispatch(MyLists());
        if (response1.res_code == '00') {
          setmodalre(false);
          setselectedId([]);
          setList(response1.res_result);
        }
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const _Removefev = async values => {
    try {
      var list = selectedId != undefined && selectedId;
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
    _MyFav();
    _MyList();
  }, []);

  return (
    <View style={styles.container}>
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
              My List : {data != undefined && data.my_list_name}
            </Text>
            <TouchableOpacity onPress={_AddtoList} style={styles.touchedit}>
              <Text style={styles.textedit}>Add to List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Headerback item={'MY FAVORITE'} navigation={navigation} />
      <RBSheet
        ref={refRBSheet}
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
            data={list}
            renderItem={({index, item}) => {
              console.log(item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    refRBSheet.current.close();
                    setTimeout(() => {
                      setdata(item);
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
            style={styles.row}>
            <Image
              source={require('../../../assets/image/+.png')}
              style={styles.iconpust}
            />
            <Text style={styles.textlist1}>Create new list</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <View style={styles.viewrow}>
        <TouchableOpacity
          onPress={() => {
            if (checked) {
              setselectedId([]);
            } else {
              let ids2 = [];
              myfev.map((value, item) => {
                ids2.push(value.product_img_id);
              });
              setselectedId(ids2);
            }
            setChecked(!checked);
          }}>
          <View style={styles.row}>
            <View
              style={[
                styles.viewlist,
                {
                  backgroundColor:
                    checked && selectedId.length != 0 ? '#DAA560' : '#fff',
                  borderColor:
                    checked && selectedId.length != 0 ? '#DAA560' : '#888888',
                },
              ]}
            />
            <Text style={styles.textlist}>Select all</Text>
          </View>
        </TouchableOpacity>
        {selectedId.length === 0 ? (
          <View style={[styles.viewrow1, {opacity: 0.5}]}>
            <View style={styles.row}>
              <Image
                source={require('../../../assets/image/+.png')}
                style={styles.iconpust}
              />
              <Text style={styles.texthead}>add to My list</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textdelete}>Remove</Text>
            </View>
          </View>
        ) : (
          <View style={styles.viewrow1}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.row}>
              <Image
                source={require('../../../assets/image/+.png')}
                style={styles.iconpust}
              />
              <Text style={styles.texthead}>add to My list</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_Removefev} style={styles.row}>
              <Text style={styles.textdelete}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <FlatList
        data={myfev}
        numColumns={2}
        renderItem={({index, item}) => {
          return (
            <View style={styles.viewflat}>
              <ImageBackground
                resizeMode="stretch"
                style={styles.img}
                source={{uri: item.product_img_name}}>
                <View style={styles.rowflat}>
                  <TouchableOpacity
                    onPress={() => {
                      handleCheckBox(item.product_img_id);
                    }}
                    style={[
                      styles.viewlist,
                      {
                        backgroundColor: isChecked(item.product_img_id)
                          ? '#DAA560'
                          : '#fff',
                        borderColor: isChecked(item.product_img_id)
                          ? '#DAA560'
                          : '#888888',
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.buttonlist,
                      {
                        borderColor: '#DAA560',
                        backgroundColor: '#DAA560',
                      },
                    ]}>
                    <AntDesign
                      name="star"
                      size={20}
                      color={'#fff'}
                      style={{alignSelf: 'center'}}
                    />
                  </View>
                </View>
              </ImageBackground>
              <View style={styles.texttt}>
                <Text style={styles.textflat}>{item.product_img_title}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Myfavorite);
