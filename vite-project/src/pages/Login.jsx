import React from "react";
import "../styles/login.css";
import logo from "../media/logo.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import{ Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img src={logo} alt="KisaanVerse Logo" className="kisaanverse-text-logo" />
        </div>
        <h2>Welcome to KisaanVerse!</h2>
        <p>
          Your one-stop digital platform for farmers. Access real-time weather updates, market prices, expert advice,
          and connect with the farming community.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
          alt="Koala Mascot"
          className="koala-icon"
        />
      </div>
      <div className="login-right">
        <form className="login-form">
          <h2>Farmer Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username / Phone</label>
            <i className="fas fa-user"></i>
            <input type="text" id="username" placeholder="Enter your username or phone" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <i className="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <Link to="/"><button type="submit" className="login-btn">
            Login to Your Account
          </button></Link>
          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <a href="#" title="Login with Google">
                <i className="fab fa-google"><img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" /></i>
              </a>
              <a href="#" title="Login with Facebook">
                <i className="fab fa-facebook-f"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" /></i>
              </a>
              <a href="#" title="Login with WhatsApp">
                <i className="fab fa-whatsapp"><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png"/></i>
              </a>
            </div>
          </div>
          <div className="register-link">
            <p>
              New to KisaanVerse? <a href="#">Create an Account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
