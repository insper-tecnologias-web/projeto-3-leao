import React from "react";
import Header from './components/Header'
import Catalogue from "./components/Catalogue";

export default function Home(props) {

    return (
        <>
            <Header username="Leão"></Header>
            <Catalogue></Catalogue>
        </>
    );
}