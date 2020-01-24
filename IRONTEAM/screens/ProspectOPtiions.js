import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ProspectOPtiionsView from '../components/ProspectOPtiionsView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class ProspectOPtiions extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ProspectOPtiionsView navigation={navigation} />
      </Provider>
    );
  }
}

export default ProspectOPtiions;
