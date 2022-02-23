import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderDetail from '../../Components/HeaderDetail';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Product from './product';

const ExhibitorsDetail = ({navigation, route}) => {
  const {item} = route.params;

  const [page, setpage] = useState(0);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HeaderDetail navigation={navigation} />
          <View style={styles.viewHeader}>
            <Image source={item.icon} style={styles.logo} />
            <Text style={styles.textTopic}>{item.text}</Text>
            <Text style={styles.texthead}>GEMSTONES</Text>
            <View style={styles.row}>
              <MaterialIcons name="location-pin" color="#D7A360" size={15} />
              <Text style={styles.textloca}>Bangkok, Thailand</Text>
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>LIVE CHAT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>CONTACT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>MEETING</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setpage(0);
              }}
              style={styles.page}>
              <Text
                style={[
                  styles.textpage,
                  {color: page === 0 ? '#DAA560' : '#000'},
                ]}>
                PRODUCT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpage(1);
              }}
              style={styles.page}>
              <Text
                style={[
                  styles.textpage,
                  {color: page === 1 ? '#DAA560' : '#000'},
                ]}>
                ABOUT
              </Text>
            </TouchableOpacity>
          </View>
          {page === 0 && <Product />}
          {page === 1 && (
            <View>
              <Text>2</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ExhibitorsDetail;
