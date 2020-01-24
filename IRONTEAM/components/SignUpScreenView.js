import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthFooter from './AuthFooter';
import {
  emailChanged,
  PasswordChanged,
  NameChanged,
  SignUpUser,
} from '../actions';
import {VARIABLES} from '../utils/Variables';

import {connect} from 'react-redux';
class SignOutScreenView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameError: '',
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

  renderButton() {
    if (this.props.Loader) {
      return (
        <ActivityIndicator
          style={{marginTop: 10}}
          color="#F44336"
          size={'small'}
        />
      ); //
    } else {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}
          title="SignUp"
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

  onPasswordC(text) {
    this.props.PasswordChanged(text);
  }

  onNameC(text) {
    this.props.NameChanged(text);
  }

  onButtonPress() {
    const {name, email, password} = this.props;
    this.props.SignUpUser({name, email, password});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              height: '15%',
              margin: 20,
              width: '80%',
              alignSelf: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{width: '100%', alignSelf: 'center', height: '100%'}}
              source={require('../images/OOO.jpg')}
            />
          </View>

          <Input
            placeholder="Name"
            value={this.props.name}
            onChangeText={this.onNameC.bind(this)}
            errorStyle={{color: 'red', marginLeft: '5%'}}
            inputStyle={{marginLeft: 7}}
            errorMessage={this.props.NameError}
            inputContainerStyle={{width: '90%', alignSelf: 'center'}}
          />

          <Input
            placeholder="Email"
            onChangeText={this.onEmailC.bind(this)}
            value={this.props.email}
            inputStyle={{marginLeft: 7}}
            errorStyle={{color: 'red', marginLeft: '5%'}}
            errorMessage={this.props.EmailError}
            inputContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
            }}
          />

          <Input
            value={this.props.password}
            inputStyle={{marginLeft: 7}}
            onChangeText={this.onPasswordC.bind(this)}
            placeholder="Password"
            secureTextEntry
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
            onPress={() => this.props.navigation.navigate('AuthScreen')}
            style={{alignItems: 'center'}}>
            <Text style={{marginTop: 30}}>
              Already a member? <Text style={{color: '#FA2700'}}>Login</Text>{' '}
            </Text>
          </TouchableOpacity>

          <AuthFooter use="SignUp" />

          {this.Login()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    name: state.auth.name,
    NameError: state.auth.NameError,
    EmailError: state.auth.EmailError,
    PasswordError: state.auth.PasswordError,
    Loader: state.auth.Loader,
    logedin: state.auth.logedin,
  };
};

export default connect(
  mapStateToProps,
  {emailChanged, PasswordChanged, NameChanged, SignUpUser},
)(SignOutScreenView);
