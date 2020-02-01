import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import BugView from '../components/BugView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
class Bug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      value: '',
      isLoading: false,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <BugView navigation={navigation} />
      </Provider>
    );
  }
}

export default Bug;
