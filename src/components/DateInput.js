import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import '../css/DateInput.css';
import "react-datepicker/dist/react-datepicker.css";

function range(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
}

const DateInput = (props) => {
  const { date, changeDate } = props;
  const [startDate, setStartDate] = useState(date);
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setStartDate(date); // Update startDate when date prop changes
  }, [date]); // Trigger useEffect when date prop changes

  const handleDateChange = (selectedDate) => {
    setStartDate(selectedDate);
    changeDate(selectedDate);
  };

  return (
    <div style={{ width: "300px", display: "inline-block" }}>
      <DatePicker
      showIcon
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
        selected={new Date(startDate)}
                onChange={handleDateChange}
      />
    </div>
  );
};

export default DateInput;
