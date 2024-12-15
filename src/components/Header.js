import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="h1">Заними!</h1>
      <nav>
        <Link to = "/personal_account"> Личный кабинет </Link>
        <Link to = "/schedule"> Расписание </Link>
      </nav>
    </header>
  );
};

export default Header;
