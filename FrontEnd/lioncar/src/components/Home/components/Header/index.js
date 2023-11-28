import React from "react";
import { useNavigate } from "react-router-dom";
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

    const goToFeedback = () => {
        navigate("/feedback");
    }

    return (
        <header className="site-header">
                <div className="aa">
                    <h1><a  className="site-title" onClick={() => navigate('/home')}>Lion Cars</a></h1>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a onClick={() => navigate('/home')}>Published Cars</a></li>
                        <li><a onClick={() => navigate('/about')}>About</a></li>
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
