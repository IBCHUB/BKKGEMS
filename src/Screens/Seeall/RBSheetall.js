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
import {connect} from 'react-redux';
import {useRecoilState} from 'recoil';
import {savePtag, saveRBSearch} from '../../recoil/atoms';
const {width, height} = Dimensions.get('window');
const RBSheetall = ({
  onPress,
  navigation,
  dispatch,
  selectedtagsSend,
  selectedIdSend,
  Search,
  key,
  setproduct,
  setcompany,
  setbrand,
  settypetem,
  setNum,
}) => {
  const [ta, setta] = useRecoilState(savePtag);
  const [selectedtags, setselectedtags] = useRecoilState(saveRBSearch);
  console.log(selectedtags);
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
  const [tags, settags] = useState([]);
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
                    {color: isCheckedtags(item.itags_id) ? '#fff' : '#000'},
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
            if ({checkedtags}) {
              setselectedtags([]);
              setta([]);
            } else {
              let ids2 = [];

              tags.map((value, item) => {
                ids2.push(value.id);
              });
              setselectedtags(ids2);
              setCheckedtags(!checkedtags);
            }
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
              [1, 2, 3] +
              '&text=' +
              '';
            const response = await dispatch(Exhibitor_List(request));
            console.log('123456>', response);
            if (response.res_code == '00') {
              setproduct(response.res_result.product);
              setcompany(response.res_result.company);
              setbrand(response.res_result.brand);
              settypetem(selectedtags);
              if (response.res_result.product.data.length === 0) {
                setNum(
                  parseInt(response.res_result.company.data.length) +
                    parseInt(response.res_result.brand.data.length),
                );
              } else if (response.res_result.company.data.length === 0) {
                setNum(
                  parseInt(response.res_result.product.data.length) +
                    parseInt(response.res_result.brand.data.length),
                );
              } else if (response.res_result.brand.data.length === 0) {
                setNum(
                  parseInt(response.res_result.product.data.length) +
                    parseInt(response.res_result.company.data.length),
                );
              } else if (
                response.res_result.product.data.length === 0 &&
                response.res_result.company.data.length === 0
              ) {
                setNum(parseInt(response.res_result.brand.data.length));
              } else if (
                response.res_result.brand.data.length === 0 &&
                response.res_result.company.data.length === 0
              ) {
                setNum(parseInt(response.res_result.product.data.length));
              } else if (
                response.res_result.product.data.length === 0 &&
                response.res_result.brand.data.length === 0 &&
                response.res_result.company.data.length === 0
              ) {
                setNum('0');
              } else {
                setNum(
                  parseInt(response.res_result.product.data.length) +
                    parseInt(response.res_result.company.data.length) +
                    parseInt(response.res_result.brand.data.length),
                );
              }
              navigation.navigate('Searchno', {
                item: response.res_result,
                text: '',
                selectedId: '1',
                selectedtags: selectedtags,
              });
            } else {
              console.log('2222');
            }
            //   navigation.navigate('Search', {
            //     item: {selectedId, selectedtags},
            //   });
          }}
          style={[styles.touch, {backgroundColor: '#DAA560'}]}>
          <Text style={[styles.textouch, {color: '#fff'}]}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(RBSheetall);
