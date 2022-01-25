import React from 'react';
import P0 from '../P0/P0';
import P1 from '../P1/P1';
import P2 from '../P2/P2';
import P3 from '../P3/P3';
import P4 from '../P4/P4';
import P5 from '../P5/P5';
import P6 from '../P6/P6';


const Projects = () => {

    return (
        <section id="portfolio" className="portfolio mt-5 pt-md-5">
            <div className="container">

                <div className="section-title d-flex">
                    <h5 className="pe-3 pb-4">Portfolio</h5> <hr className="hr" />
                </div>
                {/* <p className="text-center fs-4">My Works</p>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center mb-5">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-web">Web</li>
                            <li data-filter=".filter-app">App</li>
                        </ul>
                    </div>
                </div> */}

                {/* projects list */}

                <P0 />
                <div className="py-5">
                </div>
                <P1 />
                <div className="py-5">
                </div>
                <P2 />
                <div className="py-5">
                </div>
                <P3 />
                <div className="py-5">
                </div>
                <P4 />
                <div className="py-5">
                </div>
                <P5 />
                <div className="py-5">
                </div>
                <P6 />


            </div>

        </section>
    );
};

export default Projects;