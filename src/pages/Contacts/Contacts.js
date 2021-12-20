import React from 'react';

const Contacts = () => {
    return (
        <section id="contact" className="contact text-start mt-5 pt-md-5">
            <div className="container">

                <div className="section-title d-flex">
                    <h5 className="pe-3">Contact</h5> <hr className="hr" />
                </div>
                {/* <p className="text-start fs-4">Contact Me</p> */}

                <div className="row mt-2">

                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="fas fa-street-view social"></i>
                            <h3>My Address</h3>
                            <p>Dampara, Chittagong, Bangladesh</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="fas fa-share-alt social"></i>
                            <h3>Social Profiles</h3>
                            <div className="media">
                                <a href className="twitter text-light p-2"><i className="fab fa-twitter"></i></a>
                                <a href className="facebook text-light p-2"><i className="fab fa-facebook"></i></a>
                                <a href className="instagram text-light p-2"><i className="fab fa-instagram"></i></a>
                                <a href className="linkedin text-light p-2"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="far fa-envelope social"></i>
                            <h3>Email Me</h3>
                            <p>kaziragib18@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="fas fa-phone-volume social"></i>
                            <h3>Call Me</h3>
                            <p>+880 1949 434546</p>
                        </div>
                    </div>
                </div>

                <form className="php-email-form mt-4">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3 d-none">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center my-4"><button type="submit">Send Message</button></div>
                </form>

            </div>
        </section>
    );
};

export default Contacts;