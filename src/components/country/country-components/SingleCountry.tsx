import  { FC } from "react";
import { useParams } from "react-router-dom";
import { CountryData } from "../static/Interfaces";
import { countryCharacteristics } from "../Reducer/state";

const SingleCountry: FC = () => {
  const { id } = useParams<{ id: string }>();

  const countryInfo: CountryData | undefined = countryCharacteristics.find(
    (country) => country.id.toString() === id
  );

  if (!countryInfo) {
    return <p>Страна не найдена</p>;
  }

  return (
    <div>
      <span>{countryInfo.name}</span>
      <br />
      <span>{countryInfo.capital}</span>
      <br />
      <span>{countryInfo.population}</span>
      <br />
    </div>
  );
};

export default SingleCountry;
