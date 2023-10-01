import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef("");
  const loginHandle = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setErrorMessage("User Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something is wrong");
      });
    console.log(email, password);
  };
  const handleForgotPass = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        alert("Mail sent successfully!");
      })
      .catch((error) => {
        alert("Mail Not Sent!");
      });
    // console.log(email);
  };
  return (
    <div>
      <h2 className="text-3xl mb-4">Login Form</h2>

      <form onSubmit={loginHandle}>
        <input
          ref={emailRef}
          className="border border-gray-700 mb-3"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="border border-gray-700"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <input
          className="py-2 px-3 border mt-3 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      <p onClick={handleForgotPass} className="cursor-pointer">
        Forgot your password?
      </p>
      <Link to="/register">New Here? Pls! Register First.</Link>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Login;
