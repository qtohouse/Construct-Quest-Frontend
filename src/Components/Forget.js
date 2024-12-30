
import React from "react";


const Forget = () => {
  return (


<div className="forget-password">
  <div className="color-gradient-forget">
    <div className="container container-forget-password">
      <div className="center-forget-icons">
        <img
          className="forget-icons"
          alt="lock icon"
          src="./images/lock-icon.png"
        />
      </div>
      <div className="heading">Forgot Password</div>
      <form action="" className="form-forget">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Email"
          />
          <label htmlfor="name">Email</label>
        </div>
        <span className="reset-password">
          <p>Enter your email we'll send you a link to reset you password</p>
        </span>
        {/* <input class="login-button" type="submit" defaultValue="Sign In" /> */}
        <a href="/" className="nav-link ">
          <button type="button" className="button">
            Submit
          </button>
        </a>
        <div className="form-container">
          <span className="back-to-login">
            <a href="/login">
              <img
                className="less-than-icons"
                alt="lock icon"
                src="./images/less than.png"
              />
              Back to login
            </a>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
export default Forget;