const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const IP = 'http://172.20.10.4:5000';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {Linking, Alert, Platform} from 'react-native';

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

export const DealChanged = text => {
  if (text > 10) {
    return {
      type: 'Deal_Error',
      payload: 'No more than 10',
    };
  }
  return {
    type: 'Deal_changed',
    payload: text,
  };
};

export const anChanged = text => {
  if (text.length > 10) {
    return {
      type: 'AN_Error',
      payload: 'INVALID ACCOUNT NUMBER',
    };
  }
  return {
    type: 'AN_changed',
    payload: text,
  };
};

export const annothernameChanged = text => {
  return {
    type: 'annothernameChanged',
    payload: text,
  };
};

export const NameChanged = text => {
  return {
    type: 'Name_changed',
    payload: text,
  };
};

export const AddressChanged = text => {
  return {
    type: 'Address_Changed',
    payload: text,
  };
};

export const TypeChanged = text => {
  return {
    type: 'Type_Changed',
    payload: text,
  };
};

export const FetchProfile = StoreId => async dispatch => {
  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/FetchProfile', {
    StoreId,
  });
  if (res.data.Fired) {
    dispatch({type: 'Added', payload: true});
  } else {
    dispatch({type: 'Fetch_Profie', payload: res.data});
    dispatch({type: 'Spinner', payload: false});
  }
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
      const res = await axios.post(IP + '/api/markerter/app/loginemail', {
        password,
        emailLower,
      });

      console.log(res);

      if (typeof res.data.error != 'undefined') {
        dispatch({type: 'Password_Error', payload: res.data.error});
      } else {
        dispatch({type: 'Get_User', payload: res.data});
        await AsyncStorage.setItem('loginToken', JSON.stringify(res.data._id));

        dispatch({type: 'Login_Done', payload: res.data._id});
      }

      dispatch({type: 'Spinner', payload: false});
    }
  };
};

export const logincheck = () => async dispatch => {
  //await AsyncStorage.removeItem('loginToken');
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

export const SignOut = () => async dispatch => {
  await AsyncStorage.removeItem('loginToken');
  dispatch({type: 'Added', payload: true});
};

export const Delete = () => async dispatch => {
  let token = await AsyncStorage.getItem('loginToken');

  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/Delete', {
    token: JSON.parse(token),
  });
  await AsyncStorage.removeItem('loginToken');

  dispatch({type: 'Added', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};

export const loginUserGoogle = ({namegoogle, emailgoogle}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const emailLower = emailgoogle.toLowerCase();
    const res = await axios.post(IP + '/api/markerter/app/loginGoogle', {
      namegoogle,
      emailLower,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Get_User', payload: res.data});
      await AsyncStorage.setItem('loginToken', JSON.stringify(res.data._id));

      dispatch({type: 'Login_Done', payload: JSON.stringify(res.data._id)});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddProspect = ({email, name, tot, type, value}) => {
  console.log('we here');

  return async dispatch => {
    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddProspect', {
      email,
      name,
      tot,
      type,
      value,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddPayment = ({name, AN, value}) => {
  console.log('we here');

  return async dispatch => {
    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddPayment', {
      name,
      AN,
      value,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const ChangeScore = ({tot, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/ChangeScore', {
      tot,
      _id,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const Promote = ({tot, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/Promote', {
      tot,
      _id,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const Comment = ({tot, _id}) => {
  console.log('we here');

  return async dispatch => {
    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/Comment', {
      tot,
      _id,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const QandA = ({email, name, value}) => {
  console.log('we here');

  return async dispatch => {
    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/QandA', {
      email,
      name,
      value,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddRequest = ({type, email, value, item}) => {
  console.log('we here');

  return async dispatch => {
    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddRequest', {
      type,
      email,
      value,
      item,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const Fire = ({_id}) => async dispatch => {
  let token = _id;

  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/Delete', {
    token,
  });
  //await AsyncStorage.removeItem('loginToken');

  dispatch({type: 'Added', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};

export const ChangeMax = ({tot, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/ChangeMax', {
      tot,
      _id,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddChamp = ({deal, name, AN, type, value, Bank, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddChamp', {
      deal,
      name,
      AN,
      type,
      value,
      Bank,
      _id,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const changePassword = ({email, name, tot}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Password_Error', payload: ''});

    let token = await AsyncStorage.getItem('loginToken');

    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/changePassword', {
      email,
      name,
      tot,
      token: JSON.parse(token),
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const Deal = ({name, type, tot, Type, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/Deal', {
      name,
      type,
      tot,
      Type,
      _id,
    });

    console.log(res, 'person');

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddContact = ({name, type, value, _id}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddContact', {
      name,
      type,
      value,
      _id,
    });

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
    }

    dispatch({type: 'Spinner', payload: false});
  };
};

export const AddReport = ({email, Rating, _id, Type}) => {
  console.log('we here');

  return async dispatch => {
    dispatch({type: 'Spinner', payload: true});
    const res = await axios.post(IP + '/api/markerter/app/AddReport', {
      email,
      Rating,
      _id,
      Type,
    });

    if (typeof res.data.error != 'undefined') {
      dispatch({type: 'Password_Error', payload: res.data.error});
    } else {
      dispatch({type: 'Added', payload: true});
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
      const res = await axios.post(IP + '/api/markerter/app/signupemail', {
        name,
        password,
        emailLower,
      });

      console.log(res);

      if (typeof res.data.error != 'undefined') {
        dispatch({type: 'Name_Error', payload: res.data.error});
      } else {
        dispatch({type: 'Get_User', payload: res.data});
        await AsyncStorage.setItem('loginToken', JSON.stringify(res.data._id));

        dispatch({type: 'Login_Done', payload: res.data._id});
      }
      dispatch({type: 'Spinner', payload: false});
    }
  };
};

export const FetchProspects = () => async dispatch => {
  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/FetchProspects');
  dispatch({type: 'Fetch_Companies', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};

export const AddPick = file => async dispatch => {
  let token = await AsyncStorage.getItem('loginToken');
  console.log(file, 'file');
  console.log(file.path, 'uri');
  console.log(file['mime'], 'mime');
  console.log(file.filename, 'fname');

  dispatch({type: 'Spinner', payload: true});
  let data = new FormData();
  data.append('file', {
    uri: file['path'],
    type: file['mime'],
    name: file['filename'],
  });
  data.append('id', JSON.parse(token));
  const res = await axios.post(IP + '/api/markerter/app/AddPick', data, {
    headers: {
      accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
  });

  dispatch({type: 'Fetch_Profie', payload: res.data});

  dispatch({type: 'Spinner', payload: false});
};

export const FetchMyProspects = id => async dispatch => {
  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/FetchMyProspects', {
    id,
  });
  dispatch({type: 'Get_Items', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};

export const FetchMarketers = id => async dispatch => {
  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/FetchMarketers', {
    id,
  });
  dispatch({type: 'Get_Items', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};

export const callNumber = phone => async dispatch => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  const supported = Linking.canOpenURL(phoneNumber);
  try {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  } catch (err) {
    console.log(err);
    // TypeError: failed to fetch
  }
};

export const FetchComments = StoreId => async dispatch => {
  dispatch({type: 'Spinner', payload: true});
  const res = await axios.post(IP + '/api/markerter/app/FetchComments', {
    StoreId,
  });
  dispatch({type: 'Fetch_Comments', payload: res.data});
  dispatch({type: 'Spinner', payload: false});
};
