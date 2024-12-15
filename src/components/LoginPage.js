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
      const url = "/users/"; // Relative endpoint
      const data = { username, password };
    
      const response = await post(url, data); // Send POST request using the post function
    
      if (response.status !== 201) {
        throw new Error("Ошибка создания пользователя");
      }
    
      const responseData = response.data;
      alert("Пользователь успешно создан!");
      console.log("Созданный пользователь:", responseData); // Optional: log the response for debugging
    } catch (error) {
      setError(error.message || "Произошла ошибка при создании пользователя");
    } finally {
      setLoading(false);
    }

    try {
      const url = "/users/login";
      const data = { username, password };
    
      const response = await post(url, data); 
    
      if (response.status !== 200) {
        throw new Error("Неверный логин или пароль");
      }
    
      const responseData = response.data;
      
      localStorage.setItem("token", responseData);
        
    } catch (error) {
      setError(error.message || "Произошла ошибка");
    } finally {
      setLoading(false);
    }
    navigate("/Schedule");
  }

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