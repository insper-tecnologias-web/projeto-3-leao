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
  const preço = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(props.payload.price);

  return (
       
    <div onClick={() => props.goto ? navigate(props.goto, { state: {payload: props.payload, value:values }}) : null} className="main-car-card">

      <h1 className="Marca">{values.Marca} - {values.Modelo}</h1>
      <h2 className="AnoModelo">Ano: {values.AnoModelo}</h2>
      <h2 className="Preço">Preço: {preço}</h2>
    </div>
  );

}
export default CarCard;