import { SET_COUNTRY_OPTIONS } from "../actions/action";

interface RootState {
  addressData: any;
  userData: any;
  countryOptions: string[];
}

const initialState: RootState = {
  countryOptions: [],
  addressData: undefined,
  userData: undefined,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNTRY_OPTIONS:
      return {
        ...state,
        countryOptions: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
