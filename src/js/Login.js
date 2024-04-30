import '../css/Login.css'  
import React, {  useState  } from "react";
import HorizonbgImg from '../images/HorizonAstronomy.mp4';
import { Container } from 'react-bootstrap';


// import 'https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css';
// import 'https://unpkg.com/bs-brain@2.0.3/components/logins/login-9/assets/css/login-9.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic here
    };
    
    return (
        <div className='login'>
            <video src ={HorizonbgImg} autoPlay loop muted/>
        
        <div className="loginCont">
        <Container>
                        <div className="row gy-4 align-items-center">
                        <div className="col-12 col-md-6 col-xl-7">
    <div className="d-flex ">
        <div className="col-12 col-xl-9">
            <img className="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="BootstrapBrain Logo" />
            <div class="mt-auto"> 
                <hr className="border-primary-subtle mb-4" />
                <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                <p className="lead mb-5">We write words, take photos, make videos, and interact with artificial intelligence.</p>
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
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
          <label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Email Address</label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
                        </div>
                    </div>
                    </Container>
                </div>

             
        </div>
        
    );
}

export default Login;
