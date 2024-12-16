import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalAccount from "./components/PersonalAccount";
import Schedule from "./components/Schedule";
import { Route, Routes, Link } from "react-router-dom";
import MainHall from "./components/MainHall";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/personal_account" element={<PersonalAccount />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/halls/:hall_id" element={<MainHall />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
