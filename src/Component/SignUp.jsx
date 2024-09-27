import React, {useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const title = "Register";
const socialTitle = "Login with Social Media";
const btnText = "Sign Up";

function SignUp() {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail,createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/"
  // console.log("Navigating from:", from)



    const handleRegister = () =>{
      signUpWithGmail().then((result) =>{
        const user = result.user;
        navigate(from, {replace: true})
    }).catch((err) => {
        const errMsg = err.mesage;
        setErrorMessage("Please provide valid email & password")
    })
    }

    const handleSignup = (e) =>{
      e.preventDefault();
    const form = e.target;
    // console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.ConfirmPassword.value;
    // console.log(email, password, confirmPassword)
    if (password !== confirmPassword) {
      setErrorMessage("Password doesn't match")
    } else{
      setErrorMessage("");
      createUser(email, password).then((userCredential) =>{
        const user = userCredential.user;
        alert("Account created successfully")
        navigate(from, {replace: true})
      }).catch((err) => {
        console.log(err.message);
        alert(`${err.message}`)
      })

    }
    }
  return (
    <div>
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                placeholder=" Confirm Password*"
                required
              />
            </div>

            {/* showing message */}
            <div>
              {
                  errorMessage && (
                      <div className="error-message text-danger mb-1">
                          {errorMessage}
                      </div>
                  )
              }
            </div>
            <div className="form-group">
            
            </div>
            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          {/* account bottom */}
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to={"/login"}>Login</Link>
            </span>
            <span className="or">
              <span>OR</span>
            </span>

            {/* social login */}
            <h5>{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-center">
             <li>
                  <a className="github cursor-pointer" onClick={handleRegister}><FaGoogle/></a>
             </li>
             <li>
                  <a href="" className="twitter"><i className="icofont-twitter"></i></a>
             </li>
             <li>
                  <a href="" className="linkedin"><i className="icofont-linkedin"></i></a>
             </li>
             <li>
                  <a href="" className="instagram"><i className="icofont-instagram"></i></a>
             </li>
             <li>
                  <a href="" className="pinterest"><i className="icofont-pinterest"></i></a>
             </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp