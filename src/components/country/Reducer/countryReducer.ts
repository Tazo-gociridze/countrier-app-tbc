import { CountryData } from "../static/Interfaces";

export interface CountryState {
  countries: CountryData[];
}

export interface CountryAction {
  type:
    | "SORT_UP"
    | "SORT_DOWN"
    | "UPDATE_COUNTRIES"
    | "INCREMENT_LIKE"
    | "ADD_COUNTRY"
    | "DELETE_COUNTRY"
    | "REVIVE_COUNTRY";
  payload?: { index: number; countries?: CountryData[] } | CountryData;
}

export const countryReducer = (
  state: CountryState,
  action: CountryAction
): CountryState => {

  switch (action.type) {

    case 'SORT_UP':
      return {
        ...state,
        countries: [
          ...state.countries.filter((country) => !country.isDeleted).sort((a, b) => (b.likes || 0) - (a.likes || 0)),
          ...state.countries.filter((country) => country.isDeleted)
        ]
      };

    case 'SORT_DOWN':
      return {
        ...state,
        countries: [
          ...state.countries.filter((country) => !country.isDeleted).sort((a, b) => (a.likes || 0) - (b.likes || 0)),
          ...state.countries.filter((country) => country.isDeleted)
        ]
      };

    case 'UPDATE_COUNTRIES':
      return { ...state, countries: action.payload?.countries || state.countries };

    case 'INCREMENT_LIKE':
      return {
        ...state,
        countries: state.countries.map((country, index) =>
          index === action.payload?.index ? { ...country, likes: country.likes + 1 } : country
        )
      };


    case "ADD_COUNTRY":
      return {
        ...state,
        countries: [action.payload as CountryData, ...state.countries], 
      };


    case "DELETE_COUNTRY":
      const deletedCountries = [...state.countries];
        //@ts-ignore
      deletedCountries[action.payload?.index].isDeleted = true;

      const deletedCountry = deletedCountries.splice(
        //@ts-ignore
        action.payload?.index,
        1
      )[0];
      deletedCountries.push(deletedCountry);

      return {
        ...state,
        countries: deletedCountries,
      };



      case 'REVIVE_COUNTRY':
        const revivedCountries = [...state.countries];
        //@ts-ignorets-ignore
        const revivedCountry = revivedCountries.splice(action.payload?.index, 1)[0];
        revivedCountry.isDeleted = false;
        revivedCountries.unshift(revivedCountry);
  
        return {
          ...state,
          countries: revivedCountries,
        };


    default:
      return state;
  }
};
