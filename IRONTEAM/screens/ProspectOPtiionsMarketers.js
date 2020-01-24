import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ProspectOPtiionsMarketersView from '../components/ProspectOPtiionsMarketersView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class ProspectOPtiionsMarketers extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ProspectOPtiionsMarketersView navigation={navigation} />
      </Provider>
    );
  }
}

export default ProspectOPtiionsMarketers;
