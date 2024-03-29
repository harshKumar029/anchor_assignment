import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/icon/logo.png';
import logout from '../assets/icon/logout.svg';
import "../style/style.css"

const Navbar = () => {
    const navigate = useNavigate();
    const handellogout = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        navigate("/login");
      }
    return (
        <>
            <div className='navbar' >
                <div className='navbarwrapper'>
                    <div className='logo'>
                    {/* <Link to='/'><img src={logo} alt='' /></Link> */}
                    <Link to='/'><h1 style={{color: "red"}}>logo</h1></Link>
                    </div>
                    {(localStorage.getItem("Token")) ? (<p className='userdetail'>Application</p>):''}
                    <div>
                        {(!localStorage.getItem("Token")) ? (
                            <div>
                                <Link to="/login"><button className='button1' >Login</button></Link>
                                {/* <Link to="/createuser"> <button className='button2'>Register Now</button></Link> */}
                            </div>
                        ) : (
                            <div className='logout'>
                            <Link to="/dashboard"><p>coin</p></Link>
                            <div>
                            <Link to="/login" onClick={handellogout}><button className='button1'>Logout<img src={logout}alt=''/></button></Link>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar