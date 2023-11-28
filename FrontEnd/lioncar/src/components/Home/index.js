import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from './components/Header'
import Catalogue from "./components/Catalogue";

import { useLocation } from 'react-router-dom';

export default function Home(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState();
    const [username, setUsername] = useState();


    useEffect(() => {
        try {
            setToken(location.state.token);
            setUsername(location.state.formUserName);
        } catch (error) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <Header username={username}></Header>
            <Catalogue></Catalogue>
        </>
    );
}
