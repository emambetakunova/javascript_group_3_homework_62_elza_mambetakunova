import React from 'react';
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import './Blog.css'

const Blog = (props) => {
    return (
            <div className="Blog Container">
                <Header/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium beatae, veritatis nemo laboriosam provident ipsum excepturi blanditiis voluptatum, quas aut! Maxime dolores doloremque recusandae, cum sequi, numquam qui provident.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium beatae, veritatis nemo laboriosam provident ipsum excepturi blanditiis voluptatum, quas aut! Maxime dolores doloremque recusandae, cum sequi, numquam qui provident.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium beatae, veritatis nemo laboriosam provident ipsum excepturi blanditiis voluptatum, quas aut! Maxime dolores doloremque recusandae, cum sequi, numquam qui provident.</p>
                <Footer />
            </div>
    )
};

export default Blog;