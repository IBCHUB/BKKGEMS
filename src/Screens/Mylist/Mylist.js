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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MyLists, RemoveLists} from '../../action/data.action';
import {connect} from 'react-redux';

const Mylist = ({navigation, dispatch}) => {
  const [modal, setmodal] = useState(false);

  const [selectedId, setselectedId] = useState([]);

  const [list, setList] = useState([]);
  console.log(list);
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
    setChecked(selectedId.length + 1 == list.length);
  };
  const _MyList = async values => {
    try {
      const response = await dispatch(MyLists());
      // console.log(response);
      if (response.res_code == '00') {
        setList(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  const _RemoveLists = async values => {
    try {
      var request = 'item=' + selectedId;
      const response = await dispatch(RemoveLists(request));
      console.log(response);
      if (response.res_code == '00') {
        setList(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };
  useEffect(() => {
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
            <View style={styles.viewinput}>
              <TextInput placeholder="List Name" style={styles.input} />
            </View>
            <TouchableOpacity style={styles.touchedit}>
              <Text style={styles.textedit}>CREACT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView>
        <Headerback item={'MY LIST'} navigation={navigation} />
        <View style={styles.viewrow}>
          <TouchableOpacity
            onPress={() => {
              setmodal(true);
            }}
            style={styles.row}>
            <Image
              source={require('../../../assets/image/+.png')}
              style={styles.iconpust}
            />
            <Text style={styles.texthead}>Create new list</Text>
          </TouchableOpacity>
          {selectedId.length === 0 ? (
            <View style={[styles.list, {opacity: 0.5}]}>
              <View style={styles.row}>
                <Image
                  source={require('../../../assets/image/drow.png')}
                  style={styles.iconpust}
                />
                <Text style={styles.texthead}>Download list</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textdelete}>Delete List</Text>
              </View>
            </View>
          ) : (
            <View style={styles.list}>
              <TouchableOpacity style={styles.row}>
                <Image
                  source={require('../../../assets/image/drow.png')}
                  style={styles.iconpust}
                />
                <Text style={styles.texthead}>Download list</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _RemoveLists()}
                style={styles.row}>
                <Text style={styles.textdelete}>Delete List</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (checked) {
              setselectedId([]);
            } else {
              let ids2 = [];
              list.map((value, item) => {
                ids2.push(value.my_list_id);
              });
              setselectedId(ids2);
            }
            setChecked(!checked);
          }}
          style={styles.row1}>
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
                    handleCheckBox(item.my_list_id);
                  }}
                  style={[
                    styles.viewlist,
                    {
                      backgroundColor: isChecked(item.my_list_id)
                        ? '#DAA560'
                        : '#fff',
                      borderColor: isChecked(item.my_list_id)
                        ? '#DAA560'
                        : '#888888',
                    },
                  ]}
                />

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Inmylist', {item});
                  }}
                  style={styles.row3}>
                  <View style={{alignSelf: 'center'}}>
                    <Text style={styles.textlist}>{item.my_list_name}</Text>
                  </View>
                  <Text style={styles.texthead}>{item.sum} item</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Mylist);
