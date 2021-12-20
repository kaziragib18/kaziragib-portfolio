import React from 'react';
import image from '../../images/screencapture-grace-e-commerce.png';

const ModalP2 = () => {
    return (
        <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>GRACE.</h4>
                        <p className="text-white">Code</p>

                        <p className=""><a target="_blank" href="https://grace-e-commerce-website-client.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Grace-E-commerce-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Grace-E-commerce-website-server">Server Side <i className="fas fa-link"></i></a></p>


                    </div>
                </div>
            </div>

            <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">

                <p className="fst-italic textJustify fs-5 mt-1">
                    Overview
                </p>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="fst-italic">
                            <li className="text-start"><i className="fas fa-chevron-right"></i>This is a React.js Ecommerce app created with Styled Components and responsive design for mobile users. </li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>UI is designed with React shopping
                                cart and product filtering.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented react rudex to store items in the shopping cart</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Here user can find, sort, order products &amp; add to the cart.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>User can pay via Stripe payment method.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Product are stored in Mongodb server which is deployed in Heroku. The website hosted in Vercel.</li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul>
                        <li className="text-start"><i className="fas fa-chevron-right"></i>React, Styled Components, Express, MongoDB, Vercel, Heroku, Stripe, MongoDB Authentication, Redux,
                            CryptoJs, JWT.</li>
                    </ul>

                    <p className=""><a target="_blank" href="https://grace-e-commerce-website-client.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Grace-E-commerce-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Grace-E-commerce-website-server">Server Side <i className="fas fa-link"></i></a></p>

                </p>
            </div>
        </div>
    );
};

export default ModalP2;