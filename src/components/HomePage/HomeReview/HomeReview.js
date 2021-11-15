import React, { useEffect, useState } from 'react';

const HomeReview = () => {
    const [homeReview, setHomeReview] = useState([])
    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setHomeReview(data))
    } ,[]);

    return (
        <div>
            <h2>hi i am home review</h2>
            {
            homeReview.map(homeReview => <div>
                <h3>{homeReview.name}</h3>
                <p>{homeReview.description}</p>
                <button  className="btn btn-danger">delete</button>

            </div>)
        }
        </div>
    );
};

export default HomeReview;