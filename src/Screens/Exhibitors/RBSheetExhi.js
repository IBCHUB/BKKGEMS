import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const RBSheetExhi = ({onPress, navigation, refRBSheet}) => {
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
    setChecked(selectedId.length + 1 == sort.length);
  };
  const sort = [
    {
      id: 1,
      text: 'by product',
    },
    {
      id: 2,
      text: 'by brand',
    },
    {
      id: 3,
      text: 'by company',
    },
  ];
  const [selectedtags, setselectedtags] = useState([]);
  const [checkedtags, setCheckedtags] = useState(false);
  const isCheckedtags = id => {
    const isChecktags = selectedtags.includes(id);
    return isChecktags;
  };

  const handleCheckBoxtags = id => {
    const ids = [...selectedtags, id];
    if (isCheckedtags(id)) {
      console.log('เอาออก');
      setselectedtags(selectedtags.filter(item => item !== id));
    } else {
      console.log('เอาเข้า');
      setselectedtags(ids);
    }
    setCheckedtags(selectedtags.length + 1 == tags.length);
  };
  const tags = [
    {
      id: 1,
      text: 'Creative Jewely',
    },
    {
      id: 2,
      text: 'Decorative Items',
    },
    {
      id: 3,
      text: 'Everyday Jewely',
    },
    {
      id: 4,
      text: 'Fashion Jewely',
    },
    {
      id: 5,
      text: 'Craft & Heritage',
    },
    {
      id: 6,
      text: 'High Jewely',
    },
    {
      id: 7,
      text: 'Jewely For Men',
    },
    {
      id: 8,
      text: 'Jewely For Pet',
    },
    {
      id: 9,
      text: 'Jewely For Seniors',
    },
    {
      id: 10,
      text: 'Specaial Occasions',
    },
    {
      id: 11,
      text: 'Spiritual Power',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            handleCheckBox(item.id);
          }}
          style={{flexDirection: 'row', marginBottom: 5}}>
          <FontAwesome
            name={isChecked(item.id) ? 'check-circle' : 'circle-thin'}
            size={26}
            color="#DAA560"
            uncheckedColor="#ceced4"
          />
          <View style={{marginLeft: 10}} />
          <Text style={styles.textsortdetail}>{item.text}</Text>
        </TouchableOpacity>
        <View />
      </View>
    );
  };

  return (
    <View style={styles.containersort}>
      <View style={styles.viewsort}>
        <View />
        <Text style={styles.textsort}>Filters</Text>
        <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
          <EvilIcons name="close" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.textsorthead}>Sort</Text>
        <View style={{marginTop: 5}}>
          <TouchableOpacity
            onPress={() => {
              if (checked) {
                setselectedId([]);
              } else {
                let ids2 = [];
                sort.map((value, item) => {
                  ids2.push(value.id);
                });
                setselectedId(ids2);
              }
              setChecked(!checked);
            }}
            style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome
              name={
                checked && selectedId.length != 0
                  ? 'check-circle'
                  : 'circle-thin'
              }
              size={26}
              color="#DAA560"
              uncheckedColor="#ceced4"
            />
            <View style={{marginLeft: 10}} />
            <Text style={styles.textsortdetail}>Search All</Text>
          </TouchableOpacity>
          <View style={{width: '100%'}}>
            <FlatList
              data={sort}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={styles.linersort} />
        <Text style={styles.textsorthead}>Product tags</Text>
        <FlatList
          data={tags}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    handleCheckBoxtags(item.id);
                  }}
                  style={[
                    styles.bottontags,
                    {
                      backgroundColor: isCheckedtags(item.id)
                        ? '#DAA560'
                        : '#fff',
                      borderColor: isCheckedtags(item.id) ? '#fff' : '#DAA560',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textsortdetail,
                      {color: isCheckedtags(item.id) ? '#fff' : '#000'},
                    ]}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.rowbar}>
          <TouchableOpacity
            onPress={() => {
              if ({checked, checkedtags}) {
                setselectedId([]);
                setselectedtags([]);
              } else {
                let ids2 = [];
                sort.map((value, item) => {
                  ids2.push(value.id);
                });
                setselectedId(ids2);
                tags.map((value, item) => {
                  ids2.push(value.id);
                });
                setselectedtags(ids2);
                setCheckedtags(!checkedtags);
              }
              setChecked(!checked);
            }}
            style={styles.touch}>
            <Text style={styles.textouch}>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPress();
              navigation.navigate('Searchno', {
                item: {selectedId, selectedtags},
              });
            }}
            style={[styles.touch, {backgroundColor: '#DAA560'}]}>
            <Text style={[styles.textouch, {color: '#fff'}]}>DONE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default RBSheetExhi;
