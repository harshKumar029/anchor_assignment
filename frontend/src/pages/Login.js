import React, { useState } from 'react';
import { loginUser } from '../utility/ApiService';
import {  useNavigate } from 'react-router-dom';
import google from '../assets/icon/google.svg';
import github from '../assets/icon/github.svg';
import linkedin from '../assets/icon/linkedin.svg';
// import loginvector from '../assets/icon/signup.svg'

const Login = () => {
    const [email, setEmail] = useState('');

    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email: email });
            console.log("resposnse data ", response)

            // Check if the login was successful
            if (response.status) {
                console.log("hello")
                // localStorage.setItem("email", response.email);
                // console.log(localStorage.getItem("email"))
                navigate("/");
            } else {
                alert("Enter valid credentials");
            }
        } catch (error) {
            console.error(error.message);
            alert("Enter valid credentials");
        }
    };
    return (
        <form style={{color: "red"}} 
        onSubmit={handleLogin} 
        className='loginform' >
            {/* <div className='logsignimg'>
                <img src={loginvector} alt='' />
            </div> */}
            <div className="formcontainer">
                <div className='formwrp'>
                    {/* <img style={{ width: 120 }} src={logo} alt='' /> */}
                    <h3>Access Your Account</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@gmail.com" required />
                    </div>
                    <div className='actionbutton'>
                    <button type="submit">Generate otp</button>
                    </div>
                    <hr />
                    <p>or login with</p>
                    <div className='loginicon'>
                        <img src={google} alt='' />
                        <img src={linkedin} alt='' />
                        <img src={github} alt='' />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login