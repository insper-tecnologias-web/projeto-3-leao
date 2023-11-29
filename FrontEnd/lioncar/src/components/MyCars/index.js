import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Db from '../../DB'


const MyCars = (props) => {
    const [userCars, setUserCars] = useState();
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
        </>
    );
};

export default MyCars;
