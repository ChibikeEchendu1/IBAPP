import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import EditProspectView from '../components/EditProspectView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class EditProspect extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <EditProspectView navigation={navigation} />
      </Provider>
    );
  }
}

export default EditProspect;
