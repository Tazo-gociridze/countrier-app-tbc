import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import SingleCountry from "@components/country/country-components/SingleCountry";


function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/country" element={<Country/>}></Route>
              <Route path="/country/:id" element={<SingleCountry/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Route>
       </Routes>
    </BrowserRouter>
       
  );
}

export default App;
