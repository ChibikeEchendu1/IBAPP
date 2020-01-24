import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ProspectHomeMarketerView from '../components/ProspectHomeMarketerView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class ProspectHomeMarketer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ProspectHomeMarketerView navigation={navigation} />
      </Provider>
    );
  }
}

export default ProspectHomeMarketer;
