const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const IP = 'http://172.20.10.2:5000';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const emailChanged = text => {
  return {
    type: 'email_changed',
    payload: text,
  };
};

export const PasswordChanged = text => {
  return {
    type: 'Password_changed',
    payload: text,
  };
};

export const NameChanged = text => {
  return {
    type: 'Name_changed',
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  console.log('we here');
  return async dispatch => {
    if (email == '' || typeof email == 'undefined') {
      dispatch({type: 'Email_Error', payload: 'Empty Field'});
      dispatch({type: 'Password_Error', payload: ''});
    } else if (password == '' || typeof password == 'undefined') {
      dispatch({type: 'Password_Error', payload: 'Empty Field'});
      dispatch({type: 'Email_Error', payload: ''});
    } else if (emailvalid.test(email) == false) {
      dispatch({type: 'Email_Error', payload: 'Enter an Email'});
      dispatch({type: 'Password_Error', payload: ''});
    } else if (passwordVaild.test(password) == false) {
      dispatch({
        type: 'Password_Error',
        payload: 'Must contain 8 charcters, uppercase, lowercase, digit',
      });
      dispatch({type: 'Email_Error', payload: ''});
    } else {
      dispatch({type: 'Email_Error', payload: ''});
      dispatch({type: 'Password_Error', payload: ''});
      dispatch({type: 'Spinner', payload: true});
      const emailLower = email.toLowerCase();
      const res = await axios.post(IP + '/api/app/loginemail', {
        password,
        emailLower,
      });

      console.log(res);

      if (typeof res.data.error != 'undefined') {
        dispatch({type: 'Password_Error', payload: res.data.error});
      } else {
        dispatch({type: 'Get_User', payload: res.data});
        await AsyncStorage.setItem('loginToken', JSON.stringify(res.data));
        dispatch({type: 'Login_Done', payload: res.data._id});
      }

      dispatch({type: 'Spinner', payload: false});
    }
  };
};

export const logincheck = () => async dispatch => {
  await AsyncStorage.removeItem('loginToken');
  let token = await AsyncStorage.getItem('loginToken');
  if (token) {
    setTimeout(() => {
      dispatch({type: 'Login_Done', payload: token});
    }, 1500);
  } else {
    setTimeout(() => {
      dispatch({type: 'Login_NO', payload: null});
    }, 3000);
  }
};

export const loginUserGoogle = ({namegoogle, emailgoogle}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const emailLower = emailgoogle.toLowerCase();
    const res = await axios.post(IP + '/api/app/loginGoogle', {
      namegoogle,
      emailLower,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Get_User', payload: res.data});
      await AsyncStorage.setItem('loginToken', JSON.stringify(res.data));
      dispatch({type: 'Login_Done', payload: JSON.stringify(res.data._id)});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const SignUpUser = ({name, email, password}) => {
  return async dispatch => {
    if (name == '' || typeof name == 'undefined') {
      dispatch({type: 'Name_Error', payload: 'Empty Field'});
      dispatch({type: 'Password_Error', payload: ''});
      dispatch({type: 'Email_Error', payload: ''});
    } else if (email == '' || typeof email == 'undefined') {
      dispatch({type: 'Email_Error', payload: 'Empty Field'});
      dispatch({type: 'Password_Error', payload: ''});
      dispatch({type: 'Name_Error', payload: ''});
    } else if (password == '' || typeof password == 'undefined') {
      dispatch({type: 'Password_Error', payload: 'Empty Field'});
      dispatch({type: 'Email_Error', payload: ''});
      dispatch({type: 'Name_Error', payload: ''});
    } else if (emailvalid.test(email) == false) {
      dispatch({type: 'Email_Error', payload: 'Enter an Email'});
      dispatch({type: 'Password_Error', payload: ''});
      dispatch({type: 'Name_Error', payload: ''});
    } else if (passwordVaild.test(password) == false) {
      dispatch({
        type: 'Password_Error',
        payload: 'Must contain 8 charcters, uppercase, lowercase, digit',
      });
      dispatch({type: 'Email_Error', payload: ''});
      dispatch({type: 'Name_Error', payload: ''});
    } else {
      dispatch({type: 'Email_Error', payload: ''});
      dispatch({type: 'Password_Error', payload: ''});
      dispatch({type: 'Name_Error', payload: ''});
      dispatch({type: 'Spinner', payload: true});
      const emailLower = email.toLowerCase();
      const res = await axios.post(IP + '/api/app/signupemail', {
        name,
        password,
        emailLower,
      });

      console.log(res);

      if (typeof res.data.error != 'undefined') {
        dispatch({type: 'Name_Error', payload: res.data.error});
      } else {
        dispatch({type: 'Get_User', payload: res.data});
        await AsyncStorage.setItem('loginToken', JSON.stringify(res.data));
        dispatch({type: 'Login_Done', payload: res.data._id});
      }
      dispatch({type: 'Spinner', payload: false});
    }
  };
};
