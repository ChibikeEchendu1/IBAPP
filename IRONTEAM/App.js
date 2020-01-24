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
  TouchableOpacity,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variables, {VARIABLES} from './utils/Variables';
import Searchprospect from './screens/Searchprospect';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import MarketerHome from './screens/MarketerHome';
import AddProspect from './screens/AddProspect';
import ProspectHome from './screens/ProspectHome';
import ProspectOPtiions from './screens/ProspectOPtiions';
import AddContact from './screens/AddContact';
import Meeting from './screens/Meeting';
import Deal from './screens/Deal';
import AddChampion from './screens/AddChampion';
import UtilitesOPtiions from './screens/UtilitesOPtiions';
import Calculator from './screens/Calculator';
import Request from './screens/Request';
import Statistics from './screens/Statistics';
import CommentsScreen from './screens/CommentsScreen';
import {connect} from 'react-redux';
import Settings from './screens/Settings';
import Payment from './screens/Payment';
import Password from './screens/Password';
import BossScreen from './screens/BossScreen';
import ProspectOPtiionsMarketers from './screens/ProspectOPtiionsMarketers';
import ProspectHomeMarketer from './screens/ProspectHomeMarketer';

import {BackHeader} from './components/BackHeader';
//import ProfileScreen from './screens/ProfileScreen';
import {Input, Button} from 'react-native-elements';

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
        Utilities: {
          screen: createStackNavigator({
            UtilitesOPtiions: {
              screen: UtilitesOPtiions,

              navigationOptions: ({navigate, navigation}) => ({
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>UTILITIES</Text>
                ),
              }),
            },
            Calculator: {
              screen: Calculator,

              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>CALCULATOR</Text>
                ),
              }),
            },
            Request: {
              screen: Request,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>REQUEST</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="info-circle" size={25} color={tintColor} />
            ),
          },
        },
        Statistics: {
          screen: createStackNavigator({
            Statistics: {
              screen: Statistics,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>STATISTICS</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="bar-chart" size={25} color={tintColor} />
            ),
          },
        },
        Home: {
          screen: createStackNavigator({
            ProfileScreen: {
              screen: ProfileScreen,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,
                header: null,
              }),
            },
            ProspectHome: {
              screen: ProspectHome,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECT</Text>
                ),
              }),
            },
            Settings: {
              screen: Settings,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>SETTINGS</Text>
                ),
              }),
            },
            Payment: {
              screen: Payment,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PAYMENT</Text>
                ),
              }),
            },
            Password: {
              screen: Password,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PASSWORD</Text>
                ),
              }),
            },
            ProspectOPtiions: {
              screen: ProspectOPtiions,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECT</Text>
                ),
              }),
            },
            AddContact: {
              screen: AddContact,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>NEW CONTACT</Text>
                ),
              }),
            },
            Meeting: {
              screen: Meeting,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>NEW MEETING</Text>
                ),
              }),
            },
            Deal: {
              screen: Deal,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>DEAL</Text>
                ),
              }),
            },
            AddChampion: {
              screen: AddChampion,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>CHAMPION</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" size={25} color={tintColor} />
            ),
          },
        },
        prospect: {
          screen: createStackNavigator({
            Searchprospect: {
              screen: Searchprospect,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECTS</Text>
                ),
              }),
            },
            AddProspect: {
              screen: AddProspect,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>NEW PROSPECT</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="search-plus" size={25} color={tintColor} />
            ),
          },
        },

        Comments: {
          screen: createStackNavigator({
            CommentsScreen: {
              screen: CommentsScreen,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>CHAMPION</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="comments-o" size={25} color={tintColor} />
            ),
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
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
  Boss: {
    screen: createBottomTabNavigator(
      {
        Utilities: {
          screen: createStackNavigator({
            UtilitesOPtiions: {
              screen: UtilitesOPtiions,

              navigationOptions: ({navigate, navigation}) => ({
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>UTILITIES</Text>
                ),
              }),
            },
            Calculator: {
              screen: Calculator,

              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>CALCULATOR</Text>
                ),
              }),
            },
            Request: {
              screen: Request,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>REQUEST</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="info-circle" size={25} color={tintColor} />
            ),
          },
        },
        Home: {
          screen: createStackNavigator({
            BossScreen: {
              screen: BossScreen,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,
                header: null,
              }),
            },
            MarketerHome: {
              screen: MarketerHome,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>MARKETER</Text>
                ),
              }),
            },
            ProspectHomeMarketer: {
              screen: ProspectHomeMarketer,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECT</Text>
                ),
              }),
            },
            ProspectOPtiionsMarketers: {
              screen: ProspectOPtiionsMarketers,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECT</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" size={25} color={tintColor} />
            ),
          },
        },
        prospect: {
          screen: createStackNavigator({
            Searchprospect: {
              screen: Searchprospect,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>PROSPECTS</Text>
                ),
              }),
            },
            AddProspect: {
              screen: AddProspect,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon
                      color={VARIABLES.Color}
                      size={25}
                      name={'chevron-left'}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>NEW PROSPECT</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="search-plus" size={25} color={tintColor} />
            ),
          },
        },

        Comments: {
          screen: createStackNavigator({
            CommentsScreen: {
              screen: CommentsScreen,
              navigationOptions: ({navigate, navigation, goBack}) => ({
                gesturesEnabled: false,

                headerTitle: () => (
                  <Text style={{color: VARIABLES.Color}}>CHAMPION</Text>
                ),
              }),
            },
          }),
          navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null,
            tabBarIcon: ({tintColor}) => (
              <Icon name="comments-o" size={25} color={tintColor} />
            ),
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
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
      tabBarVisible: false,
    },
  },
});

const mapStateToProps = state => {
  return {
    Loader: state.auth.Loader,
  };
};

export default connect(
  mapStateToProps,
  null,
)(createAppContainer(TabNavigator));
