import { FC} from "react";
import CountryComponent from "./country-components/countrySection/CountryComponent";


const CountrySection: FC = () => {
  return (
    <>
      <section>      
        <CountryComponent/>
      </section>
    </>
  );
};

export default CountrySection;
