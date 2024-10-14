import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Country", path: "/country" },
  { name: "Contact", path: "/contact" },
];

const Nav: FC = () => {
  const location = useLocation(); // Получаем текущий маршрут

  return (
    <div className="navbar">
      {navs.map((item, index) => (
        <Link
          to={item.path}
          className={location.pathname === item.path ? "active-color" : ""}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;