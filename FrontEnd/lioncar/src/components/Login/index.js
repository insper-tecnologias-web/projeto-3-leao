import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import Db from '../../DB'

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
        <>
            <div>Hello, Login!</div>
            <form encType="multipart/form-data" onSubmit={handlePost}>
                <div>
                    <label htmlFor="email">Digite seu email:</label>
                    <input placeholder="Email" type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Digite sua senha:</label>
                    <input placeholder="Senha" type={showPassword ? "text" : "password"} id="password" name="password" required />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                </div>
                <button className="btn-login-form" type="submit">
                    Sign in
                </button>
            </form>
            <p>{warningLogin}</p>
            <div>
                <p>Novo no LionCar?</p>
                <Link to="/register">Register</Link>
            </div>
        </>
    );
}
