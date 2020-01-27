/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  Platform,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import ProspectListBoss from './ProspectListBoss';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FetchProspects, NameChanged, Delivered} from '../actions';
import {connect} from 'react-redux';
import Normalize from '../utils/Normalize';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationEvents} from 'react-navigation';
import {Footer} from './Footer';

const SCREENWIDTH = Dimensions.get('window').width;

class SearchprospectBossViews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      Profiles: {Partner: []},
      isLoading: false,
    };
  }

  componentWillMount() {
    //componentDidMount
    this.props.FetchProspects();
  }

  componentDidFocus() {
    console.log('lol');

    this.props.FetchProspects();
  }

  onNameC(text) {
    this.props.NameChanged(text);
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
    return <ProspectListBoss navigation={this.props.navigation} item={item} />;
  }

  onButtonPress() {
    this.props.navigation.navigate('AddProspect');
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <NavigationEvents
            onDidFocus={() => {
              this.props.FetchProspects();
            }}
          />

          <SafeAreaView style={{backgroundColor: 'white', marginLeft: 20}}>
            <Input
              placeholder="...Search Name"
              leftIcon={
                <Icon name="search" size={20} color={VARIABLES.Color} />
              }
              containerStyle={{width: '80%', marginBottom: 10}}
              value={this.props.name}
              onChangeText={this.onNameC.bind(this)}
              errorStyle={{color: 'red', marginLeft: '5%'}}
              inputStyle={{marginLeft: 5}}
              errorMessage={this.props.NameError}
              inputContainerStyle={{width: '100%'}}
            />
            {this.renderList()}
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

//GetCart(this.props.auth.Cart, this.props.create.Market),
const mapStateToProps = state => {
  return {
    items: state.auth.Companies,
    Loader: state.auth.Loader,
    name: state.auth.name,
  };
};

export default connect(
  mapStateToProps,
  {FetchProspects, NameChanged, Delivered},
)(SearchprospectBossViews);
