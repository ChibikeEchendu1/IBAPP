import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import AddChampionView from '../components/AddChampionView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class AddChampion extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <AddChampionView navigation={navigation} />
      </Provider>
    );
  }
}

export default AddChampion;
