/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../Store/actions/ContactActions";
import { ContactType } from "../Store/actions/ContactsActionTypes";
import { RootStoreType } from "../Store/store";

interface IFetchData {
  data: Array<ContactType>;
  loading: boolean;
  errorMsg: string;
}

export const useFetchData = (): IFetchData => {
  const dispatch = useDispatch();
  const { data, loading, errorMsg } = useSelector(
    (state: RootStoreType) => state.contacts
  );

  useEffect(() => {
    dispatch(GetData());
  }, []);

  return {
    data,
    loading,
    errorMsg,
  };
};
