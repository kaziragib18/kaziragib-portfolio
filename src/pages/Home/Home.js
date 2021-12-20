import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Interest from '../Interest/Interest';
import Resume from '../Resume/Resume';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

const Home = () => {

    return (
        <div>
            <Header />

            <About />

            <Skills />

            <Interest />

            <Resume />

            <Services />

            <Projects />

            <Contacts />
            <div className="py-5">
                <small className="text-muted">Developed by Kazi Md. Ragib <br />copywrite ©kaziragib18</small>
            </div>


        </div >
    );
};

export default Home;