import React from 'react';
import image from '../../images/screencapture-viberance-shop.png';

const ModalP4 = () => {
    return (
        <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Viberance</h4>
                        <p className="text-white"><a className="text-info" target="_blank" href="https://github.com/kaziragib18/Multipage-Store-website">Code Link <i className="fas fa-link"></i></a></p>
                        <p><a target="_blank" href="https://viberance-multipage-store-website.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

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
                            <li className="text-start"><i className="fas fa-chevron-right"></i>This is a full responsive multipage farniture store website.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is developed using Html, Css, Sass and Vanilla Javascript.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website has responsive navbar with toggle Sidebar menu bar effect, navbar with slide in login / register form.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Also added Slide in cart to show the cart item that users will add to their inventory.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Added a side Navigation bar to give website a unique look.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Added animation in the website to give it more dymanic feel.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The Website has a Shop page where all the products will be displayed.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Add a blog, about page with beautiful card design.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Designed a contact page with map location on it and beatiful footer for the website.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is hosted on vercel.</li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul>
                        <li className="text-start fst-italic"><i className="fas fa-chevron-right"></i>Html, CSS, SASS, Vanila Javascript, Media Query, Vercel</li>
                    </ul>
                    <p className="text-white"><a className="text-info" target="_blank" href="https://github.com/kaziragib18/Multipage-Store-website">Code Link <i className="fas fa-link"></i></a> | <a target="_blank" href="https://viberance-multipage-store-website.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

                </p>
            </div>
        </div>
    );
};

export default ModalP4;