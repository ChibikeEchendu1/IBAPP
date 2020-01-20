/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FetchProfile} from '../actions';
import {connect} from 'react-redux';
import Normalize from '../utils/Normalize';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationEvents} from 'react-navigation';
import ProgressCircle from 'react-native-progress-circle';

const SCREENWIDTH = Dimensions.get('window').width;

class ProfileScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      Profiles: {Partner: []},
      isLoading: false,
    };
  }

  componentDidMount() {
    //componentDidMount
    AsyncStorage.getItem('loginToken')
      .then(value => {
        this.setState({_id: JSON.parse(value)});
        this.props.FetchProfile(JSON.parse(value));
        console.log(this.state._id, 'id');
      })
      .done();
  }

  componentWillMount() {
    //componentDidMount
    AsyncStorage.getItem('loginToken')
      .then(value => {
        this.setState({_id: JSON.parse(value)});
        this.props.FetchProfile(JSON.parse(value));
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
      <View
        style={{
          marginLeft: '10%',
          height: Normalize(150),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff">
            {this.props.Profile.ImagePath ? (
              <Image
                resizeMode="cover"
                style={{
                  width: Normalize(80),
                  height: Normalize(80),
                }}
                source={{
                  uri: VARIABLES.IP + '/' + this.props.Profile.ImagePath,
                }}
              />
            ) : (
              <Icon
                name="user-circle"
                color={VARIABLES.sparing}
                size={80}
                style={{alignSelf: 'center'}}
              />
            )}
          </ProgressCircle>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            Name: {this.props.Profile.Name}
          </Text>
          <Text style={{marginLeft: 10}}>
            Balance: {this.props.Profile.Balance}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddItem');
          }}>
          <Icon
            name="camera-retro"
            color={VARIABLES.sparing}
            size={20}
            style={{alignSelf: 'center', marginLeft: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{borderBottomWidth: 1, borderBottomColor: VARIABLES.color}}>
        <NavigationEvents
          onDidFocus={() => {
            AsyncStorage.getItem('loginToken')
              .then(value => {
                this.setState({_id: JSON.parse(value)});
                this.props.FetchProfile(JSON.parse(value));
                console.log(this.state._id, 'id');
              })
              .done();
          }}
        />
        {this.renderList()}
      </View>
    );
  }
}

//GetCart(this.props.auth.Cart, this.props.create.Market),
const mapStateToProps = state => {
  return {
    Profile: state.auth.Profile,
    Loader: state.auth.Loader,
  };
};

export default connect(
  mapStateToProps,
  {FetchProfile},
)(ProfileScreenView);
