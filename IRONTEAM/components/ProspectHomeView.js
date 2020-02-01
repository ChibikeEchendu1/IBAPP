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
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import MyContactList from './MyContactList';

import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NameChanged,
  AddressChanged,
  TypeChanged,
  emailChanged,
  annothernameChanged,
  AddProspect,
} from '../actions';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import Colorlize from '../utils/Colorlize';
import ColorlizeObject from '../utils/ColorlizeObject';
import DisableObject from '../utils/DisableObject';

import Normalize from '../utils/Normalize';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

const barWidth = Dimensions.get('screen').width - 40;
const placeholder = {
  label: 'Select a Product...',
  value: null,
  color: '#9EA0A4',
};
class ProspectHomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      value: '',
      isLoading: false,

      Prospect: this.props.navigation.state.params.Prospect,
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
      this.props.navigation.navigate('Searchprospect');
      this.props.navigation.navigate('ProfileScreen');
    }
  }

  renderRow(item) {
    return <MyContactList navigation={this.props.navigation} item={item} />;
  }

  renderRefreshControl() {
    this.setState({isLoading: true});
  }

  render() {
    const {
      Name,
      Persentage,
      Contacts,
      Champion,
      Deal,
      Data,
    } = this.state.Prospect;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: Normalize(30),
            }}>
            <TouchableOpacity
              disabled={DisableObject(Champion)}
              onPress={() => {
                this.props.navigation.navigate('Champion', {
                  Prospect: this.state.Prospect,
                  type: 'Data Collected',
                });
              }}>
              <Icon
                name="star"
                size={30}
                style={{marginRight: 10, marginLeft: 10}}
                color={ColorlizeObject(Champion)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={DisableObject(Deal)}
              onPress={() => {
                this.props.navigation.navigate('TheDeal', {
                  Prospect: this.state.Prospect,
                  type: 'Data Collected',
                });
              }}>
              <Icon
                name="thumbs-up"
                size={30}
                style={{marginRight: 10, marginLeft: 10}}
                color={ColorlizeObject(Deal)}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ProspectOPtiions', {
                Prospect: this.state.Prospect,
              });
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '90%',
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20}}>{Name}</Text>
              <View>
                <Icon
                  name="chevron-right"
                  size={30}
                  style={{marginRight: 10, marginLeft: 10}}
                  color={VARIABLES.Color}
                />
              </View>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={Persentage}
              backgroundColor={Colorlize(Persentage)}
              height={30}
              backgroundColorOnComplete="#6CC644"
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 20, marginTop: 50, marginLeft: '8%'}}>
              Contacts
            </Text>
            <FlatList
              style={{height: '52%', marginLeft: '8%'}}
              data={Contacts.filter(items => {
                return (
                  items.Name.toLowerCase().indexOf(
                    this.props.name.toLowerCase(),
                  ) !== -1
                );
              })}
              renderItem={({item}) => this.renderRow(item)}
              keyExtractor={(item, index) => index}
              onRefresh={() => this.renderRefreshControl()}
              refreshing={this.props.Loader}
              initialNumToRender={8}
            />
          </View>
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
    AddProspect,
  },
)(ProspectHomeView);
