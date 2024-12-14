import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalAccount from "./components/PersonalAccount";
import Schedule from "./components/Schedule";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  // Надо добавить раутинг
  return (
      <div className="container">
        <Header />
        {/* <LoginPage /> */}
        <Routes>
          <Route path="/personalaccount" element={<PersonalAccount />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
