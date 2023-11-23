import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./head.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Head(props) {
    const navigate = useNavigate();

    const goToUser = () => {
        navigate("/user");
    }

    const goToAbout = () => {
        navigate("/about");
    }

    const goToHome = () => {
        navigate("/home");
    }

    return (
        <>
            <header className="site-header">
                <nav className="main-nav">
                    <ul>
                        <li><a onClick={goToHome}>Home</a></li>
                        <li><a onClick={goToHome}>Published Cars</a></li>
                        <li><a onClick={goToAbout}>About</a></li>
                    </ul>
                </nav>
                <div className="aa">
                    <h1 className="site-title">Lion Cars</h1>
                </div>
                <div className="user">
                    <h2 className="user-name">Olá, {props.username}</h2>
                    <button className="user-button" type="button" onClick={goToUser}>
                        <AccountCircleIcon />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Head;
