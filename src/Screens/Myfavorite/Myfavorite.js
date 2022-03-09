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
  ImageBackground,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Myfavorite = ({navigation}) => {
  const [selectedId, setselectedId] = useState([]);
  const [checked, setChecked] = useState(false);

  const [list, setlist] = useState(false);
  const [selectedlist, setselectedlist] = useState([]);

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
    setChecked(selectedId.length + 1 == data.length);
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
      name: '7 Days Birthstone',
    },
    {
      id: 2,
      img: require('../../../assets/image/exhi/2.png'),
      name: 'Ruby Rosegold Ring',
    },
    {
      id: 3,
      img: require('../../../assets/image/exhi/5.png'),
      name: 'Ruby Rosegold Ring',
    },
    {
      id: 4,
      img: require('../../../assets/image/exhi/4.png'),
      name: 'High quality Silver & Pearl Necklace ',
    },
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback item={'MY FAVORITE'} navigation={navigation} />
        <View style={styles.viewrow}>
          <TouchableOpacity
            onPress={() => {
              if (checked) {
                setselectedId([]);
              } else {
                let ids2 = [];
                data.map((value, item) => {
                  ids2.push(value.id);
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
              <TouchableOpacity style={styles.row}>
                <Image
                  source={require('../../../assets/image/+.png')}
                  style={styles.iconpust}
                />
                <Text style={styles.texthead}>add to My list</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.row}>
                <Text style={styles.textdelete}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({index, item}) => {
            return (
              <View style={styles.viewflat}>
                <ImageBackground style={styles.img} source={item.img}>
                  <View style={styles.rowflat}>
                    <TouchableOpacity
                      onPress={() => {
                        handleCheckBox(item.id);
                      }}
                      style={[
                        styles.viewlist,
                        {
                          backgroundColor: isChecked(item.id)
                            ? '#DAA560'
                            : '#fff',
                          borderColor: isChecked(item.id)
                            ? '#DAA560'
                            : '#888888',
                        },
                      ]}
                    />
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
                      <AntDesign
                        name="star"
                        size={20}
                        color={isList(item.id) === false ? '#999' : '#fff'}
                        style={{alignSelf: 'center'}}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View style={styles.texttt}>
                  <Text style={styles.textflat}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Myfavorite;
