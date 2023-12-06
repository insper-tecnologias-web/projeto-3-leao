import React from 'react';
import "./carpage.css";
import { useLocation } from "react-router-dom";
import Header from "../Header";



const CarPage = (props) => {
  const location = useLocation();
  const payload = location.state ? location.state.payload : null;
  const values = location.state ? location.state.value : null;

  console.log("MARCA", payload,values)
  const preço = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(payload.price);

  return (
    <>
    <Header></Header>
      <h1>Car Page</h1>
      <p className="Marca">Marca: {values.Marca}</p>
      <p className="Modelo">Modelo: {values.Modelo}</p>
      <p className="AnoModelo">Ano: {values.AnoModelo}</p>
      <p className="Preço">Preço: {preço}</p>
      <p className="Fipe">Preço tablea Fipe: {values.Valor}</p>
      <p className="Descrição">Descrição: {payload.description}</p>
      <p className="Combustível">Combustível: {values.Combustivel}</p>
    </>
  );
};

export default CarPage;
