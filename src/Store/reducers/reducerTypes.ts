import { IContact } from "../actions/ActionTypes";

export interface IContactState {
  loading: boolean;
  data: Array<IContact>;
  errorMsg: string;
}

export interface IFilterState {
  nameValue: string;
  natValue: string;
  genderValue: string;
}
