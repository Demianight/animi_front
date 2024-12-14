import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalAccount from "./components/PersonalAccount";

const App = () => {
  // Надо добавить раутинг
  return (
    <div className="container">
      <Header />
      {/* <LoginPage /> */}
      <PersonalAccount />
      <Footer />
    </div>
  );
};

export default App;
