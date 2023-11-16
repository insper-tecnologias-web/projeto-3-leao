import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css'
import Db from '../../DB'

export default function Login(props) {

    const [warningLogin, setWarningLogin] = useState(null);

    const handlePost = async (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;
        const formPassword = e.target.password.value;
        const DBusers = await Db.getUsers();
        const filteredUser = DBusers.find((user) => user.email === formEmail);

        if (!filteredUser){
            setWarningLogin('usario nao encontrado');
        } else {
            if (formPassword !== filteredUser.password) {
                setWarningLogin('senha incorreta');
            } else {
                setWarningLogin('senha correta');
                
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
                    <input placeholder="Senha" type="password" id="password" name="password" required />
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
