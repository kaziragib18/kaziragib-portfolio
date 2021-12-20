import React from 'react';
import image from '../../images/half-travelicious-agency-website.png';
import Project3 from '../Project3/Project3';


const P3 = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Travelicious</h4>
                        <p className="text-white"><a className="text-info" target="_blank" href="https://github.com/kaziragib18/Travelicious-agency-website">Code Link <i className="fas fa-link"></i></a> | <a target="_blank" href="https://travelicious-agency-website.vercel.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>


                    </div>
                </div>
            </div>

            <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">
                <h3 className="textJustify">Tavelicious</h3>
                <hr className="hr" />
                <p className="fst-italic textJustify fs-5 mt-1">
                    Overview
                </p>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="fst-italic">
                            <li className="text-start"><i className="fas fa-chevron-right"></i>This is a complete responsive tours and travel website design</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website is developed using html, css and vanilla javascript.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>The website has responsive navbar with toggle menu bar effect, navbar with onclick search bar as well as pop up login / register form.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Designed the website with booking section form, package cards as well as image gallary.</li>
                            <li className="text-start"><i className="fas fa-chevron-right"></i>Used sweeper.js carousel in Review card and Brand cards to give more dynamic look to the website </li>
                        </ul>
                    </div>

                </div>
                <p className="fst-italic textJustify fs-5">Technologies Used</p>
                <p className="textJustify">
                    <ul className="fst-italic">
                        <li className="text-start text-info"><i className="fas fa-chevron-right"></i>HTML, CSS, Vanilla Javascript, Media Queries, Sweeper.js, Vercel</li>
                    </ul>
                    <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
                </p>
            </div>
            <Project3
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default P3;