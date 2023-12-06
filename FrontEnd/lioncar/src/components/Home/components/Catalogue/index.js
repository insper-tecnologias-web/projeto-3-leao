import React, { useState, useEffect} from 'react';
import PublishIcon from '@mui/icons-material/Publish';
import "./catalogue.css";
import CarCard from "./components/CarCard";
import Db from '../../../../DB'

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




function Catalogue() {
    const user = useSelector(state => state.user);
    const [Cars, setCars] = useState([]);
    useEffect(() => {
        Db.getCar( user.token)
          .then((res) => {
            setCars(res)
          })
          .catch(error => {
            console.error('Erro ao buscar os dados da API', error);
       });
    },[user.token]);

    


    return (
        <div>
            <div className="catalogue-div">
                <p className="catalogue-title">Feed</p>
                <section className="catalogue-section">
                {Cars.length> 0 ?(Cars.map((item) => (<CarCard key={`note__${item.id}`} goto={'/carpage'} payload={item} type= {item.type} price={item.price} model={item.model} brand={item.brand} year={item.year}></CarCard>))):null}
                </section>

                {/* Botão para a página de publicação */}
                
            </div>
            <Link to="/publish" className="publish-button" >
                    <PublishIcon />
            </Link>
        </div>
    );
}

export default Catalogue;


