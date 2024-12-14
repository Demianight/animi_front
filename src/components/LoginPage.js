import React, { useState } from "react";
import "../App.css";
import { mockApiRequest } from "../services/apiService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, password };
    setLoading(true);
    setError("");

    try {
      setLoading(true);
      const response = await mockApiRequest("/login", payload);
      console.log("Ответ сервера:", response);
      alert(response.message);
    } catch (error) {
      console.error("Ошибка:", error.message || "Произошла ошибка");
      setError(error.message || "Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="title">Вход в Барс Мэи</h1>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default LoginPage;
