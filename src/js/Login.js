import '../css/Login.css'
import React, { useState, useContext } from "react";
import HorizonbgImg from '../images/HorizonAstronomy.mp4';
import { Container, Alert, Row, Col } from 'react-bootstrap';
import GoogleButton from "react-google-button";
import { useUserAuth } from "../auth/UserAuthContext";

function Login({ setCurrentPage }) {
  console.log("setCurrentPage prop:", setCurrentPage);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [repeatPasswordSignup, setRepeatPass] = useState("");
  const { logIn, signUp, googleSignIn } = useUserAuth();
  //  const navigate = useNavigate();

  const [showPasswordMismatchAlert, setShowPasswordMismatchAlert] = useState(false); // State variable for password mismatch alert

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      setCurrentPage('about');
    } catch (err) {
      setError(err.message);
    }
  };

  const [activeTab, setActiveTab] = useState("sign-in");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (passwordSignup !== repeatPasswordSignup) { // corrected variable name
      setShowPasswordMismatchAlert(true); // Show the password mismatch alert
      return;
    }
    try {
      await signUp(emailSignUp, passwordSignup, userName); // Pass userName to signUp
      setCurrentPage('about'); 
        } catch (err) {
      setError(err.message);
    }
  };

  const handleAlertDismiss = () => {
    setError(""); // Clear the error message
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
   setCurrentPage('about');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='login'>
      <video src={HorizonbgImg} autoPlay loop muted />
      <div className="loginCont">
        <div className='logContsCont'>
      <Container>
      
  <div className='logContsCont' style={{  paddingtop: '2rem!important'}}>
  <Row>
                  <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7">
              <div className="d-flex ">
                <div className="col-12 col-xl-9" style={{ marginBottom: '10px' }}>
                  <img className="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="BootstrapBrain Logo" />
                  <div className="mt-auto">
                    <hr className="border-primary-subtle mb-4" />
                    <h2 className="h1 mb-4">Explore the cosmos like never before.</h2>
                    <p className="lead mb-5">Unlock a universe of captivating imagery with our free web app, fueled by NASA's API.</p>
                  </div>
                  <div className="text-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="login-wrap">
                <div className="login-html">
                  <input id="tab-1" type="radio" name="tab" className="sign-in" checked={activeTab === "sign-in"}
                    onChange={() => handleTabChange("sign-in")} />
                  <label htmlFor="tab-1" className="tab">Sign In</label>
                  <input id="tab-2" type="radio" name="tab" className="sign-up" checked={activeTab === "sign-up"}
                    onChange={() => handleTabChange("sign-up")} />
                  <label htmlFor="tab-2" className="tab">Sign Up</label>
                  <div className="login-form">
                    <form onSubmit={handleSubmit}>
                      <div className="sign-in-htm">
                        <div className="group">
                          {/* <label htmlFor="user" className="label">User email</label> */}
                          <input id="user" type="email" className="input" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="group">
                          {/* <label htmlFor="pass" className="label">Password</label> */}
                          <input id="pass" type="password" className="input" data-type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="group">
                          <input id="check" type="checkbox" className="check" />
                          <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                        </div>
                        <div className="group">
                          <input type="submit" className="button" value="Sign In" id='signin' />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                          <a href="#forgot">Forgot Password?</a>
                        </div>
                        <div className="hr"></div>
                        <div className='google'>
              <GoogleButton
            className="g-btn width"
            type="dark"
            onClick={handleGoogleSignIn}
            style={{ width: 'auto!important', height: 'auto!important', borderRadius: '2rem!important' }}
          />
          </div>
                      </div>
                    </form>
                    <form onSubmit={handleSignUpSubmit}>
                      <div className="sign-up-htm">
                        <div className="group">
                          <input id="userName" type="text" className="input" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="group">
                          <input id="passSignup" type="password" className="input" data-type="password" placeholder="Password" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} />
                        </div>
                        <div className="group">
                          <input id="repeatPassSignup" type="password" className="input" data-type="password" placeholder="Repeat Password" value={repeatPasswordSignup} onChange={(e) => setRepeatPass(e.target.value)} />
                        </div>
                        <div className="group">
                          <input id="emailSignup" type="email" className="input" placeholder="Email address" onChange={(e) => setEmailSignUp(e.target.value)} />
                        </div>
                        <div className="group">
                          <input type="submit" className="button" value="Sign Up" id='signup' />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                          <label htmlFor="tab-1">Already Member?</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="hr"></div>
                  <Alert variant="danger" dismissible show={showPasswordMismatchAlert} onClose={() => setShowPasswordMismatchAlert(false)} style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                          Passwords don't match
                        </Alert>
                  <div className="hr"></div>

                  <Alert variant="danger" dismissible show={!!error} onClose={handleAlertDismiss} style={{  bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        {error}
      </Alert>
                </div>
              </div>
            
            </div>
          </div>
          </Row>
          </div>
        </Container>
        </div>
      </div>
      


    </div>

  );
}

export default Login;
