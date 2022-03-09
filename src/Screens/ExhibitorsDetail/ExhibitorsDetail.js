import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Product from './product';
import Aboutexhi from './aboutexhi';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ExhibitorsDetail = ({navigation, route}) => {
  const {item} = route.params;
  const [modal, setmodal] = useState(false);
  const [page, setpage] = useState(0);
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
            <Text style={styles.textopmodal}>Contact to company</Text>
            <View style={styles.viewinput}>
              <TextInput placeholder="Name" style={styles.input} />
            </View>
            <View style={styles.viewinput}>
              <TextInput placeholder="Country" style={styles.input} />
            </View>
            <View style={styles.viewinput}>
              <TextInput placeholder="Business Type" style={styles.input} />
            </View>
            <View style={styles.viewinput}>
              <TextInput placeholder="Tel." style={styles.input} />
            </View>
            <View style={styles.viewinput}>
              <TextInput placeholder="Email" style={styles.input} />
            </View>
            <View style={styles.viewinput1}>
              <TextInput placeholder="Message" style={styles.input} multiline />
            </View>
            <TouchableOpacity style={styles.touchedit}>
              <Text style={styles.textedit}>SEAN MESSAGE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView>
        <ScrollView style={{marginBottom: 50}}>
          <Headerback navigation={navigation} />
          <View style={styles.viewHeader}>
            <Image source={item.icon} style={styles.logo} />
            <Text style={styles.textTopic}>{item.text}</Text>
            <Text style={styles.texthead}>GEMSTONES</Text>
            <View style={styles.row}>
              <MaterialIcons name="location-pin" color="#D7A360" size={15} />
              <Text style={styles.textloca}>Bangkok, Thailand</Text>
            </View>
            <View style={[styles.row, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.button}>
                <Text style={styles.textbutton}>LIVE CHAT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setmodal(true);
                }}
                style={styles.button}>
                <Text style={styles.textbutton}>CONTACT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Meeting')}
                style={styles.button}>
                <Text style={styles.textbutton}>MEETING</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                setpage(0);
              }}
              style={[
                styles.page,
                {
                  borderBottomWidth: page === 0 ? 0.5 : 0,
                  borderBottomColor: page === 0 ? '#DAA569' : '#000',
                },
              ]}>
              <Text
                style={[
                  styles.textpage,
                  {
                    color: page === 0 ? '#DAA560' : '#000',
                    fontSize: page === 0 ? 20 : 18,
                  },
                ]}>
                PRODUCT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpage(1);
              }}
              style={[
                styles.page,
                {
                  borderBottomWidth: page === 1 ? 0.5 : 0,
                  borderBottomColor: page === 1 ? '#DAA569' : '#000',
                },
              ]}>
              <Text
                style={[
                  styles.textpage,
                  {
                    color: page === 1 ? '#DAA560' : '#000',
                    fontSize: page === 1 ? 20 : 17,
                  },
                ]}>
                ABOUT
              </Text>
            </TouchableOpacity>
          </Animated.View>
          {page === 0 && <Product item={item} />}
          {page === 1 && <Aboutexhi />}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ExhibitorsDetail;
