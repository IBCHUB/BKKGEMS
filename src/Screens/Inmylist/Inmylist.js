import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {Exprofile, ItemList, RemoveformList} from '../../action/data.action';
import {connect} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
const Inmylist = ({navigation, route, dispatch}) => {
  const {item} = route.params;
  const refRBSheet = useRef();
  const [selectedId, setselectedId] = useState([]);
  const [data, setdata] = useState();
  console.log(data);
  const [list, setlist] = useState([]);
  const [checked, setChecked] = useState(false);
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
    setChecked(selectedId.length + 1 == item.sum);
  };

  const _ItemList = async values => {
    try {
      var request = 'my_list_id=' + item.my_list_id;
      const response = await dispatch(ItemList(request));
      if (response.res_code == '00') {
        setlist(response.res_result);
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const _RemoveformList = async values => {
    try {
      var request = 'item=' + selectedId;
      const response = await dispatch(RemoveformList(request));
      console.log(response);
      if (response.res_code == '00') {
        var request = 'my_list_id=' + item.my_list_id;
        const response1 = await dispatch(ItemList(request));
        if (response1.res_code == '00') {
          setlist(response1.res_result);
        }
        // console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _ItemList();
  }, []);
  return (
    <View style={styles.container}>
      <Headerback item={item.my_list_name} navigation={navigation} />
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
            height: '30%',
          },
        }}>
        <View style={styles.containersort}>
          <View style={styles.viewsort}>
            <View />
            <Text style={styles.textsort} />
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}
              style={{alignSelf: 'center'}}>
              <EvilIcons name="close" size={25} color={'#000'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={async () => {
              var id = data != undefined && data.company_id;
              var request = 'exid=' + id;
              const response = await dispatch(Exprofile(request));

              if (response.res_code == '00') {
                // setdetail(response.res_result);
                navigation.navigate('ExhibitorsDetail', {
                  res: response.res_result,
                });
                // console.log('1111');
              } else {
                // console.log('2222');
              }
            }}
            style={styles.row3}>
            <Image
              source={require('../../../assets/image/comm.png')}
              style={styles.iconpust1}
            />
            <Text style={styles.texthead1}>Company Profile</Text>
          </TouchableOpacity>
          <View style={styles.linersort} />
          <TouchableOpacity style={styles.row3}>
            <Image
              source={require('../../../assets/image/drow.png')}
              style={styles.iconpust1}
            />
            <Text style={styles.texthead1}>Download list</Text>
          </TouchableOpacity>
          <View style={styles.linersort} />
          <TouchableOpacity
            onPress={async () => {
              var id = data != undefined && data.my_list_product_id;
              var request = 'item=' + id;
              const response = await dispatch(RemoveformList(request));
              console.log(response);
              if (response.res_code == '00') {
                var request = 'my_list_id=' + item.my_list_id;
                const response1 = await dispatch(ItemList(request));
                if (response1.res_code == '00') {
                  setlist(response1.res_result);
                  refRBSheet.current.close();
                }
                // console.log('1111');
              } else {
                console.log('2222');
              }
            }}
            style={styles.row3}>
            <Image
              source={require('../../../assets/image/bin.png')}
              style={styles.iconpust1}
            />
            <Text style={styles.texthead1}>Remove from list</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      {selectedId.length === 0 ? (
        <View style={[styles.viewrow, {opacity: 0.5}]}>
          <View style={styles.row}>
            <Image
              source={require('../../../assets/image/drow.png')}
              style={styles.iconpust}
            />
            <Text style={styles.texthead}>Download list</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textdelete}>Remove from List</Text>
          </View>
        </View>
      ) : (
        <View style={styles.viewrow}>
          <TouchableOpacity style={styles.row}>
            <Image
              source={require('../../../assets/image/drow.png')}
              style={styles.iconpust}
            />
            <Text style={styles.texthead}>Download list</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _RemoveformList()}
            style={styles.row}>
            <Text style={styles.textdelete}>Remove from List</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            if (checked) {
              setselectedId([]);
            } else {
              let ids2 = [];
              list.map((value, item) => {
                ids2.push(value.my_list_product_id);
              });
              setselectedId(ids2);
            }
            setChecked(!checked);
          }}
          style={styles.viewrow}>
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
          <Text style={styles.texthead}>{list.length} item</Text>
        </TouchableOpacity>
        <View style={styles.liner} />
        <FlatList
          data={list}
          renderItem={({index, item}) => {
            console.log(item);
            return (
              <View style={styles.row2}>
                <TouchableOpacity
                  onPress={() => {
                    handleCheckBox(item.my_list_product_id);
                  }}
                  style={[
                    styles.viewlist,
                    {
                      backgroundColor: isChecked(item.my_list_product_id)
                        ? '#DAA560'
                        : '#fff',
                      borderColor: isChecked(item.my_list_product_id)
                        ? '#DAA560'
                        : '#888888',
                    },
                  ]}
                />
                <Image
                  source={{uri: item.product_img_name}}
                  style={styles.img}
                />
                <View style={styles.list}>
                  <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.textlist}>
                      {item.product_img_title}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setdata(item);
                        setTimeout(() => {
                          refRBSheet.current.open();
                        }, 300);
                      }}
                      style={{
                        alignSelf: 'center',
                        height: 30,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../../../assets/image/pot.png')}
                        style={styles.icon1}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={{uri: item.company_logo}}
                      style={styles.icon}
                    />
                    <Text numberOfLines={1} style={styles.text}>
                      {item.company_name}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Inmylist);
