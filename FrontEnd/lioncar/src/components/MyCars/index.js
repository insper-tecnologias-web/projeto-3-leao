import React, { useState, useEffect } from 'react';
import Db from '../../DB'
import CarCard from '../Home/components/Catalogue/components/CarCard';
import Header from "../Header";
import './mycars.css'



import { useSelector } from "react-redux";



const MyCars = (props) => {
    const [userCars, setUserCars] = useState([]);
    const user = useSelector(state => state.user);

    useEffect(() => {
        Db.getUserCars(user.token)
        .then((res)=>{
            setUserCars(res);
        })
        .catch(error => {
            console.error('Erro ao buscar os dados da API', error);})
    }, [user.token]);

    return (
        <>
            <Header></Header>
            <div className="top">
                <h1 className="title" onClick={()=>{console.log(userCars)}}>My cars</h1>
                <h2 className="subtitle">Clique no card para editar seus carros!</h2>
            </div>
            <div className="cars-container">
                {userCars.length> 0 ?(userCars.map((item) => (<CarCard key={`note__${item.id}`} payload={item} goto={"/editcarpage"} type= {item.type} price={item.price} model={item.model} brand={item.brand} year={item.year}></CarCard>))):null}
            </div>
        </>
    );
};

export default MyCars;
