import React from 'react';

const Interest = () => {
    return (
        <div className="interests container pt-5">

            <div className="section-title d-flex mt-5">
                <h5 className="pe-3">Interests</h5> <hr className="hr" />
            </div>

            <div className="row mt-4">
                <div className="col-lg-3 col-md-4 ">
                    <div className="icon-box">
                        <i className="fas fa-passport text-success"></i>
                        <h3>Web Developing</h3>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i className="fas fa-drafting-compass text-primary"></i>
                        <h3>Web Designing</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0 ">
                    <div className="icon-box">
                        <i className="fas fa-code text-info"></i>
                        <h3>Problem Solving</h3>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div className="icon-box">
                        <i className="fas fa-chart-bar text-beguni"></i>
                        <h3>Math</h3>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="far fa-calendar-alt text-pink"></i>
                        <h3>Technology</h3>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="fas fa-robot text-warning"></i>
                        <h3>Machine Learning</h3>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                        <i className="fas fa-database text-green"></i>
                        <h3>Database</h3>
                    </div>
                </div>


                <div className="col-lg-3 col-md-4 mt-4 ">
                    <div className="icon-box">
                        <i className="fas fa-book text-yellow"></i>
                        <h3>Reading</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Interest;