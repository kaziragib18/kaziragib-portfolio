import React from 'react';
import image from '../../images/screencapture-viberance-home.png';
import Project4 from '../Project4/Project4';


const P4 = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="row portfolio-container">

            <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">
                <h3 className="textJustify">Viberance</h3>
                <hr className="hr" />
                <p className="fst-italic textJustify fs-5 mt-1">
                    Overview
                </p>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="fst-italic">
                            <li className="text-start"><i className="fas fa-chevron-right"></i>This is a fully responsive multipage farniture store website.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is developed using Html, Css, Sass and Vanilla Javascript.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website has responsive navbar with toggle Sidebar menu bar effect, navbar with slide in login / register form.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Also added Slide in cart to show the cart item that users will add to their inventory.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Added a side Navigation bar to give website a unique look.</li>

                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify pb-3">
                    <ul>
                        <li className="text-start text-info fst-italic"><i className="fas fa-chevron-right"></i>HTML, CSS, SASS, Vanila Javascript, Media Query, Vercel</li>
                    </ul>
                    <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
                </p>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Viberance</h4>
                        <p className="text-white"><a className="text-info" target="_blank" href="https://github.com/kaziragib18/Multipage-Store-website">Code Link <i className="fas fa-link"></i></a> | <a target="_blank" href="https://viberance-multipage-store-website.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>
                    </div>
                </div>
            </div>
            <Project4
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default P4;