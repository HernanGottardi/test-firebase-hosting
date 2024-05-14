import React, {useState, useEffect} from "react";
import {useSearchResults} from "../hooks";
import {Link} from "react-router-dom";
import "./searchResults.css"

export function SearchResults() 
{
  const results = useSearchResults();

  console.log("Resultado de searchResults: ", results);

  if (results.length !== 0) {
    return (
      <div className="cont">
        <table className="tabla">
          <tbody className="filas">
            {results.map((e) => {
              return (
                <div className="resultados">
                  <h6 className="link"><Link to={"/item/" + e.id}>Ver mas</Link></h6>
                  <h6 className="titulo">{e.title}</h6>
                  <h6 className="precio">${e.price}</h6>
                  <div className="imagen"><img className="medirImagen"src={e.thumbnail} alt="ImgProducto" /></div>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Sin resultados.</h1>;
  }
}


