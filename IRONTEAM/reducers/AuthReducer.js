import _ from 'lodash';
const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
  address: '',
  tot: '',
  type: '',
  Companies: [],
  EmailError: '',
  PasswordError: '',
  user: {},
  NameError: '',
  items: [],
  Profile: {},
  Loader: false,
  Added: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case 'Login_Done':
      return {...state, logedin: true};
    case 'Fetch_Companies':
      return {...state, Companies: action.payload};
    case 'Fetch_Profie':
      return {...state, Profile: action.payload};
    case 'Login_NO':
      return {...state, new: true};
    case 'item_clered':
      return {...state, items: []};
    case 'Add_Item':
      return {...state, items: [action.payload, ...state.items]};
    case 'Item_remove':
      return {
        ...state,
        items: state.items.filter((item, i) => i != action.payload),
      };
    case 'Item_changed':
      return {...state, itemName: action.payload};
    case 'Quan_changed':
      return {...state, Quan: action.payload};
    case 'Size_changed':
      return {...state, Size: action.payload};
    case 'Size_Error':
      return {...state, SizeError: action.payload};
    case 'Quan_Error':
      return {...state, QuanError: action.payload};
    case 'Item_Error':
      return {...state, ItemError: action.payload};
    case 'email_changed':
      return {...state, email: action.payload};

    case 'Password_changed':
      return {...state, password: action.payload};

    case 'Name_changed':
      return {...state, name: action.payload};
    case 'Address_changed':
      return {...state, place: action.payload};

    case 'annothernameChanged':
      return {...state, tot: action.payload};
    case 'Type_Changed':
      return {...state, type: action.payload};

    case 'Added':
      return {...state, Added: action.payload};
    case 'Email_Error':
      return {...state, EmailError: action.payload};

    case 'Password_Error':
      return {...state, PasswordError: action.payload};

    case 'Name_Error':
      return {...state, NameError: action.payload};
    case 'Spinner':
      return {...state, Loader: action.payload};
    case 'Get_User':
      return {...state, user: action.payload};
    case 'Get_Items':
      return {...state, items: action.payload};
    default:
      return state;
  }
};
