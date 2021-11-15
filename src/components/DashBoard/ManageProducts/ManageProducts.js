import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [Allproducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/allproducts')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    } ,[]);

    const handleDelete = id => {
        const url = `https://fast-fjord-41602.herokuapp.com/allproducts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = Allproducts.filter(allproduct => allproduct._id !== id);
                setAllProducts(remaining);
            }
            


        })

    }
    return (
        <div>
            <h2>manage Product </h2>
            {
                Allproducts.map(allproduct => <div key={allproduct._id}>
                    <h3>{allproduct.name}</h3>
                    <img src={allproduct.img} alt="" />
                    <button onClick={() => handleDelete(allproduct._id)} className="btn btn-danger">delete</button>

                </div>)
            }
        </div>
    );
};
export default ManageProducts;