import React, { useState } from 'react';
import { useSelector } from "react-redux";


const MyCars = (props) => {
    const [userCars, setUserCars] = useState();
    const user = useSelector(state => state.user);



    return (
        <>
            <h1>My cars</h1>
        </>
    );
};

export default MyCars;
