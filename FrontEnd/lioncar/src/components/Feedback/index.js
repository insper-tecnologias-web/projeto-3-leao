// Feedback.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './feedback.css'; // Crie um arquivo Feedback.css para estilizar a página se necessário
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Feedback = (props) => {
    const [feedback, setFeedback] = useState('');
    const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

    const navigate = useNavigate();


    const handleBackClick = () => {
        navigate('/home'); // Navegar de volta para a página Home
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar o feedback para o backend
        console.log('Feedback enviado:', feedback);
        // Pode redirecionar o usuário para a página inicial ou outra página após enviar o feedback
        setIsFeedbackSubmitted(true);
    };

    return (
        <>
            
            <div className='feedback-container'>
                <h1 className='feedback-title'>
                    {isFeedbackSubmitted ? 'Obrigado pelo seu feedback!' : 'Dê seu Feedback'}
                </h1>
                {isFeedbackSubmitted ? (
                    <img src="images/pub.jpeg" alt="Carro Publicado" className="feedback-image" />
                ) : (
                    <form onSubmit={handleSubmitFeedback} className='feedback-form'>
                        <textarea
                            id='feedback'
                            className='feedback-input'
                            type='text'
                            maxLength='1000'
                            placeholder='Digite seu feedback aqui'
                            value={feedback}
                            onChange={handleFeedbackChange}
                        />
                        <button type='submit' className='btn-submit-feedback'>
                            Enviar Feedback
                        </button>
                    </form>
                )}
                <button className="back-button" onClick={handleBackClick}>
                    Voltar para Home
                </button>
            </div>
        </>
    );
};

export default Feedback;
