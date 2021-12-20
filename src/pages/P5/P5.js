import React from 'react';
import image from '../../images/screencapture-fine-dine-half.png';
import Project5 from '../Project5/Project5';


const P1 = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="row portfolio-container mt-3">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={image} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Fine Dine</h4>
            <p className="text-white">Code</p>

            <p className=""><a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-client">Client Side <i className="fas fa-link"></i></a> | <a className="text-info" target="_blank" href="https://github.com/kaziragib18/react-fine-dine-website-server">Server Side <i className="fas fa-link"></i></a> |
              <a target="_blank" href="https://fine-dine-27aa6.web.app/">Live Site <i className="fas fa-external-link-alt"></i></a></p>

          </div>
        </div>
      </div>

      <div className="col-lg-8 pt-4 pt-lg-0 content project" data-aos="fade-left">
        <h3 className="textJustify">Fine Dine</h3>
        <hr className="hr" />
        <p className="fst-italic textJustify fs-5 mt-1">
          Overview
        </p>
        <div className="row">
          <div className="col-lg-12">
            <ul className="fst-italic">
              <li className="text-start"><i className="fas fa-chevron-right"></i>Fine Dine is a react cartering service delivary website</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Website is fully responsive build with react-bootstrap, has firebase authentication system as well as mongodb server.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>User is authenticated with firebase email/password validation, they can aslo sign in with google.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Implemented a dashboard where we can add nad remove services as well as cancel order that user placed. Implemented Rest api with CRUD opertation.</li>
              <li className="text-start"><i className="fas fa-chevron-right"></i>Admin can make changes to the products and manage all the orders.</li>
            </ul>
          </div>

        </div>
        <p className="fst-italic textJustify fs-5">Technologies Used</p>
        <p className="textJustify">
          <ul className="fst-italic">
            <li className="text-start text-info"><i className="fas fa-chevron-right"></i>React, React Bootstrap, CSS3, Bootstrap5, Context Api, Express, MongoDB, Firebase authentication and hosting, Heroku</li>
          </ul>
          <button onClick={() => setModalShow(true)} className="btn bg-dark text-white details fst-italic">More Details</button>
        </p>
      </div>

      <Project5
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default P1;