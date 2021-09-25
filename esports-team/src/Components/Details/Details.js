import React from 'react';

const Details = (props) => {
    let products=props.details
    let total=0;
    let name=''
    for(const product of products){
    name=product.name;
        total=total+product.price;
    }
    return (
        <div className="pe-5 border border-secondary w-auto">
            <h1>Details </h1>
            <h5>name : {name}</h5>
            <h4 >Items Orderd:{products.length} </h4>
            <h4>price $:{total} </h4>
        </div>
    );
};

export default Details;