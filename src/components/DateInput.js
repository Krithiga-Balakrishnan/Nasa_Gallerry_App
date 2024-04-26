// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const DateInput = props => {
//     const [startDate, setStartDate] = useState(new Date());

//     const handleDateChange = date => {
//         setStartDate(date);
//         props.changeDate(date);
//       };

// //   return (
// //     <div>
// //       Select a Date:
// //       <DatePicker
// //         selected={startDate}
// //         onChange={date => {
// //           setStartDate(date);
// //           props.changeDate(date);
// //         }}
// //       />
// //     </div>
// //   );
// return (
//     <div>
//       Select a Date:
//       <DatePicker
//         selected={startDate}
//         onChange={handleDateChange}
//       />
//     </div>
//   );
// };

// export default DateInput;

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DateInput = props => {
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = date => {
        setStartDate(date);
        props.changeDate(date);
    };

    return (
        <div className="input-container">
        <div className="date-picker-container">
            <label htmlFor="datePicker">Select a Date:</label>
            <DatePicker
                id="datePicker"
                selected={startDate}
                onChange={handleDateChange}
            />
        </div>
        <div className="submit-button-container">
            <input
                type="submit"
                value="Get Media"
                className="submit-button"
                onClick={() => console.log("Submit clicked")} // Add your logic here for the submit action
            />
        </div>
    </div>
    );
};
export default DateInput;
