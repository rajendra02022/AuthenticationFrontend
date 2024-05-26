// import React, { useState } from "react";
// import "./LoginSignup.css";

// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";
// const LoginSignup = () => {
//   const contextPath = "http://localhost:8080";
//   const [action, setAction] = useState("Sign Up");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   const [successMesssage, setSuccessMesssage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleActionChange = (newAction) => {
//     if (newAction === action) {
//       handleFormSubmit();
//     } else {
//       setAction(newAction);
//       // Clear input fields when toggling between actions
//       setName("");
//       setEmail("");
//       setPassword("");
//       setEmailErrorMessage("");
//       setSuccessMesssage("");
//       setStatus("");
//     }
//   };

//   const handleFormSubmit = () => {
//     // Prepare the data to be sent to the backend
//     const user = { name, email, password };

//     // Perform API call based on the current action (Sign Up or Login)
//     if (action === "Sign Up") {
//       // Perform sign-up API call
//       fetch("http://localhost:8080/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       })
//         .then((response) => {
//           if (response.ok) {
//             // console.log(response.text());
//             setAction("Login");
//             console.log("inside ok");
//             setStatus("success");
//             return response.text();
//           } else {
//             // console.log(response.text());
//             console.log("inside else");
//             setStatus("error");
//             return response.text();
//           }
//         })
//         .then((data) => {
//           console.log("inside data");
//           if (status === "success") {
//             setSuccessMesssage(data);
//             setEmailErrorMessage("");
//           } else {
//             if (status === "error") {
//               setSuccessMesssage("");
//               setEmailErrorMessage(data);
//             }
//           }

//           console.log(emailErrorMessage);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else if (action === "Login") {
//       // Perform login API call
//       fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       })
//         .then((response) => {
//           if (response.ok) {
//             console.log(response.text());
//             return response.text();
//           } else {
//             console.log("error");
//             throw new Error("Failed to sign up");
//           }
//         })
//         .catch((error) => {
//           // Handle error
//         });
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         {successMesssage && <div>{successMesssage}</div>}
//         <div className="inputs">
//           <div className="input">
//             <img src={user_icon} alt="Username" />
//             <input
//               type="text"
//               placeholder="Username"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="input">
//             <img src={email_icon} alt="Email" />
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           {emailErrorMessage && <div>{emailErrorMessage}</div>}
//           <div className="input">
//             <img src={password_icon} alt="Password" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="forgot-password">
//           Forgot Password <span>Click Here!</span>
//         </div>
//         <div className="submit-container">
//           <div
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => handleActionChange("Sign Up")}
//           >
//             Sign Up
//           </div>
//           <div
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={() => handleActionChange("Login")}
//           >
//             Login
//           </div>
//         </div>
//         {/* <div className="submit-button" onClick={handleFormSubmit}>{action}</div> */}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
