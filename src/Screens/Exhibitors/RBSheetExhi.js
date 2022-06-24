import React, {useEffect, useRef, useState} from 'react';
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
import {Exhibitor_List, Tags} from '../../action/data.action';
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {savePtag, saveRBSearch} from '../../recoil/atoms';
import {useRecoilState} from 'recoil';
const RBSheetExhi = ({onPress, navigation, refRBSheet, dispatch}) => {
  const [ta, setta] = useRecoilState(savePtag);
  const [selectedtags, setselectedtags] = useRecoilState(saveRBSearch);
  const [selectedId, setselectedId] = useState([]);
  const [checked, setChecked] = useState(true);
  const [tags, settags] = useState([]);
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

  const [checkedtags, setCheckedtags] = useState(false);
  const isCheckedtags = id => {
    const isChecktags = selectedtags.includes(id);
    return isChecktags;
  };

  const handleCheckBoxtags = (id, idt) => {
    console.log(idt);
    const ids = [...selectedtags, id];
    const idtext = [...ta, idt];
    if (isCheckedtags(id)) {
      console.log('เอาออก');
      setselectedtags(selectedtags.filter(item => item !== id));
      setta(ta.filter(item => item !== idt));
    } else {
      console.log('เอาเข้า');
      setselectedtags(ids);
      setta(idtext);
    }
    setCheckedtags(selectedtags.length + 1 == tags.length);
  };

  const _Tags = async values => {
    try {
      const response = await dispatch(Tags());
      console.log(response);
      if (response.res_code == '00') {
        settags(response.res_result);
        console.log('1111');
      } else {
        console.log('2222');
      }
    } catch (error) {}
  };

  useEffect(() => {
    _Tags();
    let ids2 = [];
    sort.map((value, item) => {
      ids2.push(value.id);
    });
    setselectedId(ids2);
  }, []);
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
                    handleCheckBoxtags(item.tags_id, item.tags_name);
                  }}
                  style={[
                    styles.bottontags,
                    {
                      backgroundColor: isCheckedtags(item.tags_id)
                        ? '#DAA560'
                        : '#fff',
                      borderColor: isCheckedtags(item.tags_id)
                        ? '#fff'
                        : '#DAA560',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textsortdetail,
                      {color: isCheckedtags(item.tags_id) ? '#fff' : '#000'},
                    ]}>
                    {item.tags_name}
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
            onPress={async () => {
              onPress();
              var request =
                'meet=' +
                '1' +
                '&tags=' +
                selectedtags +
                '&type=' +
                selectedId +
                '&text=' +
                '';
              const response = await dispatch(Exhibitor_List(request));
              console.log(response);
              if (response.res_code == '00') {
                navigation.navigate('Searchno', {
                  item: response.res_result,
                  text: '',
                  selectedId: selectedId,
                  selectedtags: selectedtags,
                });
              } else {
                console.log('2222');
              }
            }}
            style={[styles.touch, {backgroundColor: '#DAA560'}]}>
            <Text style={[styles.textouch, {color: '#fff'}]}>DONE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(RBSheetExhi);
