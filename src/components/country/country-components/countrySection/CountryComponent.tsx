import { useReducer } from "react";
import Wrapper from "../Wrapper";
import {CountryState,countryReducer,} from "@components/country/Reducer/countryReducer";
import { countryCharacteristics } from "@components/country/Reducer/state";
import SortBtns from "./SortBtns";
import CountryAddForm from "./CountryAddForm";

const initialState: CountryState = {
  countries: [...countryCharacteristics],
};

const CountryComponent = () => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  const handleDeleteCountry = (index: number) => {
    dispatch({ type: "DELETE_COUNTRY", payload: { index } });
  };

  const handleReviveCountry = (index: number) => {
    dispatch({ type: "REVIVE_COUNTRY", payload: { index } });
  };

  return (
    <>
      <SortBtns dispatch={dispatch} />
      <div className="country__section">
        <CountryAddForm dispatch={dispatch} />
        {state.countries.map((obj, index) => (
          <Wrapper
            key={obj.id}
            flagType={obj.flagName}
            countryIndex={index}
            countryState={state.countries}
            dispatch={dispatch}
            el={obj}
            onDelete={() => handleDeleteCountry(index)}
            onRevive={() => handleReviveCountry(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CountryComponent;
