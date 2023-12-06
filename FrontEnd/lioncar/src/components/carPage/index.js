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
      <h1 className="Nome">{values.Marca} - {values.Modelo}</h1>
      <div className="about">
        <div className="details">
          <div className="details-info">
            <div className="details-left">
              <p className="AnoModelo">Ano: {values.AnoModelo}</p>
            </div>
            <div className="details-right">
              <p className="Combustível">Combustível: {values.Combustivel}</p>
            </div>
          </div>
          <h1 className="description-title">Descrição do Vendedor: </h1>
          <div className="description-container">
            <p className="Descrição">{payload.description}</p>
          </div>
        </div>
        <div className="pv">
          <div className="price-title">
              <span>Preço do Vendedor</span>
              <span>Preço Tabela Fipe</span>
          </div>
          <div className="price-container">
              <div className="price-values">
                  <p className="price-value">{preço}</p>
                  <div className="vertical-line"></div>
                  <p className="price-value">{values.Valor}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarPage;
