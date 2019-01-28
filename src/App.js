import React, {Component} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CinemaBuilder from "./containers/CinemaBuilder/CinemaBuilder";
import About from "./containers/About/About";
import Blog from "./containers/Blog/Blog";


class App extends Component {
        render() {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={CinemaBuilder}/>
                        <Route path="/about" component={About}/>
                        <Route path="/blog" component={Blog}/>
                    </Switch>
                </BrowserRouter>


            )
        }
}

export default App;
