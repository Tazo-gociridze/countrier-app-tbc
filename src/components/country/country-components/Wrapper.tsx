import { FC } from "react";
import Img from "./Img";
import { CountryData } from "../static/Interfaces";
import { Link } from "react-router-dom";
import Characteristics from "./Characteristics";
import { CountryAction } from "../Reducer/countryReducer";


interface WrapperProps {
  flagType: string;
  el: CountryData;
  countryIndex: number;
  countryState: CountryData[];
  dispatch: React.Dispatch<CountryAction>; 
  onDelete: () => void;
  onRevive: () => void;
}

const Wrapper: FC<WrapperProps> = (props) => {
  
  const {flagType, el, countryIndex, countryState, dispatch, onDelete, onRevive} = props
  const id = el.id;

  return (
    <div className={`country__section-wrapper ${el.isDeleted ? 'countryDeleted' : ''}`}> 
      <Link to={`/country/${id}`} >
        <Img flagType={flagType} />
      </Link>
      <Characteristics 
        el={el} 
        index={countryIndex} 
        countryState={countryState} 
        dispatch={dispatch} 
      />
     <button onClick={onDelete} className="delete-btn">Delete</button> 
      {el.isDeleted ? (
        <button onClick={onRevive} className="revive-btn">revive</button>  
      ) : (
        <></>  
      )}
    </div>

    
  );
};

export default Wrapper;