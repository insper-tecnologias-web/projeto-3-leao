import React from 'react';
import './publish.css'; 
import { Link, useNavigate } from 'react-router-dom';



const Publish = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate('/home'); 
    };
  
    const handleLogoutClick = () => {
      navigate('/');
    };

  return (
    <div className="publish-container">
      <h1 className="publish-title">Publicar Carro</h1>
      {/* FAZER */}
      <button className="back-button" onClick={handleBackClick}>
          Voltar para Home
        </button>
    </div>
  );
};

export default Publish;
