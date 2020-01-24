/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import ProfileSectionMarketer from './ProfileSectionMarketer';
import Header from './Header';

import MyProspectListMarketer from './MyProspectListMarketer';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NameChanged, FetchMyProspects} from '../actions';
import {connect} from 'react-redux';
import Normalize from '../utils/Normalize';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationEvents} from 'react-navigation';

const SCREENWIDTH = Dimensions.get('window').width;

class MarketerHomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      Profiles: {Partner: []},
      isLoading: false,
      Prospect: this.props.navigation.state.params.Prospect,
    };
  }

  componentDidMount() {
    //componentDidMount
    AsyncStorage.getItem('loginToken')
      .then(value => {
        this.setState({_id: JSON.parse(value)});
        this.props.FetchMyProspects(this.state.Prospect._id);
        console.log(this.state._id, 'id');
      })
      .done();
  }
  getProfiles() {
    return this.state.Profiles.Partner;
  }

  renderRefreshControl() {
    this.setState({isLoading: true});
  }

  onNameC(text) {
    this.props.NameChanged(text);
  }
  renderList() {
    if (this.props.Loader) {
      return (
        <ActivityIndicator
          style={{
            marginTop: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          color={VARIABLES.Color}
          size={'large'}
        />
      ); //
    }
    return (
      <FlatList
        style={{height: '72%'}}
        data={this.props.items.filter(items => {
          return (
            items.Name.toLowerCase().indexOf(this.props.name.toLowerCase()) !==
            -1
          );
        })}
        renderItem={({item}) => this.renderRow(item)}
        keyExtractor={(item, index) => index}
        onRefresh={() => this.renderRefreshControl()}
        refreshing={this.props.Loader}
        initialNumToRender={8}
      />
    );
  }

  renderRow(item) {
    return (
      <MyProspectListMarketer navigation={this.props.navigation} item={item} />
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <ProfileSectionMarketer Profile={this.state.Prospect} />
          <Input
            placeholder="...Search Name"
            leftIcon={<Icon name="search" size={20} color={VARIABLES.Color} />}
            containerStyle={{width: '80%', marginTop: 20}}
            value={this.props.name}
            onChangeText={this.onNameC.bind(this)}
            errorStyle={{color: 'red', marginLeft: '5%'}}
            inputStyle={{marginLeft: 5}}
            errorMessage={this.props.NameError}
            inputContainerStyle={{width: '100%'}}
          />
          {this.renderList()}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

//GetCart(this.props.auth.Cart, this.props.create.Market),
const mapStateToProps = state => {
  return {
    items: state.auth.items,
    Loader: state.auth.Loader,
    name: state.auth.name,
  };
};

export default connect(
  mapStateToProps,
  {NameChanged, FetchMyProspects},
)(MarketerHomeView);
