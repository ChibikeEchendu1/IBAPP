import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ChangeRateView from '../components/ChangeRateView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class ChangeRate extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ChangeRateView navigation={navigation} />
      </Provider>
    );
  }
}

export default ChangeRate;
