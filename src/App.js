import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // Надо добавить раутинг
  return (
    <div className="container">
      <Header />
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;
