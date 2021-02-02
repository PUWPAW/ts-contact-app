export const CONTACTS_DATA_LOADING = "CONTACTS_DATA_LOADING";
export const CONTACTS_DATA_FAIL = "CONTACTS_DATA_FAIL";
export const CONTACTS_DATA_SUCCESS = "CONTACTS_DATA_SUCCESS";

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

export type ContactType = {
  readonly login: ContactIdType;
  gender: string;
  email: string;
  name: ContactNameType;
  location: ContactLocationType;
  dob: ContactDateType;
  phone: string;
  nat: string;
  picture: ContactPictureType;
};

export interface IContactsLoading {
  type: typeof CONTACTS_DATA_LOADING;
}

export interface IContactsFail {
  type: typeof CONTACTS_DATA_FAIL;
}

export interface IContactsSuccess {
  type: typeof CONTACTS_DATA_SUCCESS;
  payload: Array<ContactType>;
}

export type ContactDispatchTypes =
  | IContactsLoading
  | IContactsFail
  | IContactsSuccess;
