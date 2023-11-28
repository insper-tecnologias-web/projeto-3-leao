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
        <>
            <header className="site-header">
                <div className="main-header">
                    <div className="aa">
                        <a onClick={goToHome}>
                            <h1 className="site-title">Lion Cars</h1>
                        </a>
                    </div>
                    <nav className="main-nav">
                        <ul>
                            <li><a onClick={goToHome}>Published Cars</a></li>
                            <li><a onClick={goToAbout}>About</a></li>
                            <li><a onClick={goToFeedback}>Feedback</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-camp">
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
