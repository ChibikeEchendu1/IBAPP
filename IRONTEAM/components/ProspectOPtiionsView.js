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
import Normalize from '../utils/Normalize';

const barWidth = Dimensions.get('screen').width - 40;
const placeholder = {
  label: 'Select a Product...',
  value: null,
  color: '#9EA0A4',
};
class ProspectOPtiionsView extends Component {
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
    return <MyProspectList navigation={this.props.navigation} item={item} />;
  }

  renderRefreshControl() {
    this.setState({isLoading: true});
  }

  render() {
    const {Name, Persentage, Contacts} = this.state.Prospect;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              width: '90%',
              marginLeft: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: Normalize(30)}}>{Name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddContact', {
                Prospect: this.state.Prospect,
              });
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
                  name="address-book"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Add Contact'}</Text>
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
              this.props.navigation.navigate('Meeting', {
                Prospect: this.state.Prospect,
                type: 'Meeting',
              });
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
                  name="users"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>
                {'Decision Meeting'}
              </Text>
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
              this.props.navigation.navigate('Deal', {
                Prospect: this.state.Prospect,
              });
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
                  name="thumbs-up"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Deal Agreed'}</Text>
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
              this.props.navigation.navigate('Meeting', {
                Prospect: this.state.Prospect,
                type: 'Data Collected',
              });
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
                  name="table"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>

              <Text style={{fontSize: Normalize(20)}}>{'Data Collected'}</Text>
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
              this.props.navigation.navigate('Meeting', {
                Prospect: this.state.Prospect,
                type: 'Training',
              });
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
                  name="user"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>{'Training'}</Text>
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
              this.props.navigation.navigate('AddChampion', {
                Prospect: this.state.Prospect,
              });
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
                  name="star"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>
                {'Prospect Champion'}
              </Text>
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
              this.props.navigation.navigate('Meeting', {
                Prospect: this.state.Prospect,
                type: 'End User Interaction',
              });
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
                  name="comments-o"
                  size={Normalize(15)}
                  style={{marginRight: 10}}
                  color={VARIABLES.Color}
                />
              </View>
              <Text style={{fontSize: Normalize(20)}}>
                {'End User Interaction'}
              </Text>
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
)(ProspectOPtiionsView);
