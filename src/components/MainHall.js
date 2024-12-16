import React, { useState, useEffect } from "react";
import { get } from "../services/apiService";
import * as ReactDOMClient from "react-dom/client";
import { useParams } from "react-router-dom";
import App from "./HallNavigation";

function MainHall() {
  const { id } = useParams();
  console.log(id);
  const [hall, setHall] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`/halls/${id}`);
        if (!response.status === 200) throw new Error("Failed to fetch data");
        const data = response.data;
        setHall(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  const [hall1, setHall1] = useState({
    name: "Б-200",
    schedule: "2024-12-13T20:18:33.132253",
    id: 1,
    blocks: [
      {
        number: 1,
        rows: 14,
        columns: 6,
        id: 1,
        hall_id: 1,
        seats: [],
      },
      {
        number: 2,
        rows: 13,
        columns: 8,
        id: 2,
        hall_id: 1,
        seats: [],
      },
      {
        number: 3,
        rows: 13,
        columns: 8,
        id: 3,
        hall_id: 1,
        seats: [],
      },
      {
        number: 4,
        rows: 14,
        columns: 6,
        id: 4,
        hall_id: 1,
        seats: [],
      },
    ],
  });
  const user = {
    name: "I",
    id: 2,
  };
  const [check, setCheck] = useState(false);
  const Getchaeck = (key) => {
    setCheck(key);
  };
  const Addseat = (key) => {
    const newHall = { ...hall1 };
    newHall.blocks[key.id].seats.push(key.seat);
    setHall1(newHall);
  };
  const Deletseat = (key) => {
    const newHall = { ...hall1 };
    const newseat = newHall.blocks[key.id].seats.filter(
      (el) => el.booked_by_id != user.id
    );
    newHall.blocks[key.id].seats = [...newseat];
    setHall1(newHall);
  };
  return (
    <App
      hall={hall}
      Addseat={Addseat}
      Deletseat={Deletseat}
      Getchaeck={Getchaeck}
      check={check}
      user={user}
    />
  );
}

export default MainHall;
