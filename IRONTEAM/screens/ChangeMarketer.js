import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ChangeMarketerView from '../components/ChangeMarketerView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import {VARIABLES} from '../utils/Variables';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChangeMarketer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ChangeMarketerView navigation={navigation} />
      </Provider>
    );
  }
}

export default ChangeMarketer;
