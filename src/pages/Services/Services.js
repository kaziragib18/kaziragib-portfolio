import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services mt-5 pt-md-5">
            <div className="container">

                <div className="section-title d-flex">
                    <h5 className="pe-3">Blogs</h5> <hr className="hr" />
                </div>
                {/* <p className="text-start fs-4">My Blogs</p> */}

                <div className="row mt-3  ps-md-0">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch ocr">
                        <div className="icon-box ">

                            <h4 className="textHover fst-italic fs-5"><a href>JavaScript Blog</a></h4>
                            <h4 className="textHover fst-italic fs-4">Understanding Promises in JavaScript</h4>
                            <button className="textHover btn text-white bg-light"> <a className=" fst-italic" href="https://kaziragib18.medium.com/understanding-promises-in-javascript-e786a8256b14">Read More</a> </button>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0  pythonProgramming">
                        <div className="icon-box ">

                            <h4 className="textHover fst-italic fs-5"><a href>Git Blog</a></h4>
                            <h4 className="textHover fst-italic fs-3">Understanding Git and GitHub</h4>
                            <button className="textHover btn text-white bg-light"> <a className=" fst-italic" href="https://kaziragib18.medium.com/understanding-git-and-github-40f3fdfb90f">Read More</a> </button>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 basic">

                        <div className="icon-box ">

                            <h4 className="textHover fst-italic fs-5"><a href>HTML Blog</a></h4>
                            <h4 className="textHover fst-italic fs-4">HTML Tags That Will Come in handy</h4>
                            <button className="textHover btn text-white bg-light"> <a className=" fst-italic" href="https://kaziragib18.medium.com/html-tags-that-will-come-in-handy-df7e923ac2b3">Read More</a> </button>

                        </div>

                    </div>

                    {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 robot">
                        <div className="icon-box">
                            <div className="icon textHover text-white"><i className="fas fa-wifi"></i></div>
                            <h4 className="textHover text-white"><a href>Comming Soon</a></h4>
                            <h5 className="textHover">Blog comming soon. Thanks for your interest</h5>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 fire">
                        <div className="icon-box">
                            <div className="icon textHover text-white"><i className="fas fa-wifi"></i></div>
                            <h4 className="textHover text-white"><a href>Comming Soon</a></h4>
                            <h5 className="textHover">Blog comming soon. Thanks for your interest</h5>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 node">
                        <div className="icon-box">
                            <div className="icon textHover text-white"><i className="fas fa-wifi"></i></div>
                            <h4 className="textHover text-white"><a href>Comming Soon</a></h4>
                            <h5 className="textHover">Blog comming soon. Thanks for your interest</h5>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    );
};

export default Services;