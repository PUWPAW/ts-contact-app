import { FilterType, FILTER_ACTIONS } from "../actions/ActionTypes";
import { IFilterState } from "./reducerTypes";

const defaultState: IFilterState = {
  nameValue: "",
  natValue: "",
  genderValue: "",
};

const FilterReducer = (
  state = defaultState,
  action: FilterType
): IFilterState => {
  switch (action.type) {
    case FILTER_ACTIONS.FILTER_NAME:
      return {
        ...state,
        nameValue: action.payload,
      };
    case FILTER_ACTIONS.FILTER_NAT:
      return {
        ...state,
        natValue: action.payload,
      };
    case FILTER_ACTIONS.FILTER_GENDER:
      return {
        ...state,
        genderValue: action.payload,
      };
    case FILTER_ACTIONS.FILTER_CLEAR:
      return {
        nameValue: "",
        natValue: "",
        genderValue: "",
      };
    default:
      return state;
  }
};

export default FilterReducer;
