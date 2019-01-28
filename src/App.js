import React, {Component} from 'react';
import MovieContent from './components/MovieComponent/Movie';
import Header from './components/HeaderComponent/Header';
import Sidebar from "./components/SidebarComponent/Sidebar";
import Footer from "./components/FooterComponent/Footer";
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <Header home={'home'} about={'about'} movies={'movies'}/>
                </div>
                <div className="wrapper">
                    <div className="movieWrap">
                        <MovieContent name="Ralph 2" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/43000/43031/PosterDynamic/66364.jpg"/>
                        <MovieContent name="Venom" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/53400/53391/PosterDynamic/46534.jpg"/>
                        <MovieContent name="Mortal Engines" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/52600/52559/PosterDynamic/43806.jpg"/>
                        <MovieContent name="Nobody's Fool" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/55400/55424/PosterDynamic/66735.jpg"/>
                        <MovieContent name="Dr. Seuss' The Grinch" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/44500/44521/PosterDynamic/66594.jpg"/>
                        <MovieContent name="The Front Runner" released={2018}
                                      img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/57500/57501/PosterDynamic/66795.jpg"/>
                    </div>
                    <div className="sidebar">
                        <h4>Movie review: </h4>
                        <Sidebar name="Ralph 2" released={2018}
                                 review={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                        <Sidebar name="Venom" released={2018}
                                 review={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                        <Sidebar name="Mortal Engines" released={2018}
                                 review={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    </div>
                </div>
                <div className="footer">
                    <Footer text={'Copyright 2018 by Elza Studio'}/>
                </div>
            </div>
        );
    }
}

export default App;
