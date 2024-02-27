// actions/actions.ts
import { Dispatch, AnyAction } from "redux";

export const SET_COUNTRY_OPTIONS = "SET_COUNTRY_OPTIONS";

export const setCountryOptions = (options: string[]) => ({
  type: SET_COUNTRY_OPTIONS,
  payload: options,
});

export const fetchCountryOptions =
  () => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
      const countryOptions = countries.map((country: any) => country.name);
      dispatch(setCountryOptions(countryOptions));
    } catch (error) {
      console.error("Error fetching country options:", error);
    }
  };
