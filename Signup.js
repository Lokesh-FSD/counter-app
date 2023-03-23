import { useState } from "react";
import { auth } from "../components/firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [email, updateEmailText] = useState("");
  const [password, updatePasswordText] = useState("");
  const [confirmPassword, updateConfirmPasswordField] = useState("");

  const history = useHistory();

  async function handleRegistration() {
    if (password === confirmPassword) {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("UserData", user, user.refreshToken);
      localStorage.setItem("userToken", user.refreshToken);
      history.push("/");
    } else {
      alert("Password didn't Match");
    }
  }
  return (
    <div className="signup-form">
      <Link to="/login">
        <button className="Back_login">--- Back to login</button>
      </Link>
      <h1 className="signup-title1">
        Welcome !! to Easy Rent ,Please Signup to Continue
      </h1>
      <div className="form m-auto ">
        <h2 className="signup-title">Signup now</h2>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => updateEmailText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => updatePasswordText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => updateConfirmPasswordField(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="signup-btn" onClick={() => handleRegistration()}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
