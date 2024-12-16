import React, { useState, useEffect } from "react";
import "../App.css";
import { get } from "../services/apiService";

const PersonalAccount = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch data from /users/me
    const fetchData = async () => {
      try {
        const response = await get("/users/me");
        if (!response.status === 200)
          throw new Error("Failed to fetch user data");
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container">Загрузка...</div>; // Loading indicator
  }

  if (!userData || !userData.seats || userData.seats.length === 0) {
    return <div className="container">Нет забронированных мест</div>; // No bookings
  }

  return (
    <div className="container">
      <h1>Ваши места</h1>
      {userData.seats.map((seat, index) => (
        <div className="card" key={index}>
          <h2>Блок: {seat.block_id || "Не указан"}</h2>
          <div className="info">Статус: {seat.status || "Не указан"}</div>
          <div className="row">
            <span>Ряд: {seat.row || "Не указан"}</span>
            <span> Место: {seat.column || "Не указано"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalAccount;
