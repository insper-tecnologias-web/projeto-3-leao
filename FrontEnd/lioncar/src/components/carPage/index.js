import React from 'react';
import "./carpage.css";
import Header from './components/Header'
import { useLocation } from "react-router-dom";



const CarPage = (props) => {
  const location = useLocation();
  const payload = location.state ? location.state.payload : null;
  const value = location.state ? location.state.value : null;

  console.log("MARCA", payload,value)

  return (
    <>
    <Header></Header>
      <h1>Car Page</h1>
    </>
  );
};

export default CarPage;
