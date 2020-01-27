import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import UtilitesOPtiionsMarketerView from '../components/UtilitesOPtiionsMarketerView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class UtilitesOPtiionsMarketer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <UtilitesOPtiionsMarketerView navigation={navigation} />
      </Provider>
    );
  }
}

export default UtilitesOPtiionsMarketer;
