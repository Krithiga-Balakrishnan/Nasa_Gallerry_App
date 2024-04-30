import '../css/Login.css'  
import React, { useEffect, useState, useRef  } from "react";
import HorizonbgImg from '../images/HorizonAstronomy.mp4';


// import 'https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css';
// import 'https://unpkg.com/bs-brain@2.0.3/components/logins/login-9/assets/css/login-9.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const videoRef = useRef(null);

  
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
    useEffect(() => {
        
        // Create link elements
        const bootstrapLink = document.createElement("link");
        const loginStylesLink = document.createElement("link");
    
        // Set attributes for Bootstrap stylesheet
        bootstrapLink.rel = "stylesheet";
        bootstrapLink.href = "https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    
        // Set attributes for login stylesheets
        loginStylesLink.rel = "stylesheet";
        loginStylesLink.href = "https://unpkg.com/bs-brain@2.0.3/components/logins/login-9/assets/css/login-9.css";
    
        // Append link elements to the head of the document
        document.head.appendChild(bootstrapLink);
        document.head.appendChild(loginStylesLink);
    
        // Clean up function to remove the link elements when the component unmounts
        return () => {
          document.head.removeChild(bootstrapLink);
          document.head.removeChild(loginStylesLink);
        };
      }, []);

      useEffect(() => {
        const resizeVideo = () => {
            if (videoRef.current) {
                const aspectRatio = 16 / 9; // Change this to match your video's aspect ratio
                const videoWidth = videoRef.current.clientWidth;
                const videoHeight = videoWidth / aspectRatio;
                videoRef.current.style.height = `${videoHeight}px`;
            }
        };

        window.addEventListener('resize', resizeVideo);
        resizeVideo(); // Call the function once on mount to set initial height

        return () => window.removeEventListener('resize', resizeVideo);
    }, []);
    
    return (
        <div >
        <video src ={HorizonbgImg} autoPlay loop muted/>
        
        <div className="loginCont position-absolute top-50 start-50 translate-middle">
          
           <section className="py-3 py-md-5 py-xl-8">
                    <div className="container">
                        <div className="row gy-4 align-items-center">
                            <div className="col-12 col-md-6 col-xl-7">
                            <div className="d-flex justify-content-center ">
                                <div className="col-12 col-xl-9">
                                    <img className="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="BootstrapBrain Logo" />
                                    <hr className="border-primary-subtle mb-4" />
                                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                    <p className="lead mb-5">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                                    <div className="text-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-5">
                            <div className="card border-0 rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-4">
                                                <h3>Sign in</h3>
                                                <p>Don't have an account? <a href="#!">Sign up</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                        required
                                                    />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                        required
                                                    />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="remember_me"
                                                        id="remember_me"
                                                    />
                                                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type="submit">Log in now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                                <a href="#!">Forgot password</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="mt-4 mb-4">Or continue with</p>
                                            <div className="d-flex gap-2 gap-sm-3 justify-content-centerX">
                                                {/* Social login buttons */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Login;
