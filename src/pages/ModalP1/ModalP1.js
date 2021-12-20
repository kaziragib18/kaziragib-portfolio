import React from 'react';
import image from '../../images/screencapture-Watchbox.png';

const ModalP1 = () => {
    return (
        <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>WatchBox</h4>
                        <p className="text-white">Code</p>

                        <p className=""><a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-watchBox-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-watchBox-website-server">Server Side <i className="fas fa-link"></i></a></p>

                        <p><a target="_blank" href="https://watchbox-2021.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

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
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Developed a Full Stack hand watch product selling website</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>There are dashboards for User and Admin but admin has extra privileges.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is build with Firebase authentication system. Implemented email, password signup nad login as well as google signin method.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>An authenticated user can choose and orders product items</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Private routes are authenticated with JWT Token for secure browsing</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>User can use the dashboard and see his/her order list and can make changes to their order and delete order.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Equipped with Admin authentication, where admin can make changes to the products and manage all the orders. The admin routes only be shown if admin logs in.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Admin can assign new admin to new user if he wants from admin dashbord</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented a review giving system for users.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is hosted on Firebase and the server is in Heroku cloud platform.</li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul className="fst-italic">
                        <li className="text-start fst-italic"><i className="fas fa-chevron-right "></i>React, Metarial Ui, Context Api, CSS3, Express, MongoDB, Firebase, JWT, Heroku</li>
                    </ul>
                    <p className=""><a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-watchBox-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-watchBox-website-server">Server Side <i className="fas fa-link"></i></a>| <a target="_blank" href="https://watchbox-2021.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>
                </p>
            </div>
        </div>
    );
};

export default ModalP1;