import React, { useState } from 'react';
import './publish.css'; 
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Publish = (props) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/home'); 
    };

    const goToUser = () => {
        navigate("/user");
    }

    const goToAbout = () => {
        navigate("/about");
    }

    const goToHome = () => {
        navigate("/home");
    }

    // Estado para armazenar os dados do carro e o status de publicação
    const [carInfo, setCarInfo] = useState({
        brand: '',
        model: '',
        version: '',
        year: '',
        price: '',
    });

    const [isPublished, setIsPublished] = useState(false);

    // Manipuladores de evento para atualizar o estado com os dados do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para lidar com a submissão do formulário, por exemplo, enviar para o backend
        console.log('Dados do Carro:', carInfo);
        setIsPublished(true);
    };

    return (
        <>
            <header className="site-header">
                {/* ... (mesmo como antes) */}
            </header>
            <h1 className="publish-title">
                {!isPublished ? "Publicar Carro" : "Carro Publicado com Sucesso!"}
            </h1>
            <div className="publish-container">
                {!isPublished ? (
                    <form onSubmit={handleSubmit} className='form'>
                        <label className='label'>
                            Marca:
                            <input
                                className='input'
                                type="text"
                                name="brand"
                                value={carInfo.brand}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className='label'>
                            Modelo:
                            <input
                                className='input'
                                type="text"
                                name="model"
                                value={carInfo.model}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className='label'>
                            Versão:
                            <input
                                className='input'
                                type="text"
                                name="version"
                                value={carInfo.version}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className='label'>
                            Ano:
                            <input
                                className='input'
                                type="text"
                                name="year"
                                value={carInfo.year}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label className='label'>
                            Preço:
                            <input
                                className='input'
                                type="text"
                                name="price"
                                value={carInfo.price}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit" className="back-button">
                            Publicar Carro
                        </button>
                    </form>
                ) : (
                    
                    <img src="images/pub.jpeg" alt="Carro Publicado" className="publish-image" />
                )}
                <button className="back-button2" onClick={handleBackClick}>
                    Voltar para Home
                </button>
            </div>
        </>
    );
};

export default Publish;

