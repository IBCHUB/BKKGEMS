import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useIsFocused, CommonActions} from '@react-navigation/native';
import I18n from '../utils/I18n';
import {logoutUser} from '../action/auth.action';
import {connect} from 'react-redux';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const CustomDrawerContent = ({props, dispatch, navigation, authUser}) => {
  const [visitor, setvisitor] = useState(false);
  const [setting, setsetting] = useState(false);
  const [language, setlanguage] = useState('TH');
  console.log(authUser);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}} />
      <View style={{backgroundColor: '#232323', height: '100%'}}>
        <ScrollView style={{marginBottom: 80}}>
          {authUser.token === null ? (
            <View style={styles.row}>
              <Image
                source={require('../../assets/image/profile.png')}
                style={styles.imgprofile}
              />
              <Text style={styles.texthead}></Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={styles.row}>
              <Image
                source={{uri: authUser.token.profile_img}}
                style={styles.imgprofile}
              />
              <Text style={styles.texthead}>{authUser.token.company_name}</Text>
            </TouchableOpacity>
          )}

          <View style={styles.liner} />
          <View style={{marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('AboutFair')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Suppliers');
              }}>
              <Text style={styles.touchdrawer}>
                Suppliers and Manufacturers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Exhibitors');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('ExhibitorsList')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Hightligth');
              }}>
              <Text style={styles.touchdrawer}>Highlight</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('News');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('News')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setvisitor(val => !val);
              }}
              style={styles.rowlist}>
              <Text style={styles.touchdrawer}>{I18n.t('Visitor')}</Text>
              <FontAwesome
                name={visitor === true ? 'angle-down' : 'angle-right'}
                size={20}
                color={'#fff'}
                style={{alignSelf: 'center', marginTop: 15}}
              />
            </TouchableOpacity>
            {visitor === true && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://pre.eventthai.com/home/register/visitor',
                    );
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('PreRegistration')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Adminsion');
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('Admission')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://bkkgem2022.ibusiness.co.th/data/file/visitor/visitor_seminar.pdf',
                    );
                  }}>
                  <Text style={styles.touchindrawer}>{I18n.t('Seminar')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://about.thaitrade.com/business-matching/guest',
                    );
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('BusinessMatching')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Plan');
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('FloorPlan')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Guide');
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('VisitorGuide')}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Contact');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('ContactUs')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Faqs');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('FAQs')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.liner} />
          <View style={{marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Myfavorite');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('MyFavorite')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Mylist');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('MyList')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.liner} />
          <View style={{marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Term');
              }}>
              <Text style={styles.touchdrawer}>{I18n.t('Terms')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Survey');
              }}>
              <Text style={styles.touchdrawer}>
                {I18n.t('SatisfactionSurvey')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setsetting(val => !val);
              }}
              style={styles.rowlist}>
              <Text style={styles.touchdrawer}>{I18n.t('Setting')}</Text>
              <FontAwesome
                name={setting === true ? 'angle-down' : 'angle-right'}
                size={20}
                color={'#fff'}
                style={{alignSelf: 'center', marginTop: 15}}
              />
            </TouchableOpacity>
            {setting === true && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Language Selection',
                      'Multi language support',
                      [
                        {
                          text: 'TH',
                          onPress: () => {
                            I18n.locale = 'th';
                            setlanguage();
                            navigation.dispatch(
                              CommonActions.navigate({
                                name: 'Home',
                              }),
                            );
                          },
                        },
                        {
                          text: 'EN',
                          onPress: () => {
                            I18n.locale = 'en';
                            setlanguage();
                            navigation.dispatch(
                              CommonActions.navigate({
                                name: 'Home',
                              }),
                            );
                          },
                        },

                        {
                          text: 'Cancel',
                          onPress: () => {
                            console.log('Cancel Pressed');
                          },
                          style: 'cancel',
                        },
                      ],
                      {cancelable: false},
                    );
                  }}>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('ChangeLanguage')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.touchindrawer}>
                    {I18n.t('ChangePassword')}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.liner} />
          {authUser.token === null ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(logoutUser());
              }}>
              <Text style={styles.logout}>Sign in</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(logoutUser());
              }}>
              <Text style={styles.logout}>{I18n.t('Logout')}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  authUser: state.authReducer.authUser,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawerContent);
