import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    // Listen for storage events (for cross-tab login updates)
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  const clearStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className="header">
      <h1 className="h1">
        <Link to="/schedule">Заними!</Link>
      </h1>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/personal_account">Личный кабинет, {username}</Link>
            <Link to="/login" onClick={clearStorage} className="clear-button">
              Выход
            </Link>
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
