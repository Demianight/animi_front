import React, { useState } from "react";
import "../App.css";
import { mockApiRequest } from "../services/apiService";

const PersonalAccount = () => {
  const bookings = [
    {
      subject: "Математический анализ",
      timeSlot: "Вторая пара",
      date: "14 Декабря, 11:10",
      row: 10,
      seat: 4,
    },
    {
      subject: "Физика",
      timeSlot: "Третья пара",
      date: "14 Декабря, 13:45",
      row: 3,
      seat: 14,
    },
  ];

  return (
    <div className="container">
      <h1>Ваши места</h1>
      {bookings.map((booking, index) => (
        <div className="card" key={index}>
          <h2>{booking.subject}</h2>
          <div className="info">
            {booking.timeSlot}, {booking.date}
          </div>
          <div className="row">
            <span>Ряд: {booking.row}</span>
            <span> Место: {booking.seat}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalAccount;
