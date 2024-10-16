import { CountryAction } from "@components/country/Reducer/countryReducer";
import { CountryData } from "@components/country/static/Interfaces";
import { Dispatch, FC, useState } from "react";

export interface DispatchType {
  dispatch: Dispatch<CountryAction>;
}

const CountryAddForm: FC<DispatchType> = ({ dispatch }) => {
  const [newCountryName, setNewCountryName] = useState("");
  const [newCountryCapital, setNewCountryCapital] = useState("");
  const [newCountryPopulation, setNewCountryPopulation] = useState("");

  const [nameError, setNameError] = useState("");
  const [capitalError, setCapitalError] = useState("");
  const [populationError, setPopulationError] = useState("");
  const handleAddCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCountry: CountryData = {
      id: String(Math.random()),
      flagName: "newCountry",
      name: newCountryName,
      capital: newCountryCapital,
      population: newCountryPopulation || "0",
      likes: 0,
    };

    if (
      !nameError &&
      newCountryName.length !== 0 &&
      !capitalError &&
      newCountryCapital.length !== 0 &&
      !populationError &&
      newCountryPopulation.length !== 0
    ) {
      dispatch({ type: "ADD_COUNTRY", payload: newCountry });
      setNewCountryName("");
      setNewCountryCapital("");
      setNewCountryPopulation("");
    }
  };

  const countryNameTargetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCountryName(e.target.value);
    setNameError(e.target.value.length > 8 ? "the most length name" : "");
  };

  const countryCapitalTargetHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCountryCapital(e.target.value);
    setCapitalError(e.target.value.length > 8 ? "the most length name" : "");
  };

  const countryPopulationTargetHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCountryPopulation(e.target.value);
    setPopulationError(e.target.value.length > 8 ? "the most length name" : "");
  };

  return (
    <form className="create-country-form" onSubmit={handleAddCountry} action="">
      {nameError && <p>max limit of symbols - 8</p>}
      <input
        type="text"
        value={newCountryName}
        onChange={countryNameTargetHandler}
        placeholder="country name"
      />
      {capitalError && <p>min limit of symbols - 8</p>}
      <input
        type="text"
        value={newCountryCapital}
        onChange={countryCapitalTargetHandler}
        placeholder="capital"
      />
      {populationError && <p>max limit of symbols - 8</p>}
      <input
        type="number"
        value={newCountryPopulation}
        onChange={countryPopulationTargetHandler}
        placeholder="population"
      />
      <button>add country</button>
    </form>
  );
};

export default CountryAddForm;
