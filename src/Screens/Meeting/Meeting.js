import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Headerback from '../../Components/Headerback';
import styles from './styles';

const Meeting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback navigation={navigation} item={'REQUEST MEETING'} />
      </SafeAreaView>
    </View>
  );
};

export default Meeting;
