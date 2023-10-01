import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const registerHandle = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return setErrorMessage("Password must be at least length 6");
    } else if (!/[A-Z]/.test(password)) {
      return setErrorMessage("Write at least one uppercase letter.");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.displayName;
        console.log(user);
        setErrorMessage("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Already Exist!");
      });
    console.log(email, password);
  };
  return (
    <div>
      <h2 className="text-3xl mb-4">Registration Form</h2>
      <form onSubmit={registerHandle}>
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
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
        />{" "}
        <span onClick={() => setShowPass(!showPass)} className="cursor-pointer">
          {showPass ? "Hide" : "Show"}
        </span>
        <br />
        <input
          className="py-2 px-3 border mt-3 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Register;
