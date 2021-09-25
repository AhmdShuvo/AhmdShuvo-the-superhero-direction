import React from 'react';

const Details = (props) => {
    let products=props.details
    let total=0;
    for(const product of products){
      
        total=total+product.price;
    }
    return (
        <div className="pe-5 border border-secondary">
            <h1>Details </h1>
            <h3>Items Orderd :{products.length} </h3>
            <h4> price:{total} </h4>
        </div>
    );
};

export default Details;