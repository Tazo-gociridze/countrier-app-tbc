import { FC } from "react"

const Img: FC<{flagType:string}> = ({flagType, ...props}) => {
  return (
    <div className={"flag-img" + ' ' + flagType}></div>
  )
};

export default Img;
