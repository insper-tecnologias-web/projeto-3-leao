// About.js

import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const About = (props) => {

    const navigate = useNavigate();

    // Agora, forneça o caminho completo para a navegação
    const goToUser = () => {
        navigate("/user");
    }

    const goToFeedback = () => {
        navigate("/feedback");
    }
    const goToHome = () => {
        navigate("/home");
    }

  return (
    <>
        <header className="site-header">
        <div className="aa">
            <h1 className="site-title">Lion Cars</h1>
        </div>
        <nav className="main-nav">
            <ul>
                <li><a onClick={goToHome}>Home</a></li>
                <li><a onClick={goToHome}>Published Cars</a></li>
                <li><a onClick={goToFeedback}>Feedback</a></li>
            </ul>
        </nav>
        <div className="user">
            <h2 className="user-name">Olá, {props.username}</h2>
            <button className="user-button" type="button" onClick={goToUser}>
                <AccountCircleIcon />
            </button>
        </div>
        </header>
        <div className="about-container">
        <h1 className="about-title">Bem-vindo à Lion Cars</h1>
        <p className="about-text">
            O destino definitivo para entusiastas de automóveis que buscam uma experiência excepcional ao comprar e vender carros! Somos mais do que um site de comércio de veículos, somos a selva onde seu sonho automotivo se torna realidade. Com o rugido poderoso da confiabilidade e a agilidade de um leão, a Lion Cars está aqui para transformar sua jornada automotiva.
        </p>
        <p className="about-text">
            Na Lion Cars, não apenas vendemos carros; criamos histórias sobre rodas. Nossa plataforma é um ecossistema inovador que conecta compradores e vendedores em uma experiência única, oferecendo uma ampla seleção de veículos de alta qualidade. Nossos leões especializados trabalham incansavelmente para garantir que cada transação seja transparente, segura e emocionante.
        </p>
        {/* Adicione mais parágrafos conforme necessário */}
        <img src="images/money.png" alt="Lion" className="about-image" />
        <p className='about-text'>
        Na Lion Cars, acreditamos que a alegria de dirigir deve começar desde o momento da compra. É por isso que oferecemos suporte excepcional ao cliente, garantindo que você se sinta confiante em cada etapa. Nossa equipe está sempre pronta para responder às suas perguntas e orientá-lo na escolha do veículo perfeito que atenda às suas necessidades e desejos.
        </p>
        <p className='about-text'>
        E quando você encontrar o carro dos seus sonhos ou fechar um negócio incrível, solte um vibrante "LEÃOOOOOOO!" para celebrar conosco. Afinal, a Lion Cars não é apenas sobre carros; é sobre paixão, desempenho e alegria contagiante.
        </p>
        <div className='bordao'>
            Compre e venda seu carro com o Leão!
        </div>
        <p className='about-text'>
        Então, mergulhe na experiência Lion Cars - onde a busca pelo seu carro perfeito se transforma em uma emocionante aventura. Compre e venda seu carro com o Leão e deixe-nos ser a força motriz por trás dos seus momentos inesquecíveis sobre quatro rodas!
        </p>
        <Link to="/home" className="back-to-home">
            Voltar para Home
        </Link>
        </div>
        </>
  );
};

export default About;
