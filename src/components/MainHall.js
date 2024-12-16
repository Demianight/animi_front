import React, { useState, useEffect } from "react";
import { del, get, post } from "../services/apiService";
import { useParams } from "react-router-dom";
import HallNavigation from "./HallNavigation";

function MainHall() {
  const { hall_id } = useParams();
  const [hall, setHall] = useState(null);
  const [check, setCheck] = useState(false);
  const [status, setStatus] = useState(false);

  const fetchData = async () => {
    try {
      const response = await get(`/halls/${hall_id}`);
      if (response.status !== 200) throw new Error("Failed to fetch data");
      setHall(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (hall_id) {
      fetchData();
    }
  }, [hall_id]);

  const Getchaeck = (key) => {
    setCheck(key);
  };

  const Addseat = (key) => {
    const response = post(`/seats/${key.seat.id}/book`);
    if (response.status === 201) {
      setStatus(true);
    }
  };

  const Deletseat = (key) => {
    const response = del(`/seats/${key.seat.id}/cancel_booking`);
    if (response.status === 204) {
      setStatus(false);
    }
  };
  if (!hall) {
    return <div>Loading...</div>;
  }
  const user = {
    name: "2281488",
    id: Number(localStorage.getItem("user_id")),
  };
  return (
    <HallNavigation
      hall={hall}
      Addseat={Addseat}
      Deletseat={Deletseat}
      Getchaeck={Getchaeck}
      check={check}
      user={user}
      status={status}
    />
  );
}

export default MainHall;
