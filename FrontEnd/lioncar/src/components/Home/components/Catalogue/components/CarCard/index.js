import "./carcard.css";
import API from '../../../../../../API'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function CarCard(props) {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  useEffect(() => {
    console.log(props.type, props.brand, props.model, props.year)
    API.getValor(props.type, props.brand, props.model, props.year)
      .then((res) => {
        setValues(res)
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da API', error);
      });

    console.log(props.goto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
       
    <div onClick={() => props.goto ? navigate(props.goto, { state: {payload: props.payload, value:values }}) : null} className="main-car-card">

      <p className="Marca">{values.Marca}</p>
      <p className="Modelo">{values.Modelo}</p>
      <p className="AnoModelo">{values.AnoModelo}</p>
      <p className="Fipe">{values.Valor}</p>
    </div>
  );

}
export default CarCard;