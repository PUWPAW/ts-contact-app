import { IContact } from "../actions/ActionTypes";

export interface IContactState {
  loading: boolean;
  data: Array<IContact>;
  errorMsg: string;
  total: number;
  pageCapacity: number;
  currentPage: number;
}

export interface IFilterState {
  nameValue: string;
  natValue: string;
  genderValue: string;
}
