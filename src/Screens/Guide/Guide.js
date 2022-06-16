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
import {ViewScale} from '../../config/ViewScale';
const Guide = ({navigation, dispatch}) => {
  return (
    <View style={styles.container}>
      <Headerback navigation={navigation} item={'VISITOR GUIDE'} />

      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.textdetail}>
            Bangkok Gems & Jewelry Fair (BGJF) is one of the world’s most
            renowned and longest-celebrated gems and jewelry trade fairs in the
            industry. Organized on a biannual basis by Thailand’s Department of
            International Trade Promotion (DITP) in February and September, BGJF
            is regarded as a significant trading arena where all key players in
            the global gems and jewelry business can achieve their purposes of
            sourcing, trading and networking. Thailand’s BGJF is a
            globally-trusted marketplace for a wide range of quality products,
            extensive resources, and innovative designs. Especially, it is
            globally recognized as a sourcing and manufacturing hub as well as
            the gathering of professional and delicate jewelry craftsmanship.
            The 65th BGJF is organized under the theme “Thailand’s Magic Hands:
            the Spirit of Jewelry Making” to proudly showcase the skilled
            craftsmanship of Thai manufacturers as well as our international
            alliances. The 65th BGJF is featuring a wide range of precious
            stones, semi-precious stones, rough stones and synthetic stones
            sourced from Thailand and the supply chain of gemstones around the
            world. The fair also offers extensive of jewelry from manufacturers
            in Thailand and overseas, namely, pearls, diamonds, gold jewelry,
            fine jewelry, silver jewelry, costume & fashion jewelry, including
            display & packaging, jewelry parts, equipment & tools machinery. The
            fair is expecting to welcome 20,000 buyers and visitors including
            all stakeholders from global gems and jewelry industry. For the
            number of exhibitors, it covers 900 companies with over 2,000 booths
            from selected domestic and international exhibitors.
            {'\n'}
            {'\n'}
            Thailand’s BGJF is a globally-trusted marketplace for a wide range
            of quality products, extensive resources, and innovative designs.
            Especially, it is globally recognized as a sourcing and
            manufacturing hub as well as the gathering of professional and
            delicate jewelry craftsmanship. The 65th BGJF is organized under the
            theme “Thailand’s Magic Hands: the Spirit of Jewelry Making” to
            proudly showcase the skilled craftsmanship of Thai manufacturers as
            well as our international alliances.
            {'\n'}
            {'\n'}
            The 65th BGJF is featuring a wide range of precious stones,
            semi-precious stones, rough stones and synthetic stones sourced from
            Thailand and the supply chain of gemstones around the world.
            {'\n'}
            {'\n'}
            The fair also offers extensive of jewelry from manufacturers in
            Thailand and overseas, namely, pearls, diamonds, gold jewelry, fine
            jewelry, silver jewelry, costume & fashion jewelry, including
            display & packaging, jewelry parts, equipment & tools machinery. The
            fair is expecting to welcome 20,000 buyers and visitors including
            all stakeholders from global gems and jewelry industry. For the
            number of exhibitors, it covers 900 companies with over 2,000 booths
            from selected domestic and international exhibitors.
          </Text>
          <View style={{marginBottom: ViewScale(50)}} />
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

export default connect(null, mapDispatchToProps)(Guide);
