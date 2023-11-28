import React, { useEffect, useState }  from "react";
import Header from './components/Header'
import Catalogue from "./components/Catalogue";

import { useLocation } from 'react-router-dom';

export default function Home(props) {

    const location = useLocation();
    const [token,setToken]=useState();
    const [username, setUsername]=useState();

    useEffect(() => {
        setToken(location.state.token);
        setUsername(location.state.formUserName);
    },[location.state.token, location.state.formUserName])


    return (
        <>
            <Header username={username}></Header>
            <Catalogue></Catalogue>
        </>
    );
}
