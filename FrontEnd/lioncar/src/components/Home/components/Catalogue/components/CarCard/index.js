import "./carcard.css";
import API from '../../../../../../API'
import React, { useState, useEffect} from 'react';




function CarCard(props) {
    const [values, setValues] = useState([]);
    useEffect(() => {
        console.log(props.type, props.brand, props.model, props.year)
        API.getValor(props.type, props.brand, props.model, props.year)
          .then((res) => {
            console.log("AAAAAAAAAAAAAAAAAA")
            console.log(res);
            setValues(res)
          })
          .catch(error => {
            console.error('Erro ao buscar os dados da API', error);
       });
    },[]);

    return (
        <div className="main-car-card">
            <p className="Marca">{values.Marca}</p>
            <p className="Modelo">{values.Modelo}</p>
            <p className="AnoModelo">{values.AnoModelo}</p>
            <p className="Fipe">{values.Valor}</p>
        </div>
    )
}
export default CarCard;