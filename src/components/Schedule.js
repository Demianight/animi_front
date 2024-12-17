import React, { useEffect, useState } from "react";
import { get } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const periods = [
    "Первая пара",
    "Вторая пара",
    "Третья пара",
    "Четвертая пара",
    "Пятая пара",
  ];

  // State to hold the fetched schedule data
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    const fetchSchedule = async () => {
      try {
        const response = await get("/halls");
        const fetchedSchedule = response.data;

        // Transform the fetched data into the format you need
        const transformedSchedule = fetchedSchedule.map((lecture) => {
          const scheduleDate = new Date(lecture.schedule);
          const period = getPeriodForTime(scheduleDate);

          return {
            id: lecture.id.toString(),
            subject: lecture.subject,
            time: `${scheduleDate.getHours()}:${String(
              scheduleDate.getMinutes()
            ).padStart(2, "0")}`,
            period,
            hall: "Не указано", // You can adjust the hall field if needed
          };
        });

        setSchedule(transformedSchedule);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  // Function to determine the period based on time
  const getPeriodForTime = (time) => {
    const hours = time.getHours();

    if (hours >= 8 && hours < 10) return "Первая пара";
    if (hours >= 10 && hours < 12) return "Вторая пара";
    if (hours >= 12 && hours < 14) return "Третья пара";
    if (hours >= 14 && hours < 16) return "Четвертая пара";
    if (hours >= 16 && hours < 18) return "Пятая пара";
    return "Неизвестное время";
  };

  const lecturesByPeriod = periods.reduce((acc, period) => {
    acc[period] = schedule.filter((lecture) => lecture.period === period);
    return acc;
  }, {});

  const handleLectureClick = (lecture) => {
    navigate(`/halls/${lecture.id}`);
  };

  if (schedule.length === 0) {
    return <p>Нет лекций</p>;
  }

  return (
    <div className="schedule">
      <h1>Расписание лекций</h1>
      <div className="schedule-container">
        {periods.map((period) => (
          <div key={period} className="schedule-period">
            {lecturesByPeriod[period].length > 0 ? (
              lecturesByPeriod[period].map((lecture) => (
                <div
                  key={lecture.id}
                  className="schedule-item"
                  onClick={() => handleLectureClick(lecture)}
                  style={{ cursor: "pointer" }}
                >
                  <h2 className="period">{period}</h2>
                  <div className="schedule-time">{lecture.time}</div>
                  <div className="schedule-subject">{lecture.subject}</div>
                  <div className="schedule-hall">{lecture.hall}</div>
                </div>
              ))
            ) : (
              <div className="schedule-item">
                <h2 className="period">{period}</h2>
                <div className="schedule-subject">Нет лекций</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
