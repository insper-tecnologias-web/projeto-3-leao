import React from "react";
import { useNavigate } from "react-router-dom";
import "./head.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Head(props) {
    const navigate = useNavigate();


    return (
        <header className="site-header">
                <div className="aa">
                    <h1 className="site-title">Lion Cars</h1>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li onClick={() => navigate('/home')}>Home</li>
                        <li onClick={() => navigate('/home')}>Published Cars</li>
                        <li onClick={() => navigate('/about')}>About</li>
                    </ul>
                </nav>
                <div className="user">
                    <h2 className="user-name">Olá, Leão</h2>
                    <button className="user-button" type="button" onClick={() => navigate("/user")}>
                        <AccountCircleIcon />
                    </button>
                </div>
            </header>
    )
}

export default Head;
