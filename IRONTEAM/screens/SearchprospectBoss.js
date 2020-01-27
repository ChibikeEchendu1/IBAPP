import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import SearchprospectBossViews from '../components/SearchprospectBossViews';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class SearchprospectBoss extends Component {
  componentWillMount() {
    console.log(this.props.navigation.state.params, 'log');

    //componentDidMount
    //this.props.FetchOrders(this.state._id);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SearchprospectBossViews navigation={navigation} />
      </Provider>
    );
  }
}

export default SearchprospectBoss;
