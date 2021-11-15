import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, img, name, price ,rating} = props.products;
    return (
        <div class="col">
            <div class="card">
                <img style={{height:'300px', width:'300px',margin:'auto'}} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 style={{color:'#6FB193',fontWeight:'bold'}} class="text-center card-title">{name}</h5>
                    <p style={{color:'#FFD731',fontWeight:'bold'}} class="card-text text-center">৳ {price} <span>rating {rating}</span></p>
                    <Link style={{marginLeft:'36%'}} className="btn btn-outline-success" to={`/purchase/${_id}`} role="button">Buy {name}</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;