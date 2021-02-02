import {
  ContactDispatchTypes,
  CONTACTS_DATA_FAIL,
  CONTACTS_DATA_LOADING,
  CONTACTS_DATA_SUCCESS,
  ContactType,
} from "../actions/ContactsActionTypes";

interface IDefaultState {
  loading: boolean;
  data: Array<ContactType>;
  errorMsg: string;
}

const defaultState: IDefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const ContactsReducer = (
  state: IDefaultState = defaultState,
  action: ContactDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case CONTACTS_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTACTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: [...action.payload],
      };
    case CONTACTS_DATA_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Something went wrong!",
      };

    default:
      return state;
  }
};

export default ContactsReducer;
