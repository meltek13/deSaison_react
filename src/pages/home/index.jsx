import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {  
    const [wines, setWines] = useState([]);
    const [searchWines, setSearchWines] = useState([]);

    useEffect(() => {
        fetch(`http://desaison.herokuapp.com/wines`)
          .then((response) => response.json())
          .then((response) => {
            setWines(response);
            setSearchWines(response)
          });
      }, []);

    
      const search = (e) => {
        setWines([]);
    if (e.length > 0) {
       
            searchWines.forEach(wine=>{

                if( wine.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(e.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()) || wine.winemaker.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(e.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()) || wine.area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(e.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()) ) {
                    
                    setWines((oldArray) => [...oldArray, wine])
                    
                } 
           
        });
    } else {
        fetch(`http://desaison.herokuapp.com/wines`)
        .then((response) => response.json())
        .then((response) => {
          setWines(response);
        });
    }
        
      }

    return (

  <div>
    <div>
      <h1 className="display-4 font-abril" id="top"><strong>DE SAISON</strong></h1>
      <p className="lead ">carte des vins</p>
    </div>

   <div>
      <div className="background">
        <form className="search">
          <input
            onChange={(event) => search(event.target.value)}
            className="SearchBar"
            type="search"
            placeholder="Vous chercher un vin ?"
          />
        </form>
        
        {
          wines.map((wine) => (
            <div key={wine.id}>
              <div className="container">
              <Link to={`/description/${wine.id}`} className="underline">
                <div className="box-infos">
                  <h3 className="wine-info font-abril">{wine.area} / {wine.domain} / <span className="blue-color">{wine.name}</span> / {wine.year}  </h3>
                  <h3 className=" wine-info font-abril blue-color margin-top">{wine.price} €</h3>
                  <p className="wine-info margin-top">{wine.grappe} / {wine.winemaker} / {wine.color}</p>
                  <p className="wine-info margin-top"></p>
                  <p className="wine-info font-style-italic">"{wine.description}"</p>
                </div>
                </Link>
              </div>
            </div>
          ))
        } 

      </div>
      </div>

  </div>
  )
  
}

export default Home;

