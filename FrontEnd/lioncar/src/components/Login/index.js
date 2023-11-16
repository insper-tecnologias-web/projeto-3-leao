import React from "react";
import { Link } from "react-router-dom";
import './login.css'
import Db from '../../DB'

export default function Login(props) {

    const handlePost = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('');

        const users = Db.getUsers();
        console.log(users);
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
            <div>
                <p>Novo no LionCar?</p>
                <Link to="/register">Register</Link>
            </div>
        </>
    );
}
