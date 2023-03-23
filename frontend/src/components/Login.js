import { useState } from "react";
import { auth } from "../components/firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, updateEmailText] = useState("");
  const [password, updatePasswordText] = useState("");

  const history = useHistory();

  async function handleLogin() {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
      localStorage.setItem("userToken", user.refreshToken);
      history.push("/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <div className="signup-form">
      <h1 className="signup-title1">
        Welcome !! to E-Shopping Cart ,Please Login/Signup to Continue
      </h1>
      <div className="form m-auto ">
        <h2 className="signup-title">Login now</h2>
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

        <div className="form-check form-group">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Agree to terms and conditions
          </label>
        </div>
        <div className="form-group">
          <button className="signup-btn" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
        <div className="form-group">
          <p>
            Didn't have an Accouunt..
            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
