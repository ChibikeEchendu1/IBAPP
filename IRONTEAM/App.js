/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {VARIABLES} from './utils/Variables';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';

//import ProfileScreen from './screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
  Main: {
    screen: createBottomTabNavigator({
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
          gesturesEnabled: false,
          headerLeft: null,
          tabBarVisible: false,
        },
      },
      Worker: createBottomTabNavigator(
        {
          Home: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          Orders: {
            screen: SignupScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          History: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
        },
        {
          initialRouteName: 'Home',
          tabBarOptions: {
            activeTintColor: VARIABLES.Color,
            inactiveColor: '#3e2465',
            showIcon: true,
            style: {
              backgroundColor: 'white',
            },
            // barStyle: { backgroundColor: '#FA2700' },
            // activeBackgroundColor: '#FA2700',
          },
        },
      ),
      Store: createBottomTabNavigator(
        {
          Home: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          Worker: {
            screen: SignupScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          History: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
        },
        {
          initialRouteName: 'Home',
          tabBarOptions: {
            activeTintColor: VARIABLES.Color,
            inactiveColor: '#3e2465',
            showIcon: true,
            style: {
              backgroundColor: 'white',
            },
            // barStyle: { backgroundColor: '#FA2700' },
            // activeBackgroundColor: '#FA2700',
          },
        },
      ),
      Admin: createBottomTabNavigator(
        {
          Home: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          Worker: {
            screen: SignupScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
          History: {
            screen: ProfileScreen,
            navigationOptions: {
              gesturesEnabled: false,
              headerLeft: null,
            },
          },
        },
        {
          initialRouteName: 'Home',
          tabBarOptions: {
            activeTintColor: VARIABLES.Color,
            inactiveColor: '#3e2465',
            showIcon: true,
            style: {
              backgroundColor: 'white',
            },
            // barStyle: { backgroundColor: '#FA2700' },
            // activeBackgroundColor: '#FA2700',
          },
        },
      ),
    }),
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
});

export default createAppContainer(TabNavigator);
