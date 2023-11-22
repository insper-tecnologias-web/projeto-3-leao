import React from "react";
import Header from './components/Header'
import Catalogue from "./components/Catalogue";

export default function Home(props) {
    // Obtendo o nome de usuário diretamente de props
    const username = props.location?.state?.username || "Leão"; // nome padrão se não houver username

    return (
        <>
            <Header username={username}></Header>
            <Catalogue></Catalogue>
        </>
    );
}
