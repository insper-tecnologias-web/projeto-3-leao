import React from 'react';
import "./user.css";
import {  useNavigate } from 'react-router-dom';


const User = (props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="header">
      <h1 className="site-title">Lion Cars</h1>
      </div>
      <div className="user-profile">
        <div className="profile-picture">
          <img src='images/user.png' alt="User Profile" />
        </div>
        <div className="user-details">
        <h2>Username: leao_1923</h2>
        <h2>Email: leao@gmail.com </h2>
          {/* <h2>{user.username}</h2> */}
          {/* <p>Email: {user.email}</p> */}
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
