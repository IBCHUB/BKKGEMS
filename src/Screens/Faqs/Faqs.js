import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Faqs = ({navigation}) => {
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
    setChecked(selectedId.length + 1 == data.length);
  };
  const data = [
    {
      id: 1,
      text: 'When and where is the next physical event?',
      detail:
        'The 67th Bangkok Gems & Jewelry Fair (BGJF) will take place on 7 - 11 September 2022 (Wed – Sun) at IMPACT Muang Thong Thani, Bangkok, Thailand.For trade visitors, the exhibition is open on 7 - 9 Sep 2022 (10:00am to 06:00pm).For public visitors, the exhibition is open on 10 - 11 Sep 2022 (10:00am to 08:00pm).',
    },
    {
      id: 2,
      text: 'I am registered as an exhibitor, and I have more questions. Who should I contact?',
      detail:
        'Our representatives are in contact with all exhibitors to discuss their participation at the new dates, in accordance to the relevant terms and conditions outlined in the legal binding contract. We will work closely with you to provide a strong support network, following the extended format of the event. Should you require urgent assistance, please email us at official@bkkgems.com',
    },
    {
      id: 3,
      text: 'I am interested to participate in the Bangkok Gems & Jewelry Fair',
      detail: '',
    },
    {
      id: 4,
      text: 'I am interested to visit BGJF',
      detail:
        'The pre-registration portal will be made available from March 2022. We strongly encourage all visitors to pre-register before visiting the event, to enable the event to be staged in a safe environment for all attendees.',
    },
    {
      id: 5,
      text: 'Updates on COVID-19 situation in Thailand',
      detail:
        'The Thailand Government is taking this very seriously and has an active surveillance and screening system for disease control, thanks to its experience in dealing with medical conditions such as SARS, MERS, avian flu and others. The latest advisories are available and published by  the Department of Disease Control.In particular, Thailand Convention & Exhibition Bureau (TCEB) provides travel advisory and situation update on Thailand on a regular basis.',
    },
    {
      id: 6,
      text: 'Speak to us!',
      detail:
        'We would love to hear from you. If you have any queries on any of the above-mentioned items or would like to discuss how we can work together to help you achieve your business objectives, please do not hesitate to contact us at official@bkkgems.com. Alternatively, you may contact the organizers directly at: •  Official Hotel •  Shuttle Bus',
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback navigation={navigation} item={'FAQs'} />
        <ScrollView style={{backgroundColor: '#000'}}>
          <View style={styles.containerview}>
            <FlatList
              data={data}
              renderItem={({index, item}) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        handleCheckBox(item.id);
                      }}
                      style={styles.buttonflat}>
                      <Text style={styles.text}>{item.text}</Text>
                      <Entypo
                        name="chevron-thin-down"
                        size={18}
                        color={'#DAA560'}
                        style={{alignSelf: 'center'}}
                      />
                    </TouchableOpacity>
                    {isChecked(item.id) && (
                      <View style={styles.containertags}>
                        <Text style={styles.tags}>{item.detail}</Text>
                      </View>
                    )}
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Faqs;
