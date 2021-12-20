import React from 'react';
import image1 from '../../images/cv-removebg-4.png'


const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-5 text-start my-md-auto">
                        <div>
                            <h1>Kazi Md. Ragib</h1>

                            <div className="wrapper d-md-inline-flex  pt-3">
                                <div style={{padding:"1.75px"}} className="static-txt me-3 fs-md-3 fw-bold">I'm a passionate</div>
                                <ul className="dynamic-txts ps-2 ">
                                    <li className="fs-md-3 ps-2 ps-md-0"><span style={{fontWeight:"bold"}}>Front End Developer</span></li>
                                </ul>
                            </div>
                            <div className="static-txt me-3 fs-md-3">Chittagong, Bangladesh</div>

                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li><a className="nav-link active" href="#header">Home</a></li>
                                    <li><a className="nav-link" href="#about">About</a></li>
                                    <li><a className="nav-link" href="#resume">Resume</a></li>
                                    <li><a className="nav-link" href="#services">Blogs</a></li>
                                    <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                    <li><a className="nav-link" href="#contact">Contact</a></li>
                                </ul>
                                <i className="fab fa-list mobile-nav-toggle"></i>
                            </nav>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kazi-md-ragib-580a5219b/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/kaziragib18" className="linkedin"><i className="fab fa-github"></i></a>
                                <a href="https://kaziragib18.medium.com/" className="facebook"><i className="fab fa-medium"></i></a>
                                <a href className="twitter"><i className="fab fa-twitter"></i></a>
                                

                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 text-md-end">
                        <img src={image1} alt="" className="MyImage w-75" />
                    </div>

                </div>
            </div>
        </header >
    );
};

export default Header;