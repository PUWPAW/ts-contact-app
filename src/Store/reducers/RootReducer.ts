import { combineReducers } from "redux";
import ContactsReducer from "./ContactsReducer";
import FilterReducer from "./FilterReducer";

export const RootReducer = combineReducers({
  contacts: ContactsReducer,
  filter: FilterReducer,
});
