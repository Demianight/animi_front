import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalAccount from "./components/PersonalAccount";
import Schedule from "./components/Schedule";

const App = () => {
  // Надо добавить раутинг
  return (
    <div className="container">
      <Header />
      {/* <LoginPage /> */}
      {/* <PersonalAccount /> */}
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;
