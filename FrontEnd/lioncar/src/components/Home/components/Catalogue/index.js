import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import PublishIcon from '@mui/icons-material/Publish';
import "./catalogue.css";
import CarCard from "./components/CarCard";
import Db from '../../../../DB'
import { useSelector } from "react-redux";



function Catalogue() {
    const user = useSelector(state => state.user);
    const [Cars, setCars] = useState(null);
    const getcar = async() =>{
       return await Db.getCar( user.token)
    }

    useEffect(() => {
        console.log(getcar())
    }, []);
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
