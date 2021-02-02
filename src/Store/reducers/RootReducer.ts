import { combineReducers } from "redux";
import ContactsReducer from "./ContactsReducer";

export const RootReducer = combineReducers({
  contacts: ContactsReducer,
});
