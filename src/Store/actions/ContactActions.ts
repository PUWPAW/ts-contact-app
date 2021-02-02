import { Dispatch } from "redux";
import axios from "axios";
import {
  ContactDispatchTypes,
  CONTACTS_DATA_FAIL,
  CONTACTS_DATA_LOADING,
  CONTACTS_DATA_SUCCESS,
  IContactsFail,
  IContactsLoading,
  IContactsSuccess,
  ContactType,
} from "./ContactsActionTypes";

const LoadingData = (): IContactsLoading => ({
  type: CONTACTS_DATA_LOADING,
});

const SuccessData = (data: Array<ContactType>): IContactsSuccess => ({
  type: CONTACTS_DATA_SUCCESS,
  payload: data,
});

const FailData = (): IContactsFail => ({
  type: CONTACTS_DATA_FAIL,
});

export const GetData = () => async (
  dispatch: Dispatch<ContactDispatchTypes>
) => {
  try {
    dispatch(LoadingData());

    const resp = await axios.get(`https://randomuser.me/api/?results=10`);
    const { data } = resp;
    dispatch(SuccessData(data.results));
  } catch (e) {
    dispatch(FailData());
  }
};
