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
import {createStackNavigator} from 'react-navigation-stack';

import {VARIABLES} from './utils/Variables';
import Searchprospect from './screens/Searchprospect';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddProspect from './screens/AddProspect';
import ProspectHome from './screens/ProspectHome';

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
    screen: createBottomTabNavigator(
      {
        Calculator: createBottomTabNavigator(
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
        Home: {
          screen: createStackNavigator({
            ProfileScreen: {
              screen: ProfileScreen,
              navigationOptions: {
                gesturesEnabled: false,
                headerLeft: null,
                header: null,
              },
            },
          }),
        },
        prospect: {
          screen: createStackNavigator({
            Searchprospect: {
              screen: Searchprospect,
              navigationOptions: {
                gesturesEnabled: false,
                headerLeft: null,
                header: null,
              },
            },
            AddProspect: {
              screen: AddProspect,
              navigationOptions: {
                gesturesEnabled: false,
                headerLeft: null,
                header: null,
              },
            },
            ProspectHome: {
              screen: ProspectHome,
              navigationOptions: {
                gesturesEnabled: false,
                headerLeft: null,
                header: null,
              },
            },
          }),
        },
        Statistics: createBottomTabNavigator(
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
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
});

export default createAppContainer(TabNavigator);
