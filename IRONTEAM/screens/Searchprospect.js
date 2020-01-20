import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import SearchprospectViews from '../components/SearchprospectViews';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class Searchprospect extends Component {
  componentWillMount() {
    console.log(this.props.navigation.state.params, 'log');

    //componentDidMount
    //this.props.FetchOrders(this.state._id);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SearchprospectViews navigation={navigation} />
      </Provider>
    );
  }
}

export default Searchprospect;
