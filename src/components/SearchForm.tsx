import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useSearchResults} from "../hooks"

import "./searchForm.css"

function SearchForm (){

    const navigate = useNavigate();
    const results = useSearchResults();

    const handlerSubmit = (e)=>
    {
        e.preventDefault();
        navigate("/search/" + e.target.query.value);        
    }

    return (
        <div className="contenedor">
            <form className="formulario" onSubmit={handlerSubmit}>
                <input className="inputBuscar" placeholder="Tu busqueda es..."type="text" name="query"/>
                <button className="buttonBuscar">Buscar</button>
            </form>
        </div>
    )

}

export {SearchForm}