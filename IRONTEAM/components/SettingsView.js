/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import MyProspectList from './MyProspectList';
import RNRestart from 'react-native-restart'; // Import package from node modules

import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NameChanged,
  AddressChanged,
  TypeChanged,
  emailChanged,
  annothernameChanged,
  SignOut,
  Delete,
} from '../actions';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import Colorlize from '../utils/Colorlize';
import Normalize from '../utils/Normalize';

const barWidth = Dimensions.get('screen').width - 40;
const placeholder = {
  label: 'Select a Product...',
  value: null,
  color: '#9EA0A4',
};
class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      value: '',
      isLoading: false,
    };
  }

  onEmailC(text) {
    this.props.NameChanged(text);
  }

  Login() {
    if (this.props.logedin) {
      this.props.navigation.navigate('Main');
    }
  }

  onPasswordC(text) {
    this.props.AddressChanged(text);
  }

  onnameC(text) {
    this.props.annothernameChanged(text);
  }

  onTypeC(text) {
    this.props.TypeChanged(text);
  }

  onSummeryC(text) {
    this.props.emailChanged(text);
  }

  added() {
    if (this.props.Added) {
      this.props.navigation.navigate('ProfileScreen');

      this.props.navigation.navigate('AuthScreen');
      RNRestart.Restart();
    }
  }

  renderRow(item) {
    return <MyProspectList navigation={this.props.navigation} item={item} />;
  }

  renderRefreshControl() {
    this.setState({isLoading: true});
  }

  renderDelete() {
    if (this.props.Loader) {
      return (
        <ActivityIndicator
          style={{marginTop: 10, alignSelf: 'center'}}
          color={VARIABLES.Color}
          size={'large'}
        />
      ); //
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.Delete();
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: VARIABLES.lightGray,
            paddingBottom: 15,
            paddingTop: 15,
            marginTop: 10,
          }}>
          <View
            style={{
              width: '90%',
              marginLeft: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{borderRightWidth: 1, padding: 6}}>
              <Icon
                name="trash"
                size={Normalize(15)}
                style={{marginRight: 10}}
                color={VARIABLES.Color}
              />
            </View>

            <Text style={{fontSize: Normalize(20)}}>{'Delete Account'}</Text>
            <View>
              <Icon
                name="chevron-right"
                size={Normalize(15)}
                style={{marginRight: 10}}
                color={VARIABLES.Color}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'white', marginTop: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Payment');
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: VARIABLES.lightGray,
              paddingBottom: 15,
              paddingTop: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                width: '90%',
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{borderRightWidth: 1, padding: 6}}>
                <Icon
                  name="credit-card"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Payment Info'}</Text>
              <View>
                <Icon
                  name="chevron-right"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Password');
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: VARIABLES.lightGray,
              paddingBottom: 15,
              paddingTop: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                width: '90%',
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{borderRightWidth: 1, padding: 6}}>
                <Icon
                  name="lock"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Password'}</Text>
              <View>
                <Icon
                  name="chevron-right"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.SignOut();
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: VARIABLES.lightGray,
              paddingBottom: 15,
              paddingTop: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                width: '90%',
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{borderRightWidth: 1, padding: 6}}>
                <Icon
                  name="sign-out"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Sign Out'}</Text>
              <View>
                <Icon
                  name="chevron-right"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
            </View>
          </TouchableOpacity>

          {this.renderDelete()}
          {this.added()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.auth.name,
    tot: state.auth.tot,
    type: state.auth.type,
    email: state.auth.email,
    Added: state.auth.Added,
    EmailError: state.auth.EmailError,
    PasswordError: state.auth.PasswordError,
    Loader: state.auth.Loader,
    logedin: state.auth.logedin,
  };
};

export default connect(
  mapStateToProps,
  {
    NameChanged,
    AddressChanged,
    TypeChanged,
    emailChanged,
    annothernameChanged,
    SignOut,
    Delete,
  },
)(SettingsView);
