import { FC } from "react"
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { DispatchType } from "./CountryAddForm";

const SortBtns: FC<DispatchType> = ({dispatch}) => {
    const handleSortUp = () => {
        dispatch({ type: "SORT_UP" });
      };
    
      const handleSortDown = () => {
        dispatch({ type: "SORT_DOWN" });
      };

  return (
    <div>
        <button onClick={handleSortUp} className="sort-btn">
          sort <FaSortUp />
        </button>
        <button onClick={handleSortDown} className="sort-btn">
          sort <FaSortDown />
        </button>
    </div>
  )
};

export default SortBtns;
