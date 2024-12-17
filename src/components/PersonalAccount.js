import React, { useState, useEffect } from "react";
import "../App.css";
import { del, get } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const PersonalAccount = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      get("/users/me")
        .then((response) => {
          const data = response.data;
          setUserData(data);
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            navigate("/login");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!userData || !userData.seats || userData.seats.length === 0) {
    return <div className="container">Нет забронированных мест</div>;
  }
  const Deletseat = (seat) => {
    del(`/seats/${seat.id}/cancel_booking`).then((response) => {
      if (response.status === 204) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="container">
      <h1>Ваши места</h1>
      {userData.seats.map((seat, index) => (
        <div className="card" key={index}>
          <div className="row">
            <span>Ряд: {seat.row + 1 || "Не указан"}</span>
            <span> Место: {seat.column + 1 || "Не указано"}</span>
          </div>
          <button type="button" onClick={() => Deletseat(seat)}>
            Отменить
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonalAccount;
