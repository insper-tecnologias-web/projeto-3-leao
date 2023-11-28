import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from './components/Header'
import Catalogue from "./components/Catalogue";
import { useSelector } from "react-redux";

export default function Home(props) {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    
    useEffect(() => {
        if (!user.isLogged) {
            navigate("../login");
        }  
    }, [user.isLogged, navigate]);
        
    return (
        <>
            <Header username={user.username}></Header>
            <Catalogue></Catalogue>
        </>
    );
}
