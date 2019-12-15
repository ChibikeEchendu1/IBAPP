import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ProfileScreenView from '../components/ProfileScreenView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ProfileScreenView navigation={navigation} />
      </Provider>
    );
  }
}

export default ProfileScreen;
