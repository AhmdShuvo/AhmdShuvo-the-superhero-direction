import React, { useState } from 'react';

const Details = (props) => {

    let {details}=props
    
    let total=0;
   
    
    for(const product of details){
        total=total+product.price;
        console.log(product);
        
    }
    return (
        <div className="pe-5 border border-secondary w-auto">
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