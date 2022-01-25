import React from 'react';
import image from '../../images/demo package.png';

const ModalP0 = () => {
  return (
    <div className="row portfolio-container">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={image} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Dazzle</h4>
            <p className="text-white">Code</p>

            <p className=""><a target="_blank" href="https://dazzle-photography-website.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Dazzle-photography-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Dazzle-photography-website-server">Server Side <i className="fas fa-link"></i></a></p>

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
              <li className="text-start"><i className="fas fa-chevron-right"></i>This is a fully responsive photography website design with with material ui, styled components, html & Css.  </li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Aos used to
                for ui animation & sweetalert for popup alert.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented mui calender with date-fns where user will use it to select event date and sort order later in dashboard.
              </li>
              <li className="text-start"><i className="fas fa-chevron-right"></i> Here user can cancel their order and pay for it via stripe gateway.
              </li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>User can also add star review and upload their image from local drive. </li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Dashboard is secure with admin and private route, where admin has access to manage, add package, assign new admin.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Dashboard is secure with admin and private route,
                where admin has access to manage, add package, assign new admin.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented Firebase Authentication with email, password, google sign in & logout. </li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>All api data is stored in backend mongodb database and it is hosted in Heroku cloud platform.</li>
            </ul>
          </div>

        </div>
        <p className="fst-italic textJustify fs-5">Technologies Used</p>
        <p className="textJustify">
          <ul>
            <li className="text-start"><i className="fas fa-chevron-right"></i>React, HTML, CSS, Styled Components, Material Ui, AOS, Sweetalert, Node js, Express, MongoDB, Firebase, Heroku, Stripe, JWT</li>
          </ul>

          <p className=""><a target="_blank" href="https://dazzle-photography-website.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Dazzle-photography-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/Dazzle-photography-website-server">Server Side <i className="fas fa-link"></i></a></p>

        </p>
      </div>
    </div>
  );
};

export default ModalP0;