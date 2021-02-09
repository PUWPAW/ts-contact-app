import { ContactDispatchTypes, CONTACT_ACTIONS } from "../actions/ActionTypes";
import { IContactState } from "./reducerTypes";

const defaultState: IContactState = {
  data: [],
  loading: false,
  errorMsg: "",
};

const ContactsReducer = (
  state = defaultState,
  action: ContactDispatchTypes
): IContactState => {
  switch (action.type) {
    case CONTACT_ACTIONS.CONTACTS_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_ACTIONS.CONTACTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: action.payload,
      };
    case CONTACT_ACTIONS.CONTACTS_DATA_FAIL:
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
