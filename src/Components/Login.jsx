import React from "react";


const Login = () => {
  return (


<div className="login">
  <div className="color-gradient-login">
    <div className="container container-login">
      <div className="center-forget-icons">
        <img
          className="forget-icons"
          alt="lock icon"
          src="./images/login-icon.png"
        />
      </div>
      <div className="heading">Login</div>
      <form action="" className="form-login">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Email"
          />
          <label htmlfor="name">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Password"
          />
          <label htmlfor="name">Password</label>
        </div>
        <span className="agreement">Or Enter Your Access key </span>
        {/* <input class="login-button" type="submit" defaultValue="Sign In" /> */}
        <a href="/" className="nav-link ">
          <button type="button" className="button">
            Log in
          </button>
        </a>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Access Key Here"
          />
          <label htmlfor="name">Enter Your Access Key Here</label>
        </div>
        <div className="form-container-login">
          <span className="forgot-password">
            <a href="/forget">Forgot Password?</a>
          </span>
          <span className="create-account">
            <a href="/register">Create An Account</a>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
export default Login;