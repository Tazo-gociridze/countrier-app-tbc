import { FC } from "react"
import Title from "./Description/title";
import SecondTitle from "./Description/SecondTitle";
import Paragraph from "./Description/Paragraph";
import Button from "../../utils/Button/Button";

const Description: FC = () => {
  return (
    <div className="about__section-description">
            <Title/>
            <SecondTitle/>
            <Paragraph/>
            <Button>Read more</Button>
    </div>
  )
};

export default Description;
