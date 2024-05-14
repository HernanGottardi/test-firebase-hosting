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
                <tr className="resultados">
                  <td className="link"><Link to={"/item/" + e.id}>Ver mas</Link></td>
                  <td className="titulo">{e.title}</td>
                  <td className="precio">${e.price}</td>
                  <td className="imagen"><img className="medirImagen"src={e.thumbnail} alt="ImgProducto" /></td>
                </tr>
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


