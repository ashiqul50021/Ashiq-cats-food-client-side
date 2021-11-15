import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../../images/banner-left-image.png';
import './Banner.css'

const Banner = () => {
    return (
       <div className="banner">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Give Your Cat a <br /><span>Healthy food</span></h1>
                    <Link class="btn btn-primary button" to="/allproducts" role="button">Explore!</Link>
                </div>
                <div className="col-md-6">
                    <img src={bannerimg} className='w-100 h-100' alt="" />
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;