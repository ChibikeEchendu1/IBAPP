/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {VARIABLES} from '../utils/Variables';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FetchComments} from '../actions';
import {connect} from 'react-redux';
import Normalize from '../utils/Normalize';
import AsyncStorage from '@react-native-community/async-storage';
import {TabViewExample} from './TabWork';
import RNPickerSelect from 'react-native-picker-select';
const placeholder = {
  label: 'Select a Product...',
  value: null,
  color: '#9EA0A4',
};
const SCREENWIDTH = Dimensions.get('window').width;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailError: '',
      PasswordError: '',
      Profiles: {Partner: []},
      isLoading: false,
    };
  }

  componentDidMount() {
    //componentDidMount
    AsyncStorage.getItem('loginToken')
      .then(value => {
        console.log(value, 'id');

        this.props.FetchComments(JSON.parse(value));
        console.log(this.state._id, 'id');
      })
      .done();
  }
  componentWillFocus() {
    //componentDidMount
    AsyncStorage.getItem('loginToken')
      .then(value => {
        this.props.FetchComments(JSON.parse(value));
        console.log(this.state._id, 'id');
      })
      .done();
  }

  getProfiles() {
    return this.state.Profiles.Partner;
  }

  renderRefreshControl() {
    this.setState({isLoading: true});
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <TabViewExample
          Loader={this.props.Loader}
          Items={this.props.Comments.Items}
          Pending={this.props.Comments.Valies}
          requesr={this.props.Comments.requesr}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '90%',
    borderColor: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const mapStateToProps = state => {
  return {
    items: state.auth.items,
    Loader: state.auth.Loader,
    Comments: state.auth.Comments,
  };
};

export default connect(
  mapStateToProps,
  {FetchComments},
)(Comments);
