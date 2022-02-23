import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Text} from 'react-native';
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
} from '../Screens';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabStackScreen" component={TabStackScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Exhibitors" component={Exhibitors} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Hightligth" component={Hightligth} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ExhibitorsDetail" component={ExhibitorsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
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
          bottom: 16,
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
        component={Home}
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
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Exhibitors"
        component={Exhibitors}
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
                }}>
                EXHIBITORS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hightligth"
        component={Hightligth}
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
                }}>
                HIGHTLIGTH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
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
                }}>
                NEWS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
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
                }}>
                EVENTS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
