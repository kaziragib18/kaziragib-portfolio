import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume text-start mt-5 pt-md-5">
            <div className="container">

                <div className="section-title d-flex">
                    <h5 className="pe-3">Resume</h5> <hr className="hr" />
                </div>
                <p className=""><button className="btn text-primary fs-6 underline ps-0 pe-1"><a href="https://drive.google.com/uc?export=download&id=1Yj1i5D7mQMX-Ar3y7eRXJ514WNFVFzPZ">Download</a></button>| <button className="btn text-primary fs-6 underline ps-0"><a target="_blank" href="https://drive.google.com/file/d/1Yj1i5D7mQMX-Ar3y7eRXJ514WNFVFzPZ/view?usp=sharing">View</a></button></p>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0 textJustify">
                            <h4>Kazi Md. Ragib</h4>
                            <p><em>Design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</em></p>
                            <p>
                                <ul className="fst-italic">
                                    <li>Chittagong, Bangladesh</li>
                                    <li>+880 01949 434546</li>
                                    <li>Kaziragib18@gmail.com</li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item textJustify">
                            <h4>Bachelor of Science in Computer Science &amp; Engineering</h4>
                            <h5>2016 - 2021</h5>
                            <p><em>North South University, Dhaka, Bangladesh</em></p>
                        </div>
                        <div className="resume-item textJustify">
                            <h4>Science</h4>
                            <h5>2013 - 2015</h5>
                            <p><em>Ispahani Public School &amp; College, Chittagong, Bangladesh</em></p>

                        </div>
                        <div className="resume-item textJustify">
                            <h4>Science</h4>
                            <h5>2004 - 2013</h5>
                            <p><em>Dhaka Collegiate School,Dhaka, Bangladesh</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Publication </h3>
                        <div className="resume-item textJustify">
                            <h4>Published my thesis paper at World Conference on Smart Trends in Systems, Security
                                and Sustainability (WorldS4).</h4>
                            <h5>July. 2019 ‐ Jan. 2020</h5>
                            <p><em>London, U.K</em></p>
                            <p>
                                <ul className="fst-italic">
                                    <li> Title: <a href="https://ieeexplore.ieee.org/document/9210259"> PakhiChini: Automatic Bird Species Identification Using Deep Learning </a></li>
                                    <li>In this paper, we propose a deep learning model that is capable of identifying individual birds from an input image. We tend to additionally
                                        leverage pretrained ResNet model as pretrained CNN networks with base model to encode the images.</li>
                                    <li>Conducted experiments will be using the entity of different dimensions, cast and celerity to study recognition performance. We achieved a top‐5 accuracy of 97.98% on our classifications.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="resume-item textJustify">
                            <h4>Online Courses</h4>
                            <h5>June 2021 - Nov 2021</h5>
                            <p><em>Complete Web Development Course - Programming Hero</em></p>
                            <p className="text-muted"><i>Learn to build a complete website with MongoDB, Express, React, Node.js</i></p>

                            <h5 className="mt-3">January 2021 - March 2021</h5>
                            <p><em>Responsive web design</em></p>
                            <p className="text-muted"><i>Learn to designing web pages by working on several projects .</i></p>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;