import React, { useEffect, useState } from 'react';
// import Manageallorder from './Manageallorder';

const Manageallorders = () => {
    const [manageallorders, setManageallorders] = useState([])
    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/placeorders')
        .then(res => res.json())
        .then(data => setManageallorders(data))
    } ,[]);

    const handleDelete = id => {
        const url = `https://fast-fjord-41602.herokuapp.com/placeorders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = manageallorders.filter(manageallorder => manageallorder._id !== id);
                setManageallorders(remaining);
            }
            


        })

    }
    return (
        <div>
        <h2>manage Product </h2>
        {
            manageallorders.map(manageallorder => <div key={manageallorder._id}>
                <h3>{manageallorder.name}</h3>
                <img src={manageallorder.img} alt="" />
                <button onClick={() => handleDelete(manageallorder._id)} className="btn btn-danger">delete</button>

            </div>)
        }
    </div>
);
};
export default Manageallorders;