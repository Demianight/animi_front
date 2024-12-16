import React from "react";

function Schedule() {
  const periods = [
    "Первая пара",
    "Вторая пара",
    "Третья пара",
    "Четвертая пара",
    "Пятая пара",
  ];
  const schedule = [
    {
      id: "1",
      group: "А-10-24",
      subject: "Математический анализ",
      time: "09:20 - 10:55",
      period: "Первая пара",
      hall: "Н-202",
    },
    {
      id: "2",
      group: "А-10-24",
      subject: "Физика",
      time: "13:45 - 15:20",
      period: "Третья пара",
      hall: "Б-200",
    },
  ];

  const lecturesByPeriod = periods.reduce((acc, period) => {
    acc[period] = schedule.filter((lecture) => lecture.period === period);
    return acc;
  }, {});

  const handleLectureClick = (lecture) => {
    console.log("Clicked on lecture:", lecture);
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
