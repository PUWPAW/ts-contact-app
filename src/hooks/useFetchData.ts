/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IContact } from "../Store/actions/ActionTypes";
import { RootStoreType } from "../Store/store";
import { useAction } from "./useAction";

interface IFetchData {
  data: Array<IContact>;
  loading: boolean;
  errorMsg: string;
}

export const useFetchData = (): IFetchData => {
  const { GetData } = useAction();
  const { data, loading, errorMsg } = useSelector(
    (state: RootStoreType) => state.contacts
  );

  useEffect(() => {
    GetData(50, 5);
  }, []);

  return {
    data,
    loading,
    errorMsg,
  };
};
