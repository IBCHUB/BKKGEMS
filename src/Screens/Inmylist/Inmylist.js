import React, {useState} from 'react';
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
const Inmylist = ({navigation, route}) => {
  const {item} = route.params;

  const [selectedId, setselectedId] = useState([]);
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
    setChecked(selectedId.length + 1 == item.detail.length);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback item={item.text} navigation={navigation} />
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
          <TouchableOpacity style={styles.viewrow}>
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
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            if (checked) {
              setselectedId([]);
            } else {
              let ids2 = [];
              item.detail.map((value, item) => {
                ids2.push(value.id);
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
          <Text style={styles.texthead}>{item.detail.length} item</Text>
        </TouchableOpacity>
        <View style={styles.liner} />
        <FlatList
          data={item.detail}
          renderItem={({index, item}) => {
            return (
              <View style={styles.row2}>
                <TouchableOpacity
                  onPress={() => {
                    handleCheckBox(item.id);
                  }}
                  style={[
                    styles.viewlist,
                    {
                      backgroundColor: isChecked(item.id) ? '#DAA560' : '#fff',
                      borderColor: isChecked(item.id) ? '#DAA560' : '#888888',
                    },
                  ]}
                />
                <Image source={item.img} style={styles.img} />
                <View style={styles.list}>
                  <Text style={styles.textlist}>{item.name}</Text>
                  <View style={styles.row}>
                    <Image source={item.icon} style={styles.icon} />
                    <Text numberOfLines={1} style={styles.text}>
                      {item.text}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Inmylist;
