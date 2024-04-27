// import React from "react";
// import { AuthContext } from "../App";
// import Button from 'react-bootstrap/Button';


// export const Login = () => {
//   const { dispatch } = React.useContext(AuthContext);
//   const initialState = {
//     email: "",
//     password: "",
//     isSubmitting: false,
//     errorMessage: null
//   };

//   const [data, setData] = React.useState(initialState);

//   const handleInputChange = event => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     // Basic form validation
//     if (!data.email || !data.password) {
//       setData({
//         ...data,
//         errorMessage: "Please provide both email and password."
//       });
//       return;
//     }
//     setData({
//       ...data,
//       isSubmitting: true,
//       errorMessage: null
//     });
//     fetch("https://nasa-gallery.netlify.app/login", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         username: data.email,
//         password: data.password
//       })
//     })
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("Invalid username or password."); // Server error handling
//       })
//       .then(resJson => {
//         dispatch({
//           type: "LOGIN",
//           payload: resJson
//         });
//       })
//       .catch(error => {
//         setData({
//           ...data,
//           isSubmitting: false,
//           errorMessage: error.message || "Something went wrong."
//         });
//       });
//   };

//   return (
//     <div className="login-container">
//       <div className="card">
//         <div className="container">
//           <form onSubmit={handleFormSubmit}>
//             <h1>Login</h1>

//             <label htmlFor="email">
//               Email Address
//               <input
//                 type="text"
//                 value={data.email}
//                 onChange={handleInputChange}
//                 name="email"
//                 id="email"
//               />
//             </label>

//             <label htmlFor="password">
//               Password
//               <input
//                 type="password"
//                 value={data.password}
//                 onChange={handleInputChange}
//                 name="password"
//                 id="password"
//               />
//             </label>

//             {data.errorMessage && (
//               <span className="form-error">{data.errorMessage}</span>
//             )}

//             <button variant="primary" disabled={data.isSubmitting}>
//               {data.isSubmitting ? "Loading..." : "Login"}
//             </button>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
