import React, { useState } from 'react';
import { validotp } from '../utility/ApiService';
import { useNavigate } from 'react-router-dom';
// import google from '../assets/icon/google.svg';
// import github from '../assets/icon/github.svg';
// import linkedin from '../assets/icon/linkedin.svg';
// import loginvector from '../assets/icon/signup.svg'

const Otp = () => {
    const [otp, setotp] = useState('');

    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await validotp({ otp:otp });
            console.log("resposnse data ", response)

            // Check if the login was successful
            if (response.status) {
                console.log("hello")
                localStorage.setItem("email", response.email);
                console.log(localStorage.getItem("email"))
                navigate("/");
            } else {
                console.log('Login unsuccessful:', response.message);
                alert("Enter valid otp");
            }
        } catch (error) {
            console.error(error.message);
            alert("Enter valid otp");
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
                        <label htmlFor="otp">Otp</label>
                        <input type="Otp" id="email" name="otp" value={otp} onChange={(e) => setotp(e.target.value)} placeholder="otp" required />
                    </div>
                    <div className='actionbutton'>
                     <button type="submit">Submit otp</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Otp