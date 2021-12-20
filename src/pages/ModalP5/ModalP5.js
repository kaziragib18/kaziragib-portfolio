import React from 'react';
import image from '../../images/screencapture-fine-dine-2nd-half.png';

const ModalP5 = () => {
  return (
    <div className="row portfolio-container">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={image} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>WatchBox</h4>
            <p className="text-white">Code</p>

            <p className=""><a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-server">Server Side <i className="fas fa-link"></i></a></p>

            <p><a target="_blank" href="https://fine-dine-27aa6.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

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
              <li className="text-start"><i className="fas fa-chevron-right"></i>Fine Dine is a react cartering service delivary website</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Website is fully responsive build with react-bootstrap, has firebase authentication system as well as mongodb server.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>User is authenticated with firebase email/password validation, they can aslo sign in with google and logout system.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>User can reset or change their password by email validation</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>User can also order catering services which will be stored in mongodb database.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented a dashboard where we can add nad remove services as well as cancel order that user placed. Implemented Rest api with CRUD opertation.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Admin can make changes to the products and manage all the orders.</li>
            </ul>
          </div>

        </div>
        <p className="fst-italic textJustify fs-5">Technologies Used</p>
        <p className="textJustify">
          <ul className="fst-italic">
            <li className="text-start fst-italic"><i className="fas fa-chevron-right "></i>React, Metarial Ui, Context Api, CSS3, Express, MongoDB, Firebase, JWT, Heroku</li>
          </ul>
          <p className=""><a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-server">Server Side <i className="fas fa-link"></i></a> | 
          <a target="_blank" href="https://fine-dine-27aa6.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

        </p>
      </div>
    </div>
  );
};

export default ModalP5;