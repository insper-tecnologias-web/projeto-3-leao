import React from "react";
import './login.css'

export default function Login(props) {

    const handlePost = async (e) => {
        /* e.preventDefault();
        setWarningColor('red');
        const formData = new FormData(e.target); */
        console.log('AAA');
    };

    return (
        <>
            <div>Hello, Login!</div>
            <form encType="multipart/form-data" onSubmit={handlePost}>
                

            </form>
        </>
    );
}