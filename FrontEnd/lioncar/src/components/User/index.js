import React from 'react';
import "./user.css";
import {  useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";



const User = (props) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="user-profile">
        <div className="profile-picture">
          <img src='images/user.png' alt="User Profile" />
        </div>
        <div className="user-details">
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email} </h2>
        </div>
        <button className="logout-button" onClick={handleLogoutClick}>
          Sair
        </button>
        <button className="back-button" onClick={handleBackClick}>
          Voltar para Home
        </button>
      </div>
    </>
  );
};

export default User;
