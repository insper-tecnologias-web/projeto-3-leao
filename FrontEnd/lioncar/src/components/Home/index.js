import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import { useSelector } from "react-redux";
import Header from "../Header";
//import { useDispatch } from "react-redux";
//import { logOut } from '../../redux/userSlice';

export default function Home(props) {
    //const dispatch = useDispatch();
    //dispatch(logOut());


    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user.isLogged) {
            navigate("../login");
        }
    }, [user, navigate]);
        
    return (
        <>
            <Header />
            <Catalogue></Catalogue>
        </>
    );
}
