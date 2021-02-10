import { Dispatch } from "redux";
import axios from "axios";
import {
  ContactDispatchTypes,
  CONTACT_ACTIONS,
  IContactsFail,
  IContactsLoading,
  IContactsSuccess,
  IContactsPage,
  IContact,
} from "./ActionTypes";

const LoadingData = (): IContactsLoading => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_LOADING,
});

const SuccessData = (
  data: Array<IContact>,
  total: number,
  pageCapacity: number
): IContactsSuccess => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_SUCCESS,
  payload: data,
  total,
  pageCapacity,
});

const FailData = (): IContactsFail => ({
  type: CONTACT_ACTIONS.CONTACTS_DATA_FAIL,
});

export const CurrentPage = (page: number): IContactsPage => ({
  type: CONTACT_ACTIONS.CONTACTS_PAGE,
  payload: page,
});

export const GetData = (
  total: number = 20,
  pageCapacity: number = 10
) => async (dispatch: Dispatch<ContactDispatchTypes>) => {
  try {
    dispatch(LoadingData());
    const resp = await axios.get(`https://randomuser.me/api/?results=${total}`);
    const { data } = resp;
    dispatch(SuccessData(data.results, total, pageCapacity));
  } catch (e) {
    dispatch(FailData());
  }
};
