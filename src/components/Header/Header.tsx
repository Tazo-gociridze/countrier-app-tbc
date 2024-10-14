import { PiSignInBold } from "react-icons/pi";
import { FC } from "react";
import Nav from "./header-components/Nav";

const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="restrictive-container">
          <div className="logo__div"></div>
             <Nav/>
          <div className="sign-in-btn">
            <PiSignInBold />
          </div>
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
