import React, { useState } from 'react';

const Details = (props) => {

    const {details}=props;
    
    let total=0;
   
    
    for(const product of details){
        total=total+product.price;
       
        
    }
    return (
        <div className=" m-5 pe-5 border border-secondary">
            <h1>Details </h1>
            <ul>
                {
                    details.map(game=><li
                      key={game._id}
                  
                    >{game.name}</li>)
                
                }
            </ul>
            <h4 >Items Orderd:{details.length} </h4>
            <h4>price $:{total} </h4>
        </div>
    );
};

export default Details;