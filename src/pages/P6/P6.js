import React from 'react';
import image from '../../images/screencapture-soul-burger-half.png';
import Project6 from '../Project6/Project6';


const P6 = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="row portfolio-container">

            <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">
                <h3 className="textJustify">SOUL BURGER</h3>
                <hr className="hr" />
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
                <p className="textJustify pb-3">
                    <ul className="fst-italic">
                        <li className="text-start text-info"><i className="fas fa-chevron-right"></i>Html, Css, SASS, Vanilla javascript, Media Query, Scroll Reveal, Font Awesome, Netlify</li>
                    </ul>
                    <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
                </p>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Soul Burger</h4>
                        <p className="text-white">Code</p>

                        <p className=""><a target="_blank" href="https://soul-burger-2021-kaziragib18.netlify.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Soul-Burger-2.0">Code Link <i className="fas fa-link"></i></a></p>
                    </div>
                </div>
            </div>
            <Project6
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default P6;