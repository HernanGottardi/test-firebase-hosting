import React, {useState, useEffect} from "react";

export function SearchItem() 
{
  const [data, setData]:any = useState([])

  const url = document.URL;
  const partes_url = url.split("/");
  const partes_len = partes_url.length
  const id = partes_url[partes_len - 1]

  async function obtenerDatos (id) 
  {
    const json = await fetch("https://api.mercadolibre.com/items/" + id);
    const datos = await json.json(); 
    setData(datos)
  }

  useEffect(()=> 
    { 
        if (id)
        {
          obtenerDatos(id)            
        }
    }, [id])

  return (
    <div>
      <h2>{data.title}</h2>
      <h4>Precio: {data.price}</h4>
      <img src={data.thumbnail} alt="" />
    </div>
  );
}

