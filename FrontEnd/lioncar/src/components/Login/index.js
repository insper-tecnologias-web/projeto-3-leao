import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import Db from '../../DB'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/userSlice";
import { useSelector } from "react-redux";

export default function Login(props) {

    const [warningLogin, setWarningLogin] = useState(null);
    const [warningColor, setWarningColor] = useState('red');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        if (user.isLogged) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        const formUserName = e.target.username.value;
        const formPassword = e.target.password.value;
        const formGetToken = {
            "username": formUserName,
            "password": formPassword
        };
        const token = await Db.getToken(formGetToken);
        const user = await Db.getUser(formUserName);

        if (!user.username){
            setWarningLogin('Usuário inexistente');
            setWarningColor('red');
        }
        else if (!token) {
            setWarningLogin('Usuário ou senha incorretos');
            setWarningColor('red');

        } else {
            dispatch(logIn({ username: user.username, token: token, email: user.email}));
            setWarningLogin('Senha correta');
            setWarningColor('green');
            navigate("/");
        }
    };

    return (
        <div className="main-login">
            <img className="logo-img" src='images/LOGO_LEAO_cortado.png' alt="Logo Lion Car" />
            <div className='div-login-section'>
                <p className="login-section-title">Faça seu login</p>
                <form encType="multipart/form-data" onSubmit={handlePost}>
                    <div className="form-section">
                        <label htmlFor="email">Digite seu username:</label>
                        <input className="input-field" placeholder="Username" id="username" name="username" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="password">Digite sua senha:</label>
                        <div className="input-btn">
                            <input className="input-field" placeholder="Senha" type={showPassword ? "text" : "password"} id="password" name="password" required />
                            <button className="viewpassword-btn" type="button" onClick={togglePasswordVisibility}>
                                {showPassword ? <RemoveRedEyeOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                            </button>
                        </div>
                    </div>
                    <div className="submit-section">
                        <button className="btn-login-form" type="submit">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="warningLogin" style={{ color: warningColor }}>{warningLogin}</p>
                <div className="footer-form-login">
                    <p className="text-register">Novo no LionCar?</p>
                    <Link to="/register">Registrar-se</Link>
                </div>
            </div>
        </div>
    );
}