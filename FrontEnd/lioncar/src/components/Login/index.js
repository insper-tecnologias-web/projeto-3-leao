import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import Db from '../../DB'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Login(props) {

    const [warningLogin, setWarningLogin] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;
        const formPassword = e.target.password.value;
        const DBusers = await Db.getUsers();
        const filteredUser = DBusers.find((user) => user.email === formEmail);

        if (!filteredUser) {
            setWarningLogin('usario nao encontrado');
        } else {
            if (formPassword !== filteredUser.password) {
                setWarningLogin('senha incorreta');
            } else {
                setWarningLogin('senha correta');
                navigate("home");
            }
        }
    };

    return (
        <div className="main-login">
            <img className="logo-img" src='images/LOGO_LEAO_cortado.png' alt="Logo Lion Car" />
            <div className='div-login-section'>
                <p className="login-section-title">Faça seu login</p>
                <form encType="multipart/form-data" onSubmit={handlePost}>
                    <div className="form-section">
                        <label htmlFor="email">Digite seu email:</label>
                        <input className="input-field" placeholder="Email" type="email" id="email" name="email" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="password">Digite sua senha:</label>
                        <div className="input-btn">
                            <input className="input-field"  placeholder="Senha" type={showPassword ? "text" : "password"} id="password" name="password" required />
                            <button className="viewpassword-btn" type="button" onClick={togglePasswordVisibility}>
                                {showPassword ? <RemoveRedEyeOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
                            </button>
                        </div>
                    </div>
                    <div className="submit-section">
                        <button className="btn-login-form" type="submit">
                            Sign in
                        </button>
                    </div>
                </form>
                <p>{warningLogin}</p>
                <div className="footer-form-login">
                    <p className="text-register">Novo no LionCar?</p>
                    <Link to="/register">Registrar-se</Link>
                </div>
            </div>
        </div>
    );
}
