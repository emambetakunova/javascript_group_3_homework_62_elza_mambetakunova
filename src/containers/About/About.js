import React, {Fragment} from 'react';
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import './About.css'

const About = (props) => {
    return (
        <Fragment>
            <div className="About Container">
                <Header/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium beatae, veritatis nemo laboriosam provident ipsum excepturi blanditiis voluptatum, quas aut! Maxime dolores doloremque recusandae, cum sequi, numquam qui provident.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium beatae, veritatis nemo laboriosam provident ipsum excepturi blanditiis voluptatum, quas aut! Maxime dolores doloremque recusandae, cum sequi, numquam qui provident.</p>
                <Footer />
            </div>
        </Fragment>
    )
};

export default About;