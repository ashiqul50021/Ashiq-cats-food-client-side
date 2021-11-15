import React from 'react';

const Manageallorder = (props) => {
    const { img, name, email, number } = props.manageOrder;
    return (
        <div className="col">
            <div className="card h-100  p-1 mb-5 bg-body rounded border-0">
                <img src={img} className="card-img-top rounded" alt="..." height="100%" />
                <div className="card-body">
                    <h5 style={{ alignItems: 'left' }} className="card-title">{name}</h5>

                    <small>Email: {email}</small>

                    <p>phone: {number}</p>

                    {/* <Link className="btn mt-1 btn-dark" to={`/booking/${_id}`} role="button">Book {name}</Link> */}
                </div>







            </div>
        </div>
    );
};

export default Manageallorder;