import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {ItemList, RemoveformList} from '../../action/data.action';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const Inmylist = ({navigation, route, dispatch}) => {
  const {item} = route.params;

  const [selectedId, setselectedId] = useState([]);
  console.log(selectedId);
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
      <SafeAreaView>
        <Headerback item={item.my_list_name} navigation={navigation} />
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
              console.log(list);
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
                    <Text style={styles.textlist}>
                      {item.product_img_title}
                    </Text>
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
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Inmylist);
