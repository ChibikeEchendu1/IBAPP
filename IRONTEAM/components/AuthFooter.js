import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {loginUserGoogle} from '../actions';
import {connect} from 'react-redux';
import {VARIABLES} from '../utils/Variables';

import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    Platform.OS === 'ios'
      ? '1048876473488-3ujpap8h97arvt99n1nvpeovos8vtvqf.apps.googleusercontent.com'
      : '1048876473488-e7e3n4s3pbuv0isij9hlju1hqqchslg7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId:
    '1048876473488-3ujpap8h97arvt99n1nvpeovos8vtvqf.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //androidClientId:'280069859300-j1v3ubj3ieufs4dnpuee6mk93vjgjihk.apps.googleusercontent.com'
});
//com.googleusercontent.apps.1048876473488-3ujpap8h97arvt99n1nvpeovos8vtvqf
class AuthFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {namegoogle: '', emailgoogle: ''};
  }
  //state object

  facebooklog = () => {
    console.log(this.state.namefb);
  };

  googlelog = () => {
    console.log(this.state.namegoogle);
  };

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('hgjhuuy');
      const userInfo = await GoogleSignin.signIn();
      console.log('hgjhuuy');
      //this.setState({ userInfo });
      console.log('User Info --> ', userInfo);
      // this.setState({'namegoogle':userInfo.user.name,'emailgoogle':userInfo.user.email})
      const namegoogle = userInfo.user.name;
      const emailgoogle = userInfo.user.email;
      console.log(namegoogle, emailgoogle, 'name email');
      // this.googlelog()

      this.props.loginUserGoogle({namegoogle, emailgoogle});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('cancled');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('cancled');
      } else {
        console.log(error.code, 'error');
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.viewStyle}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-evenly',
          }}>
          <Button
            buttonStyle={{borderColor: VARIABLES.Color}}
            containerStyle={{marginTop: 30, alignSelf: 'center', width: '50%'}}
            icon={
              <Icon
                color={VARIABLES.Color}
                name="google-plus-square"
                size={30}
                style={{alignSelf: 'center', marginRight: 10}}
              />
            }
            onPress={this._signIn}
            type="outline"
            titleStyle={{color: VARIABLES.Color}}
            title={this.props.use + ' Google'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    opacity: 0.9,
    //borderWidth:5,
    position: 'absolute',
    //flex:1,
    //marginBottom:20,
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: '15%',
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => {
  return {
    Loader: state.auth.Loader,
  };
};

export default connect(
  mapStateToProps,
  {loginUserGoogle},
)(AuthFooter);
