import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import UtilitesOPtiionsView from '../components/UtilitesOPtiionsView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class UtilitesOPtiions extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <UtilitesOPtiionsView navigation={navigation} />
      </Provider>
    );
  }
}

export default UtilitesOPtiions;
