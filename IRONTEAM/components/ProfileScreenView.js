/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import AuthFooter from './AuthFooter';

import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {emailChanged, PasswordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';

class ProfileScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: '30%', width: '80%', alignSelf: 'center'}}>
          <Text>ProfileScreenView</Text>
          <Text>ProfileScreenView</Text>
          <Text>ProfileScreenView</Text>
          <Text>ProfileScreenView</Text>
          <Text>ProfileScreenView</Text>
          <Text>ProfileScreenView</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    EmailError: state.auth.EmailError,
    PasswordError: state.auth.PasswordError,
    Loader: state.auth.Loader,
    logedin: state.auth.logedin,
  };
};

export default connect(
  mapStateToProps,
  {emailChanged, PasswordChanged, loginUser},
)(ProfileScreenView);
