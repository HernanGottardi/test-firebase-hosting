import React, {useState, useEffect} from "react";
import {useSearchResults} from "../hooks";
import {Link} from "react-router-dom";

export function SearchResults() 
{
  const results = useSearchResults();

  console.log("Resultado de searchResults: ", results);

  if (results.length !== 0) {
    return (
      <div>
        <h1>Resultados</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {results.map((e) => {
              return (
                <tr key={e.id}>
                  <td><Link to={"/item/" + e.id}>Ver mas</Link></td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td><img src={e.thumbnail} alt="ImgProducto" /></td>
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


