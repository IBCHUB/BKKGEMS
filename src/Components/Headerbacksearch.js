import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styleHeadercomp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {logoutUser} from '../action/auth.action';
import {ViewScale} from '../config/ViewScale';
import {
  savePtag,
  savePtag1,
  saveRBSearch,
  saveRBSearch1,
} from '../recoil/atoms';
import {useRecoilState} from 'recoil';
const Headerbacksearch = ({navigation, item, dispatch, authUser}) => {
  const [Ptag, setPtag] = useRecoilState(savePtag);
  const [selectedtags, setselectedtags] = useRecoilState(saveRBSearch);
  const [Ptag1, setPtag1] = useRecoilState(savePtag1);
  const [selectedtags1, setselectedtags1] = useRecoilState(saveRBSearch1);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setPtag([]);
          setselectedtags([]);
          setPtag1([]);
          setselectedtags1([]);
          navigation.goBack('');
        }}>
        <FontAwesome5
          name="arrow-left"
          size={ViewScale(20)}
          color={'#DAA560'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.texthead}>
          {item}
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          // disabled
          onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('../../assets/image/iconSend.png')}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        {/* 
            {authUser.token === null ? (
              <TouchableOpacity
                onPress={() => {
                  dispatch(logoutUser());
                }}>
                <Image
                  source={require('../../assets/image/iconProfile.png')}
                  style={styles.iconprofile}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{uri: authUser?.token?.profile_img}}
                  style={styles.iconprofile}
                />
              </TouchableOpacity>
            )} */}
      </View>
    </View>
  );
};

// const mapStateToProps = state => ({
//   // LoadingCounters: state.dataReducer.LoadingCounters,
//   authUser: state.authReducer.authUser,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Headerbacksearch);
