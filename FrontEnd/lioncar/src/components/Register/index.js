import React, {useState} from "react";
import './register.css'
import Db from '../../DB'
import { Link } from "react-router-dom";

export default function Register(props) {

    const [warningRegister, setWarningRegister] = useState(null);

    const handlePost = async (e) => {
        e.preventDefault();

        console.log('$$$');
        const formUser = new FormData(e.target);
        console.log(formUser);
        const formName = e.target.name.value;
        const formEmail = e.target.email.value;
        const formPassword = e.target.password.value;
        const formConfirmPassword = e.target.confirmpassword.value;

        if (formPassword !== formConfirmPassword) {
            setWarningRegister('Senhas diferentes');
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
                    <input placeholder="Senha" type="password" id="password" name="password" required />
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
                <p>Novo no LionCar?</p>
                <Link to="/">Login</Link>
            </div>
        </>
    );
}