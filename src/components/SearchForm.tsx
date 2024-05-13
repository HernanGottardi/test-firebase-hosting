import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useSearchResults} from "../hooks"

function SearchForm (){

    const navigate = useNavigate();
    const results = useSearchResults();

    const handlerSubmit = (e)=>
    {
        e.preventDefault();
        navigate("/search/" + e.target.query.value);        

    }

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" name="query"/>
            <button>Buscar</button>
            <h4>Resultados {results.length}</h4>
        </form>
    )

}

export {SearchForm}