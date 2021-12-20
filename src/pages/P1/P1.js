import React from 'react';
import image from '../../images/Watchbox.png';
import Project1 from '../Project1/Project1';


const P1 = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="row portfolio-container mt-3">

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
                <h3 className="textJustify">WatchBox</h3>
                <hr className="hr" />
                <p className="fst-italic textJustify fs-5 mt-1">
                    Overview
                </p>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="fst-italic">
                            <li className="text-start"><i className="fas fa-chevron-right"></i>WatchBox is a full mern stack watch selling website</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>There are dashboards for User and Admin</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>An authenticated user can choose and orders product items</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>User can use the dashboard and see his/her order list and can make
                                changes to their order.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Admin can make changes to the products and manage all the orders.</li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul  className="fst-italic">
                        <li className="text-start text-info"><i className="fas fa-chevron-right"></i>React, Metarial ui, Context Api, CSS3, Express, MongoDB, Firebase, JWT, Heroku</li>
                    </ul>
                    <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
                </p>
            </div>

            <Project1
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default P1;