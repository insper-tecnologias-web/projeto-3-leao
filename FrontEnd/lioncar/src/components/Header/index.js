import React from "react";
import { useNavigate } from "react-router-dom";
import "./head.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";


function Header(props) {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    return (
        <header className="site-header">

                <img 
                className="logo-img" 
                src='images/LOGO_LEAO_cortado.png' 
                alt="Logo Lion Car" 
                onClick={() => navigate('/')}/>
              
                <nav className="main-nav">
                    <ul>
                        <li onClick={() => navigate('/mycars')}>My Cars</li>
                        <li onClick={() => navigate('/about')}>About</li>
                    </ul>
                </nav>
                <div className="user">
                    <button className="user-button" type="button" onClick={() => navigate("/user")}>
                        <AccountCircleIcon style={{ fontSize: 70 }} />
                    </button>
                    <p className="user-name">{user.username}</p>
                </div>
            </header>
    )
}

export default Header;
