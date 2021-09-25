import React from 'react';

const Details = (props) => {
    console.log(props.details);
    return (
        <div className="p-3 border border-secondary">
            <h1>Details </h1>
            <h1>price :{props.details.price} </h1>
        </div>
    );
};

export default Details;