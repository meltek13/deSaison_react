import React, { useState, useEffect } from 'react';

import {
    useParams
   } from "react-router-dom";


const Winedescription = () => {  
    const [wine, setWine] = useState([]);
    let { id } = useParams();
   
    

    useEffect(() => {
        fetch(`http://localhost:3000/wines/` + id)
          .then((response) => response.json())
          .then((response) => {
            setWine(response);
          });
      }, []);
    return (
        <div>
            <h1>description</h1>
            <h3 className="infos-profil">{wine.name}</h3>
                <p className="infos-profil">{wine.winemaker}</p>
                <p className="infos-profil">Region : {wine.area}</p>
                <p className="infos-profil">Cepage : {wine.grappe}</p>
                <p className="infos-profil">Description : {wine.description}</p>
                {wine.available === true ?
                <p>Disponible</p>:
                <p>Indisponible</p>}
                <p className="infos-profil">{wine.price} €</p>
        </div>


    )
}

export default Winedescription;
