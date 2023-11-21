import React from "react";
import "./catalogue.css";
import CarCard from "./components/CarCard";


function Catalogue() {

    return (
        <div className="catalogue-div">
            <div>
                <p className="catalogue-title">Carros publicados</p>
                <section className="catalogue-section">
                    <CarCard></CarCard>
                    <CarCard></CarCard>
                    <CarCard></CarCard>
                    <CarCard></CarCard>
                    <CarCard></CarCard>
                </section>
            </div>
        </div>

    )
}
export default Catalogue;