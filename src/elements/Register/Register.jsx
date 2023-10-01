import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const registerHandle = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkBox = e.target.check.checked;
    if (password.length < 6) {
      return setErrorMessage("Password must be at least length 6");
    } else if (!/[A-Z]/.test(password)) {
      return setErrorMessage("Write at least one uppercase letter.");
    } else if (!checkBox) {
      return setErrorMessage("Pls! Read our term and condition and accept");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setErrorMessage("User Created Successfully");
        updateProfile(result.user, {
          displayName: name,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
        sendEmailVerification(result.user)
          .then(() => {
            alert("verification mail sent..");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(result);
      })
      .catch((error) => {
        // console.log(error);
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
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
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
        <input type="checkbox" name="check" className="mr-2" />
        <label htmlFor="">
          <a href="#">Accept out terms</a>
        </label>
        <br />
        <input
          className="py-2 px-3 border mt-3 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      <Link to="/login">Already have an account? Pls Login here.</Link>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Register;
