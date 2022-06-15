import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';
import {
  Home,
  Event,
  Exhibitors,
  About,
  News,
  Login,
  Hightligth,
  ExhibitorsDetail,
  Splash,
  NewDetail,
  Chat,
  Contact,
  Faqs,
  Suppliers,
  Search,
  Meeting,
  Profile,
  Mylist,
  Inmylist,
  Myfavorite,
  Pagechat,
  Adminsion,
  Plan,
  Guide,
  Term,
  Survey,
  Seeall,
  Thenewfaces,
  Theniche,
  Jewellers,
  Page1,
  Page2,
  Page3,
  Page4,
  Fashion,
  Workshops,
  Searchno,
  Cate,
} from '../Screens';
import CustomDrawerContent from './drawer';
import Loader from '../Components/Loader';
import {ViewScale} from '../config/ViewScale';

const {width, height} = Dimensions.get('window');

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      // screenListeners={'Home'}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="About" component={About} />
    </HomeStack.Navigator>
  );
}

const ExhibitorsStack = createNativeStackNavigator();
function ExhibitorsStackScreen() {
  return (
    <ExhibitorsStack.Navigator
      initialRouteName="Exhibitors"
      screenOptions={{headerShown: false}}>
      <ExhibitorsStack.Screen name="Exhibitors" component={Exhibitors} />
      <ExhibitorsStack.Screen
        name="ExhibitorsDetail"
        component={ExhibitorsDetail}
      />
      <ExhibitorsStack.Screen name="Search" component={Search} />
    </ExhibitorsStack.Navigator>
  );
}

const HightligthStack = createNativeStackNavigator();
function HightligthStackScreen() {
  return (
    <HightligthStack.Navigator
      initialRouteName="Hightligth"
      screenOptions={{headerShown: false}}>
      <HightligthStack.Screen name="Hightligth" component={Hightligth} />
    </HightligthStack.Navigator>
  );
}

const EventStack = createNativeStackNavigator();
function EventStackScreen() {
  return (
    <EventStack.Navigator
      initialRouteName="Event"
      screenOptions={{headerShown: false}}>
      <EventStack.Screen name="Event" component={Event} />
    </EventStack.Navigator>
  );
}

const NewsStack = createNativeStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator
      initialRouteName="News"
      screenOptions={{headerShown: false}}>
      <NewsStack.Screen name="News" component={News} />
      <NewsStack.Screen name="NewDetail" component={NewDetail} />
    </NewsStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Splash" component={Splash} />
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabStackScreen(navigation) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#DAA560',
          // bottom: 16,
          alignSelf: 'center',
          // left: 16,
          // right: 16,
          position: 'absolute',
          // borderRadius: 16,
          height: ViewScale(Platform.isPad ? 70 : 80),
          paddingBottom: ViewScale(20),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => <View></View>,
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Foundation
                name="home"
                size={focused ? ViewScale(30) : ViewScale(25)}
                color={focused ? '#fff' : '#000'}
              />
              <Text
                style={{
                  fontSize: focused ? ViewScale(9) : ViewScale(7),
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                  marginTop: 5,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Exhibitors"
        component={ExhibitorsStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => <View></View>,
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Foundation
                name="book"
                size={focused ? ViewScale(30) : ViewScale(25)}
                color={focused ? '#fff' : '#000'}
              />
              <Text
                style={{
                  fontSize: focused ? ViewScale(9) : ViewScale(7),
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                  marginTop: 5,
                }}>
                EXHIBITORS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hightligth"
        component={HightligthStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => <View></View>,
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Foundation
                name="star"
                size={focused ? ViewScale(30) : ViewScale(28)}
                color={focused ? '#fff' : '#000'}
              />
              <Text
                style={{
                  fontSize: focused ? ViewScale(9) : ViewScale(7),
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                  marginTop: 5,
                }}>
                HIGHLIGHT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => <View></View>,
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="ticket-confirmation"
                size={focused ? ViewScale(30) : ViewScale(27)}
                color={focused ? '#fff' : '#000'}
              />
              <Text
                style={{
                  fontSize: focused ? ViewScale(9) : ViewScale(7),
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                  marginTop: 5,
                }}>
                EVENTS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => <View></View>,
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="file-document"
                size={focused ? ViewScale(30) : ViewScale(25)}
                color={focused ? '#fff' : '#000'}
                style={{marginTop: Platform.OS === 'ios' ? 0 : ViewScale(15)}}
              />
              <Text
                style={{
                  fontSize: focused ? ViewScale(8) : ViewScale(7),
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                  width: focused
                    ? Platform.OS === 'ios'
                      ? ViewScale(45)
                      : ViewScale(65)
                    : Platform.OS === 'ios'
                    ? ViewScale(40)
                    : ViewScale(50),
                  marginBottom: focused ? ViewScale(-5) : -3,
                  marginBottom: Platform.OS === 'ios' ? 0 : -5,
                  textAlign: 'center',
                }}>
                NEWS & TRENDS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function ScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabStackScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStackScreen" component={TabStackScreen} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Faqs" component={Faqs} />
      <Stack.Screen name="Suppliers" component={Suppliers} />
      <Stack.Screen name="Meeting" component={Meeting} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Mylist" component={Mylist} />
      <Stack.Screen name="Inmylist" component={Inmylist} />
      <Stack.Screen name="Myfavorite" component={Myfavorite} />
      <Stack.Screen name="Pagechat" component={Pagechat} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Adminsion" component={Adminsion} />
      <Stack.Screen name="Plan" component={Plan} />
      <Stack.Screen name="Guide" component={Guide} />
      <Stack.Screen name="Term" component={Term} />
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="Seeall" component={Seeall} />
      <Stack.Screen name="Thenewfaces" component={Thenewfaces} />
      <Stack.Screen name="Theniche" component={Theniche} />
      <Stack.Screen name="Jewellers" component={Jewellers} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} />
      <Stack.Screen name="Fashion" component={Fashion} />
      <Stack.Screen name="Workshops" component={Workshops} />
      <Stack.Screen name="Searchno" component={Searchno} />
      <Stack.Screen name="Cate" component={Cate} />
      <ExhibitorsStack.Screen
        name="ExhibitorsDetail"
        component={ExhibitorsDetail}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      edgeWidth={0}
      drawerStyle={{
        width: '80%',
      }}
      headerMode="none"
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={ScreenStack} />
    </Drawer.Navigator>
  );
}

const linking = {
  prefixes: ['BKKGEMS://'],
  config: {
    // initialRouteName: 'Login',
    screens: {
      Login: {
        path: 'login/:id/:section',
        parse: {
          id: id => `${id}`,
        },
        stringify: {
          id: id => id.replace(/^login-/, ''),
        },
      },
    },
  },
};

const Routes = ({dispatch, authData, LoadingCounters}) => {
  // console.log(authData);
  return (
    <NavigationContainer linking={linking}>
      {LoadingCounters > 0 && <Loader />}
      {/* {authData.isLoggedIn === true ? LoginStackScreen() : DrawerStack()} */}
      {/* {authData.isLoggedIn || authData.isSkip === true ? ( */}
      <DrawerStack />
      {/* ) : (
        <LoginStackScreen />
      )} */}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  LoadingCounters: state.dataReducer.LoadingCounters,
  // authData: state.authReducer.authData,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
});
// export default Routes;
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
