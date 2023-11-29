import React from "react";
import { useNavigate } from "react-router-dom";
import "./head.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";


function Head(props) {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);



    return (
        <header className="site-header">
                <div className="aa">
                    <h1 className="site-title" onClick={() => navigate('/')}>Lion Cars</h1>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li onClick={() => navigate('/')}>My Cars</li>
                        <li onClick={() => navigate('/about')}>About</li>
                    </ul>
                </nav>
                <div className="user">
                    <h2 className="user-name">Olá, {user.username}</h2>
                    <button className="user-button" type="button" onClick={() => navigate("/user")}>
                        <AccountCircleIcon />
                    </button>
                </div>
            </header>
    )
}

export default Head;
