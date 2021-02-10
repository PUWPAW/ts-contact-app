//============CONTACT TYPES===============//

export enum CONTACT_ACTIONS {
  CONTACTS_DATA_LOADING = "CONTACTS_DATA_LOADING",
  CONTACTS_DATA_FAIL = "CONTACTS_DATA_FAIL",
  CONTACTS_DATA_SUCCESS = "CONTACTS_DATA_SUCCESS",
  CONTACTS_PAGE = "CONTACTS_PAGE",
}

type ContactNameType = {
  title: string;
  first: string;
  last: string;
};

type ContactLocationType = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
};

type ContactDateType = {
  date: string;
  age: number;
};

type ContactIdType = {
  uuid: string;
};

type ContactPictureType = {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface IContact {
  readonly login: ContactIdType;
  gender: string;
  email: string;
  name: ContactNameType;
  location: ContactLocationType;
  dob: ContactDateType;
  phone: string;
  nat: string;
  picture: ContactPictureType;
}

export interface IContactsLoading {
  type: CONTACT_ACTIONS.CONTACTS_DATA_LOADING;
}

export interface IContactsFail {
  type: CONTACT_ACTIONS.CONTACTS_DATA_FAIL;
}

export interface IContactsPage {
  type: CONTACT_ACTIONS.CONTACTS_PAGE;
  payload: number;
}

export interface IContactsSuccess {
  type: CONTACT_ACTIONS.CONTACTS_DATA_SUCCESS;
  payload: Array<IContact>;
  total: number;
  pageCapacity: number;
}

export type ContactDispatchTypes =
  | IContactsLoading
  | IContactsFail
  | IContactsSuccess
  | IContactsPage;

//===================================//

//============FILTER TYPES===============//

export enum FILTER_ACTIONS {
  FILTER_NAME = "FILTER_NAME",
  FILTER_NAT = "FILTER_NAT",
  FILTER_GENDER = "FILTER_GENDER",
  FILTER_CLEAR = "FILTER_CLEAR",
}

export interface IFilterName {
  type: FILTER_ACTIONS.FILTER_NAME;
  payload: string;
}

export interface IFilterNat {
  type: FILTER_ACTIONS.FILTER_NAT;
  payload: string;
}

export interface IFilterGender {
  type: FILTER_ACTIONS.FILTER_GENDER;
  payload: string;
}

export interface IFilterClear {
  type: FILTER_ACTIONS.FILTER_CLEAR;
}

export type FilterType =
  | IFilterName
  | IFilterNat
  | IFilterGender
  | IFilterClear;
