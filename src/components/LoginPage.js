import React, { useState } from "react";
import "../App.css";
import { post } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      registerUser().then(() => {
        setTimeout(() => {
          loginUser();
        }, 2000);
      });
    } catch (err) {
      setError("Неправильный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async () => {
    const loginUrl = "/users/login";

    post(loginUrl, { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.status !== 200) {
          setError("Неправильный логин или пароль");
          return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("token", response.data);
        window.dispatchEvent(new Event("storage"));

        navigate("/schedule");
      })
      .catch((err) => {
        return;
      });
  };

  const registerUser = async () => {
    const registerUrl = "/users/";
    const userData = { username, password };

    post(registerUrl, userData)
      .then((response) => {
        if (response.status !== 201) {
          setError("Неправильный логин или пароль");
        }
        localStorage.setItem("user_id", response.data.id);
      })
      .catch((err) => {
        setError("Неправильный логин или пароль");
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="title">Вход в Барс Мэи</h1>
      <div className="field">
        <input
          className="field__input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder=" "
          required
        />
        <label className="field__label" htmlFor="username">
          Логин
        </label>
      </div>
      <div className="field field--spaced">
        <input
          className="field__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          required
        />
        <label className="field__label" htmlFor="password">
          Пароль
        </label>
      </div>
      <div className="button-wrapper">
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Загрузка..." : "Войти"}
        </button>
        {error && <span className="error-message">{error}</span>}
      </div>
    </form>
  );
};

export default LoginForm;
