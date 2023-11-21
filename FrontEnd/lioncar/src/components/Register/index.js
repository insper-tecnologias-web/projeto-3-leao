import React, { useState } from "react";
import './register.css'
import Db from '../../DB'
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Register(props) {

    const [warningRegister, setWarningRegister] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const checkUserExistenceInDB = async (formEmail) => {
        const DBusers = await Db.getUsers();
        const userExists = DBusers.some((user) => user.email === formEmail);
        console.log(userExists);
        return userExists;
    };

    const handlePost = async (e) => {
        e.preventDefault();

        console.log('$$$');
        const formUser = new FormData(e.target);
        const formName = e.target.username.value;
        const formEmail = e.target.email.value;
        const formPassword = e.target.password.value;
        const formConfirmPassword = e.target.confirmpassword.value;

        if (formName.length <= 0) {
            setWarningRegister('Insira um nome');
        }
        else if (formEmail.length <= 0) {
            setWarningRegister('Insira um email');
        }
        else if (formPassword.length <= 0) {
            setWarningRegister('Insira uma senha');
        }
        else if (formPassword !== formConfirmPassword) {
            setWarningRegister('Senhas diferentes');
        }
        else if (checkUserExistenceInDB(formEmail) === true) {
            setWarningRegister('Este email já foi cadastrado');
        }
        else {
            setWarningRegister('Usuário cadastrado!');
            const userData = {};
            formUser.forEach((value, key) => {
                console.log(key);
                if (key !== 'confirmpassword') {
                    userData[key] = value;
                }
            });
            Db.postUser(userData).then(() =>navigate("/"));
            
        }
    };

    return (
        <>
            <div className="main-login">    
            <img className="register-img" src='images/login.png' alt="Logo Lion Car" />
            <div className="div-login-section">
            <p className="login-section-title">Hello, Register!</p>
            <form encType="multipart/form-data" onSubmit={handlePost}>
                <div  className="form-section">
                    <label htmlFor="name">Digite seu nome:</label>
                    <input
                        className="input-field"
                        type="text"
                        maxLength="20"
                        placeholder="Nome do usuário"
                        name="username"
                        id = "username"
                    />
                </div>
                <div  className="form-section">
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

                <div  className="form-section">
                    <label htmlFor="password">Confirmar senha:</label>
                    <input className="input-field" placeholder="Senha" type={showPassword ? "text" : "password"} id="confirmpassword" name="confirmpassword" required />
                </div>
                <button className="btn-login-form" type="submit">
                    Registre-se
                </button>
            </form>
            <p>{warningRegister}</p>
            <div className="footer-form-login">
                <p className="text-register">Já possui uma conta?</p>
                <Link to="/"> Login</Link>
            </div>
            </div>
            </div>
        </>
    );
}