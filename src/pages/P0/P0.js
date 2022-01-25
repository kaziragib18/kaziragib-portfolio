import React from 'react';
import image from '../../images/dazzle home.png';
import Project0 from '../Project0/Project0';


const P0 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="row portfolio-container">

      <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">
        <h3 className="textJustify">Dazzle</h3>
        <hr className="hr" />
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
              <li className="text-start"><i className="fas fa-chevron-right"></i>User can also add star review and upload their image from local drive.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Dashboard is secure with admin and private route,
                where admin has access to manage, add package, assign new admin.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented Firebase Authentication with email, password, google sign in & logout.</li>
            </ul>
          </div>

        </div>
        <p className="fst-italic textJustify fs-5">Technologies Used</p>
        <p className="textJustify pb-3">
          <ul className="fst-italic">
            <li className="text-start text-info"><i className="fas fa-chevron-right"></i>React, HTML, CSS, Styled Components, Material Ui, AOS, Sweetalert, Node js, Express, MongoDB, Firebase, Heroku, Stripe, JWT</li>
          </ul>
          <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
        </p>
      </div>

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
      <Project0
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default P0;