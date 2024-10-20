import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import SingleCountry from "@components/country/country-components/SingleCountry";
import { FC, useState, createContext, useReducer } from "react";
import { CountryState, countryReducer } from "@components/country/Reducer/countryReducer";

import { countryCharacteristics } from "@components/country/Reducer/state";

export const LanguageContext = createContext({ 
  switchLang: 'en', 
  setSwitchLang: undefined as unknown as (newLang: string) => void,
  dispatch: undefined as unknown as React.Dispatch<any>,
}); 


const App: FC = () => {
  const [switchLang, setSwitchLang] = useState('en');
  const [state, dispatch] = useReducer(countryReducer, { 
    switchLang: switchLang, 
    countries: [...countryCharacteristics] 
  } as CountryState); 

  console.log(state)
  return (
    <BrowserRouter>
      <LanguageContext.Provider  value={{switchLang, setSwitchLang, dispatch}}> 
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route path="/:lang" index element={<Home/>}></Route>
            <Route path="/:lang/about" element={<About/>}></Route>
            <Route path="/:lang/country" element={<Country countriesState={state} switchLangDispatch={dispatch}/>}></Route>
            <Route path="/:lang/country/:id" element={<SingleCountry countriesState={state}/>}></Route>
            <Route path="/:lang/contact" element={<Contact/>}></Route>
          </Route>
        </Routes> 
      </LanguageContext.Provider> 
    </BrowserRouter>
  );
};

export default App;
