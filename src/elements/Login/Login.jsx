import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const loginHandle = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.displayName;
        console.log(user);
        setErrorMessage("User Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something is wrong");
      });
    console.log(email, password);
  };
  return (
    <div>
      <h2 className="text-3xl mb-4">Login Form</h2>

      <form onSubmit={loginHandle}>
        <input
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
      <p>{errorMessage}</p>
    </div>
  );
};

export default Login;
