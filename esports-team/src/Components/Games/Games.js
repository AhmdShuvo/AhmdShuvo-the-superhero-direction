import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Game from '../Game/Game';

const Games = () => {

    const [games,setgames]=useState([]);
    const[details,setDetails]=useState([]);


    const HandleClick=(gamess)=>{
        const  newMeal={gamess}
        
        setDetails(newMeal.gamess)
    }

    useEffect( ()=>{

        fetch('./Games.json').then(res=>res.json()).then(data=>setgames(data));

    } ,[])
    return (
        <div className="d-flex">
          <div className=' mt-5 row row-cols-1 row-cols-md-3 g-4">'>
          {
                          games.map(game=><Game
                           key={game.index}
                           game={game}
                           HandleClick={HandleClick}
                          ></Game>)
                      }
          </div>
                      

                      <Details details={details}
                      ></Details>
             
        </div>
    );
};

export default Games;