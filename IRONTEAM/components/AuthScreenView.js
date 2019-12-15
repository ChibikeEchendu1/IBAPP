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

class AuthScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
    };
  }

  onEmailC(text) {
    this.props.emailChanged(text);
  }

  Login() {
    if (this.props.logedin) {
      this.props.navigation.navigate('Main');
    }
  }

  onPasswordC(text) {
    this.props.PasswordChanged(text);
  }

  renderButton() {
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
        <Button
          onPress={this.onButtonPress.bind(this)}
          title="Login"
          type="outline"
          raised
          containerStyle={{marginTop: 30, alignSelf: 'center', width: '50%'}}
          titleStyle={{color: 'white'}}
          buttonStyle={{
            backgroundColor: VARIABLES.Color,
            borderColor: VARIABLES.Color,
            width: '100%',
          }}
        />
      );
    }
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: '30%', width: '80%', alignSelf: 'center'}}>
          {/*  <Image
            resizeMode="contain"
            style={{width: '100%', alignSelf: 'center', height: '100%'}}
            source={require('../images/logo.jpeg')}
          /> */}
        </View>

        <Input
          placeholder="Email"
          value={this.props.email}
          onChangeText={this.onEmailC.bind(this)}
          inputStyle={{marginLeft: 7}}
          errorStyle={{color: 'red', marginLeft: '5%'}}
          errorMessage={this.props.EmailError}
          inputContainerStyle={{width: '90%', alignSelf: 'center'}}
        />

        <Input
          value={this.props.password}
          inputStyle={{marginLeft: 7}}
          onChangeText={this.onPasswordC.bind(this)}
          secureTextEntry
          placeholder="Password"
          errorStyle={{color: 'red', marginLeft: '5%'}}
          errorMessage={this.props.PasswordError}
          inputContainerStyle={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}
        />

        {this.renderButton()}

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignupScreen')}
          style={{alignItems: 'center'}}>
          <Text style={{marginTop: 30}}>
            New User? <Text style={{color: '#FA2700'}}>SignUp</Text>{' '}
          </Text>
        </TouchableOpacity>
        <AuthFooter use="Login" />
        {this.Login()}
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
)(AuthScreenView);
