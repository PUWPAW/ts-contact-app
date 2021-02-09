import {
  FILTER_ACTIONS,
  IFilterClear,
  IFilterGender,
  IFilterName,
  IFilterNat,
} from "./ActionTypes";

export const FilterName = (name: string): IFilterName => ({
  type: FILTER_ACTIONS.FILTER_NAME,
  payload: name,
});

export const FilterNat = (nat: string): IFilterNat => ({
  type: FILTER_ACTIONS.FILTER_NAT,
  payload: nat,
});

export const FilterGender = (gender: string): IFilterGender => ({
  type: FILTER_ACTIONS.FILTER_GENDER,
  payload: gender,
});

export const FilterClear = (): IFilterClear => ({
  type: FILTER_ACTIONS.FILTER_CLEAR,
});
