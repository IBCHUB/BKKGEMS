import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Text, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
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
} from '../Screens';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenListeners={'Home'}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="About" component={About} />
    </HomeStack.Navigator>
  );
}

const ExhibitorsStack = createNativeStackNavigator();
function ExhibitorsStackScreen() {
  return (
    <ExhibitorsStack.Navigator screenOptions={{headerShown: false}}>
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
    <HightligthStack.Navigator screenOptions={{headerShown: false}}>
      <HightligthStack.Screen name="Hightligth" component={Hightligth} />
    </HightligthStack.Navigator>
  );
}

const EventStack = createNativeStackNavigator();
function EventStackScreen() {
  return (
    <EventStack.Navigator screenOptions={{headerShown: false}}>
      <EventStack.Screen name="Event" component={Event} />
    </EventStack.Navigator>
  );
}

const NewsStack = createNativeStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator screenOptions={{headerShown: false}}>
      <NewsStack.Screen name="News" component={News} />
      <NewsStack.Screen name="NewDetail" component={NewDetail} />
    </NewsStack.Navigator>
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
          bottom: 25,
          alignSelf: 'center',
          left: 16,
          right: 16,
          position: 'absolute',
          borderRadius: 16,
          height: 50,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => (
            <Foundation
              name="home"
              size={focused ? 30 : 25}
              color={focused ? '#fff' : '#000'}
            />
          ),
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: focused ? 9 : 7,
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
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
          tabBarIcon: ({tintColor, focused}) => (
            <Foundation
              name="book"
              size={focused ? 30 : 25}
              color={focused ? '#fff' : '#000'}
            />
          ),
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: focused ? 9 : 7,
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
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
          tabBarIcon: ({tintColor, focused}) => (
            <Foundation
              name="star"
              size={focused ? 30 : 25}
              color={focused ? '#fff' : '#000'}
            />
          ),
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: focused ? 9 : 7,
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                }}>
                HIGHTLIGTH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventStackScreen}
        options={{
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={focused ? 30 : 25}
              color={focused ? '#fff' : '#000'}
            />
          ),
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: focused ? 9 : 7,
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
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
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialCommunityIcons
              name="file-document"
              size={focused ? 30 : 25}
              color={focused ? '#fff' : '#000'}
            />
          ),
          tabBarLabel: ({tintColor, focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: focused ? 9 : 7,
                  color: focused ? '#fff' : '#000',
                  fontWeight: focused ? '500' : '100',
                  fontFamily: 'Cantoria MT Std',
                }}>
                NEWS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function screenStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabStackScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStackScreen" component={TabStackScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Faqs" component={Faqs} />
      <Stack.Screen name="Suppliers" component={Suppliers} />
      <Stack.Screen name="Meeting" component={Meeting} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={{height: '100%'}}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <View style={{backgroundColor: '#232323', height: height}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('About');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>About Fair</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('Suppliers');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>Suppliers and Manufacturers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('Exhibitors');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>Exhibitors List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('Hightligth');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>Highlight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('News');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.touchdrawer}>For Visitor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('Contact');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              setTimeout(() => {
                props.navigation.navigate('Faqs');
              }, 100);
            }}>
            <Text style={styles.touchdrawer}>FAQs</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
const Drawer = createDrawerNavigator();
function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      edgeWidth={0}
      drawerStyle={{
        width: '60%',
      }}
      headerMode="none"
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={screenStack} />
    </Drawer.Navigator>
  );
}
function Routes() {
  return <NavigationContainer>{DrawerStack()}</NavigationContainer>;
}

export default Routes;

const styles = StyleSheet.create({
  touchdrawer: {
    fontSize: 16,
    marginTop: 20,
    color: '#fff',
    marginLeft: 20,
  },
});
