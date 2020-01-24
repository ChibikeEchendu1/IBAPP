import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import TheDealViews from '../components/TheDealViews';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class TheDeal extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <TheDealViews navigation={navigation} />
      </Provider>
    );
  }
}

export default TheDeal;
