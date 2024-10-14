import { FC } from "react";
import { IoIosConstruct } from "react-icons/io";
import Title from "./Title";
import Description from "./Description";

const Text: FC = () => {
  return (
    <div>
      <div className="hero__div-text">
        <IoIosConstruct className="hero__div-text-icon" />
        <Title/>
        <Description/>
        <button className="hero__section-btn">Find out more</button>
      </div>
    </div>
  );
};

export default Text;
