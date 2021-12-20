import React from 'react';
import image from '../../images/screencapture-soul-burger-2nd-half.png';

const ModalP6 = () => {
    return (
        <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>SOUL BURGER</h4>
                        <p className="text-white">Code</p>

                        <p className=""><a target="_blank" href="https://soul-burger-2021-kaziragib18.netlify.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Soul-Burger-2.0">Code Link <i className="fas fa-link"></i></a></p>


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
                            <li className="text-start"><i className="fas fa-chevron-right"></i>This is a full responsive resurant landing page.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is developed using Html, Css, Sass and Vanilla Javascript.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is design with light and dark mode that has a toogle switch activation button</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The site also has a scroll reveal animation which give smooth and beautiful view while scrolling..</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Designed cards with fontawesome icons, contact section and a beautiful footer</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is hosted on Netlify.</li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul>
                        <li className="text-start"><i className="fas fa-chevron-right"></i>Html, Css, SASS, Vanilla javascript, Media Query, Scroll Reveal, Font Awesome, Netlify</li>
                    </ul>

                    <p className=""><a target="_blank" href="https://soul-burger-2021-kaziragib18.netlify.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Soul-Burger-2.0">Code Link <i className="fas fa-link"></i></a></p>

                </p>
            </div>
        </div>
    );
};

export default ModalP6;