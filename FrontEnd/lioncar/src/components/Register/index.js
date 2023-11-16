import React, { useState } from "react";
import './register.css'
import Db from '../../DB'
import { Link } from "react-router-dom";

export default function Register(props) {

    const [warningRegister, setWarningRegister] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

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
        const formName = e.target.name.value;
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
            Db.postUser(userData);
        }
    };

    return (
        <>
            <div>Hello, Register!</div>
            <form encType="multipart/form-data" onSubmit={handlePost}>
                <div>
                    <label htmlFor="name">Digite seu nome:</label>
                    <input
                        type="text"
                        maxLength="20"
                        placeholder="Nome do usuário"
                        name="name"
                    />
                </div>
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

                <div>
                    <label htmlFor="password">Confirmar senha:</label>
                    <input placeholder="Senha" type="password" id="confirmpassword" name="confirmpassword" required />
                </div>
                <button className="btn-login-form" type="submit">
                    Sign in
                </button>
            </form>
            <p>{warningRegister}</p>
            <div>
                <p>Já possui uma conta?</p>
                <Link to="/">Login</Link>
            </div>
        </>
    );
}