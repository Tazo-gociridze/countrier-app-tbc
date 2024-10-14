import { CountryAction } from "@components/country/Reducer/countryReducer";
import { CountryData } from "@components/country/static/Interfaces";
import { Dispatch, FC, useState } from "react";

export interface DispatchType{
    dispatch: Dispatch<CountryAction>
}

const CountryAddForm: FC<DispatchType> = ({dispatch}) => {

  const [newCountryName, setNewCountryName] = useState("");
  const [newCountryCapital, setNewCountryCapital] = useState("");
  const [newCountryPopulation, setNewCountryPopulation] = useState("");

    const handleAddCountry = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newCountry: CountryData = {
          id: String(Math.random()),
          flagName: "newCountry",
          name: newCountryName,
          capital: newCountryCapital,
          population: newCountryPopulation || "0",
          likes: 0,
        };
        dispatch({ type: "ADD_COUNTRY", payload: newCountry });
        setNewCountryName("");
        setNewCountryCapital("");
        setNewCountryPopulation("");
      };

  return (
    <form onSubmit={handleAddCountry} action="">
            <input
              type="text"
              value={newCountryName}
              onChange={(e) => setNewCountryName(e.target.value)}
              placeholder="country name"
            />
            <input
              type="text"
              value={newCountryCapital}
              onChange={(e) => setNewCountryCapital(e.target.value)}
              placeholder="capital"
            />
            <input
              type="number"
              value={newCountryPopulation}
              onChange={(e) => setNewCountryPopulation(e.target.value)}
              placeholder="population"
            />
            <button>add country</button>
    </form>
  )
};

export default CountryAddForm; 
