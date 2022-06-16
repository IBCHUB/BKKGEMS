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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ViewScale} from '../config/ViewScale';
const CustomDrawerContent = ({props, dispatch, navigation}) => {
  const [visitor, setvisitor] = useState(false);
  const [setting, setsetting] = useState(false);
  const [language, setlanguage] = useState('TH');
  const [page, setpage] = useState(0);
  return (
    <View style={styles.container}>
     
      {page === 0 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <ScrollView>
            {/* {authUser.token === null ? (
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
                  source={{uri: authUser?.token?.profile_img}}
                  style={styles.imgprofile}
                />
                <Text style={styles.texthead}>{authUser?.token?.fullname}</Text>
              </TouchableOpacity>
            )}
            <View style={styles.liner} /> */}

            <View style={{marginBottom: ViewScale(20)}}>
              <TouchableOpacity
                style={styles.rowlist}
                onPress={() => {
                  setpage(1);
                }}>
                <Text style={styles.touchdrawer}>{I18n.t('About')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rowlist}
                onPress={() => {
                  setpage(2);
                }}>
                <Text style={styles.touchdrawer}>{I18n.t('ForExhibitor')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setpage(3);
                }}
                style={styles.rowlist}>
                <Text style={styles.touchdrawer}>{I18n.t('Visitor')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setpage(4);
                }}
                style={styles.rowlist}>
                <Text style={styles.touchdrawer}>{I18n.t('BGJF')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setpage(5);
                }}
                style={styles.rowlist}>
                <Text style={styles.touchdrawer}>{I18n.t('Events')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setpage(6);
                }}
                style={styles.rowlist}>
                <Text style={styles.touchdrawer}>{I18n.t('News')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate('News');
                }}>
                <Text style={styles.touchdrawer}>{I18n.t('News')}</Text>
              </TouchableOpacity> */}

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
            {/* <View style={{marginBottom: ViewScale(20)}}>
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
            </View> */}
            <View style={styles.liner} />
            <View style={{marginBottom: ViewScale(20)}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Term');
                }}>
                <Text style={styles.touchdrawer}>{I18n.t('Terms')}</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('Survey');
              }}>
              <Text style={styles.touchdrawer}>
                {I18n.t('SatisfactionSurvey')}
              </Text>
            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => {
                  setpage(7);
                }}
                style={styles.rowlist}>
                <Text style={styles.touchdrawer}>{I18n.t('Setting')}</Text>
                <FontAwesome
                  name={'angle-right'}
                  size={ViewScale(20)}
                  color={'#fff'}
                  style={{alignSelf: 'center', marginTop: ViewScale(15)}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.liner} />
            {/* {authUser != undefined && authUser.token === null ? (
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
            )} */}

            <View style={{marginBottom: 80}} />
          </ScrollView>
        </View>
      )}

      {page === 1 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('About')}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('AboutFair')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Suppliers');
            }}>
            <Text style={styles.touchindrawer}>
              Suppliers and Manufacturers
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 2 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('ForExhibitor')}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://bgjf.git.or.th/th-th/');
            }}>
            <Text style={styles.touchindrawer}>
              {I18n.t('ApplicationForm')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bkkgems.com/data/file/exhibitors/exhibitor_letter.pdf',
              );
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('Letter')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bkkgems.com/data/file/exhibitors/exhibitor_manual.pdf',
              );
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('Manual')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 3 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('Visitor')}</Text>
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
            <Text style={styles.touchindrawer}>{I18n.t('Admission')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bkkgems.com/data/file/visitor/visitor_seminar.pdf',
              );
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('Seminar')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Exhibitors');
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('ExhibitorsList')}</Text>
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
            <Text style={styles.touchindrawer}>{I18n.t('FloorPlan')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Guide');
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('VisitorGuide')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 4 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('BGJF')}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.bkkgems.com/about-BGJF');
            }}>
            <Text style={styles.touchindrawer}>{I18n.t('AboutBGJF')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://exporter-reg.bgjf-vtf.com/registration/create/bgex22',
              );
            }}>
            <Text style={styles.touchindrawer}>
              {I18n.t('RegistrationForm')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.bkkgems.com/exhibitor-meeting');
            }}>
            <Text style={styles.touchindrawer}>
              {I18n.t('ExhibitorMeeting')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.bkkgems.com/data/file/BGJF/Exhibitor_Manual.pdf',
              );
            }}>
            <Text style={styles.touchindrawer}>
              {I18n.t('ExhibitorManual')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 5 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('Events')}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Thenewfaces');
            }}>
            <Text style={styles.touchindrawer}>The New Faces</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Theniche');
            }}>
            <Text style={styles.touchindrawer}>The Niche Showcase</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Jewellers');
            }}>
            <Text style={styles.touchindrawer}>The Jewellers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Fashion');
            }}>
            <Text style={styles.touchindrawer}>Fashion Show</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Workshops');
            }}>
            <Text style={styles.touchindrawer}>
              Workshops And Demonstrations
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 6 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('News')}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('News');
            }}>
            <Text style={styles.touchindrawer}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('News');
            }}>
            <Text style={styles.touchindrawer}>Trends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.bkkgems.com/for_press/1-8');
            }}>
            <Text style={styles.touchindrawer}>For Press</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.bkkgems.com/photoGallety');
            }}>
            <Text style={styles.touchindrawer}>Photo Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.bkkgems.com/videoGallety');
            }}>
            <Text style={styles.touchindrawer}>Videos</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 7 && (
        <View style={{backgroundColor: '#232323', height: '100%'}}>
          <TouchableOpacity onPress={() => setpage(0)}>
            <FontAwesome5
              name="arrow-left"
              size={ViewScale(18)}
              color={'#fff'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.touchdrawer1}>{I18n.t('Setting')}</Text>
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
            <Text style={styles.touchindrawer}>{I18n.t('ChangeLanguage')}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.touchindrawer}>{I18n.t('ChangePassword')}</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};
// const mapStateToProps = state => ({
//   authUser: state.authReducer.authUser,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(CustomDrawerContent);
