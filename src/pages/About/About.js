import React from 'react';
// import image2 from '../../images/2.png'


const About = () => {
    return (
        <section id="about" className="about">

            <div className="about-me container">

                <div className="section-title d-flex">
                    <h5 className="pe-3">About</h5> <hr className="hr" />
                </div>
                {/* <p className="text-start display-6 fw-bold">Learn more about me</p> */}

                <div className="row">
                    {/* <div className="col-lg-4" data-aos="fade-right">
                        <img src={image2} className="w-75 d-none d-md-inline-block" alt="" />
                    </div> */}
                    <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3 className="textJustify pt-3">Web Developer &amp; Designer</h3>
                        <p className="fst-italic textJustify">
                            {/* <hr className="hr" /> */}
                            I have completed my graduation in Computer Science and Engineering. I'm a young adult with a zeal to develop software that benefits people and lives. Passionate about web development, design and human-computer interaction. Looking to broaden my horizon in the field of technology. I made websites as my personal projects. I’m looking forward to bringing that passion to a full-time role in a company.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="fst-italic">
                                    <li><i className="fas fa-chevron-right"></i><strong >Phone: </strong> <span>+880 1754 063712</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="fst-italic">
                                    <li><i className="fas fa-chevron-right"></i><strong>Email: </strong> <span>kaziragib18@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="textJustify fst-italic">
                            I would like to bring your attention to my key strengths- <br />

                            • Strong command in HTML5, CSS3, SASS, Bootstrap, JavaScript, ES6, React, React Router, Bootstrap, Firebase,
                            Node.js, Express, MongoDB, Stripe

                            • Knowledge of Languages: JavaScript, Python, C

                            • I have some good knowledge in Object-oriented programming and basic problem-solving.

                            • I have done 10+ personal projects in web development

                            • I have successfully completed the programming hero web development course.

                            {/* • I have done my university thesis on machine learning.For details
                            <a href="https://sites.google.com/diu.edu.bd/bhr/document?authuser=0"> click here</a> */}

                            •  One thing I can assure you is that I am able to grasp new concepts quickly.
                        </p>
                        {/* <hr className="hr" /> */}
                        <p className="textJustify fst-italic">
                            I've also familiar with a range a technologies in the web development world. From front-end design to full stack development. Here the list of technologies i have worked with - <br />
                            • I have exlpored in Libraries like Metarial Ui, Tailwind, Chackra Ui, Nextjs, JWT, Styled Components. Also familiar with, Redux, Redux toolkit, Mapbox‐gl.
                            • I Like to work with
                            tools &amp; platforms like VS Code, Heroku, Brakets, Netlify, Firebase, MongoDB, Mongoose, Postman, Slack, Trello, Latex, Sublime text, Codeblocks, Git, Github.

                        </p>
                    </div>
                </div>

            </div>


            {/* <div className="counts container">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="far fa-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">0</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="fas fa-project-diagram"></i>
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">8+</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-headset"></i>
                            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">0</span>
                            <p>Hours of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-award"></i>
                            <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter">2</span>
                            <p>Awards</p>
                        </div>
                    </div>

                </div>

            </div> */}
        </section>
    );
};

export default About;