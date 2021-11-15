import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [allHomeProducts, setAllHomeProducts] = useState([]);

    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setAllHomeProducts(data))

    }, [])
    return (
       <div style={{marginTop:'40px'}}>
           <h3 style={{color:'#49B8D0',textAlign:'center',marginBottom:'30px',fontWeight:'bold'}}>Products</h3>
            <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
               {
                   allHomeProducts.slice(0,6).map(allHomeProducts => <Product products={allHomeProducts}></Product>)
               }
             
             
            </div>
        </div>
       </div>
    );
};

export default HomeProducts;