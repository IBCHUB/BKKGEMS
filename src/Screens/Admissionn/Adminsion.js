import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';

const Adminsion = ({navigation, dispatch}) => {
  return (
    <View style={styles.container}>
      <Headerback navigation={navigation} item={'ADMISSION'} />
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.textdetail}>
            For on-site registration, visitors have to follow registration
            procedure as below.
            {'\n'}
            {'\n'}
            Pre-registration : Visitors have to take a photo and show up
            passport (Oversea visitor) or ID. card (Local visitor) at security
            check-in counter and show confirmation email as the reference upon
            admission to the fair at pre-registration counter for getting the
            badge and lanyard.
            {'\n'}
            {'\n'}
            Walk-in registration : After completed registration form visitors
            have to take a photo and show up passport (Oversea visitor) or ID.
            card (Local visitor) at security check-in counter. Then submit
            registration form as the reference upon admission to the fair at
            walk-in registration counter for getting the badge and lanyard.
          </Text>
          <Image
            style={styles.img}
            source={require('../../../assets/image/visitor1.png')}
          />
          <Text style={styles.textdetail}>
            Remark :{'\n'}
            {'\n'}
            1. Business attire or smart casual is permitted. (Shorts, sandals
            and slippers are not allowed)
            {'\n'}
            2. All weapons are prohibited.
            {'\n'}
            3. Children aged under 10 years old are not permitted in the
            exhibition halls (There is kid’s corner for the children.){'\n'}
            4.Unauthorized photo or video shooting in the venue is prohibited.
            {'\n'}
            5. No pet.
            {'\n'}
            6. Smoking in the fairground is prohibited.
          </Text>
          <Text style={[styles.textdetail, {color: '#D76060'}]}>
            {'\n'}
            {'\n'}
            *** The Organizer reserves the right to refuse entry by the badge
            holder who does not follow the security procedures set by the
            Organizer. ***
            {'\n'}
            {'\n'}
          </Text>
          <Text style={styles.textdetail}>
            For more information please contact {'\n'}e-mail:
            official@bkkgems.com
          </Text>
          <View style={{marginBottom: 30}} />
        </View>
      </ScrollView>
    </View>
  );
};

// const mapStateToProps = state => ({
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Adminsion);
