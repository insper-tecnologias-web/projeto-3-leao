import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Db from '../../DB'
import CarCard from '../Home/components/Catalogue/components/CarCard';


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
            <h1 onClick={()=>{console.log(userCars)}}>My cars</h1>
            <div>
            {userCars.length> 0 ?(userCars.map((item) => (<CarCard key={`note__${item.id}`} type= {item.type} price={item.price} model={item.model} brand={item.brand} year={item.year}></CarCard>))):null}
            </div>
        </>
    );
};

export default MyCars;
