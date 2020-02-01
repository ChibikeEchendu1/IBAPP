/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  ActivityIndicator,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NameChanged,
  AddressChanged,
  TypeChanged,
  emailChanged,
  annothernameChanged,
  AddProspect,
  Deal,
} from '../actions';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import Normalize from '../utils/Normalize';
const placeholder = {
  label: 'Select Product...',
  value: null,
  color: '#9EA0A4',
};
class DealView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      Prospect: this.props.navigation.state.params.Prospect,
      value: -1,
      Error: '',
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
      this.props.navigation.navigate('ProfileScreen', {
        Prospect: this.state.Prospect,
      });
    }
  }

  onButtonPress() {
    const {email, name, type, tot} = this.props;
    const {value, Prospect} = this.state;
    const _id = this.state.Prospect._id;
    const level = this.state.Prospect.level;

    const First =
      level == 0
        ? this.state.Prospect.share.First
        : this.state.Prospect.share.Subseqent;

    if (value == 1) {
      const Type = 'Grade Grubb';
      if (name == '' || type == '' || tot == '') {
        this.setState({Error: 'Enter All Feilds'});
      } else {
        this.setState({Error: ''});
        console.log(name, type, tot, 'vals');

        this.props.Deal({name, type, tot, Type, _id, First});
      }
    } else if (value == 0) {
      const Type = 'CartAList';
      if (tot == '') {
        this.setState({Error: 'Enter All Feilds'});
      } else {
        this.setState({Error: ''});
        console.log(name, type, tot, 'vals');

        this.props.Deal({name, type, tot, Type, _id, First});
      }
    } else if (value == 2) {
      const Type = 'Building Materials';
      if (tot == '') {
        this.setState({Error: 'Enter All Feilds'});
      } else {
        this.setState({Error: ''});
        console.log(name, type, tot, 'vals');

        this.props.Deal({name, type, tot, Type, _id, First});
      }
    }
  }

  renderDeal() {
    if (this.state.value == 0) {
      return (
        <View>
          <Input
            placeholder="Invoice Email Address"
            value={this.props.tot}
            onChangeText={this.onnameC.bind(this)}
            inputStyle={{}}
            errorStyle={{color: 'red'}}
            errorMessage={this.props.EmailError}
            inputContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: Normalize(30),
            }}
          />

          <View
            style={{
              alignSelf: 'center',
              marginTop: Normalize(30),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: Normalize(20)}}>My Pay</Text>
            <Text style={{fontSize: Normalize(20)}}>
              {this.state.Prospect.share.First}
            </Text>
          </View>
        </View>
      );
    } else if (this.state.value == 1) {
      return (
        <View>
          <Input
            placeholder="Price/Term"
            value={this.props.name}
            onChangeText={this.onEmailC.bind(this)}
            inputStyle={{}}
            errorStyle={{color: 'red'}}
            errorMessage={this.props.EmailError}
            inputContainerStyle={{width: '90%', alignSelf: 'center'}}
          />
          <Input
            value={this.props.type}
            inputStyle={{}}
            onChangeText={this.onTypeC.bind(this)}
            placeholder="Number of People"
            keyboardType="number-pad"
            errorStyle={{color: 'red'}}
            errorMessage={this.props.PasswordError}
            inputContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: Normalize(30),
            }}
          />
          <Input
            placeholder="Invoice Email Address"
            value={this.props.tot}
            onChangeText={this.onnameC.bind(this)}
            inputStyle={{}}
            errorStyle={{color: 'red'}}
            errorMessage={this.props.EmailError}
            inputContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: Normalize(30),
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              marginTop: Normalize(30),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: Normalize(20)}}>Total/Term</Text>
            <Text style={{fontSize: Normalize(20)}}>
              {this.props.name * this.props.type}
            </Text>
            <Text style={{fontSize: Normalize(20), marginTop: Normalize(20)}}>
              My First Cut
            </Text>
            <Text style={{fontSize: Normalize(20)}}>
              {(
                this.props.name *
                this.props.type *
                (this.state.Prospect.share.First / 100)
              ).toFixed(2)}
            </Text>
            <Text style={{fontSize: Normalize(20), marginTop: Normalize(20)}}>
              Subequent Cut(2 Years)
            </Text>
            <Text style={{fontSize: Normalize(20)}}>
              {(
                this.props.name *
                this.props.type *
                (this.state.Prospect.share.Subseqent / 100)
              ).toFixed(2)}
            </Text>
          </View>
        </View>
      );
    } else if (this.state.value == 2) {
      return (
        <View>
          <Input
            placeholder="Invoice Email Address"
            value={this.props.tot}
            onChangeText={this.onnameC.bind(this)}
            inputStyle={{}}
            errorStyle={{color: 'red'}}
            errorMessage={this.props.EmailError}
            inputContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
            }}
          />

          <View
            style={{
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: Normalize(20)}}>My Pay</Text>
            <Text style={{fontSize: Normalize(20)}}>
              {this.state.Prospect.share.First}
            </Text>
          </View>
        </View>
      );
    }
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
          title="Deal"
          type="outline"
          raised
          containerStyle={{
            marginTop: Normalize(20),
            alignSelf: 'flex-end',
            marginRight: 20,
            width: '50%',
          }}
          titleStyle={{color: 'white', marginRight: 10}}
          buttonStyle={{
            backgroundColor: VARIABLES.Color,
            borderColor: VARIABLES.Color,
            width: '100%',
          }}
          icon={<Icon name="thumbs-up" size={Normalize(20)} color="white" />}
          iconRight
        />
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <RNPickerSelect
            onValueChange={value => this.setState({value})}
            style={pickerSelectStyles}
            placeholder={placeholder}
            items={[
              {label: 'Grade Grubb', value: 1},
              {label: 'CartAList', value: 0},
              {label: 'Building Materials', value: 2},
            ]}
          />
          {this.renderDeal()}
          {this.renderButton()}
          {this.added()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '90%',
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

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
    AddProspect,
    Deal,
  },
)(DealView);
