import React from "react";
import { Link } from "react-router-dom";
import PublishIcon from '@mui/icons-material/Publish';
import "./catalogue.css";
import CarCard from "./components/CarCard";

function Catalogue() {
    return (
        <div className="catalogue-div">
            <p className="catalogue-title">Carros publicados</p>
            <section className="catalogue-section">
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
            </section>

            {/* Botão para a página de publicação */}
            <Link to="/publish" className="publish-button" >
                <PublishIcon />
            </Link>
        </div>
    );
}

export default Catalogue;
