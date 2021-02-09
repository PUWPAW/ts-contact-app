import { Dispatch } from "redux";
import axios from "axios";
import {
  ContactDispatchTypes,
  CONTACT_ACTIONS,
  IContactsFail,
  IContactsLoading,
  IContactsSuccess,
  IContact,
} from "./ActionTypes";

const LoadingData = (): IContactsLoading => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_LOADING,
});

const SuccessData = (data: Array<IContact>): IContactsSuccess => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_SUCCESS,
  payload: data,
});

const FailData = (): IContactsFail => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_FAIL,
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
