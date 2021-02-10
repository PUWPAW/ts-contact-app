import { ContactDispatchTypes, CONTACT_ACTIONS } from "../actions/ActionTypes";
import { IContactState } from "./reducerTypes";

const defaultState: IContactState = {
  data: [],
  loading: false,
  errorMsg: "",
  total: 0,
  pageCapacity: 1,
  currentPage: 1,
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
        total: action.total,
        pageCapacity: action.pageCapacity,
      };
    case CONTACT_ACTIONS.CONTACTS_DATA_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Something went wrong!",
      };
    case CONTACT_ACTIONS.CONTACTS_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default ContactsReducer;
