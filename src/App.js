import React, {Component} from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Checkout from "./containers/Checkout/Checkout";
import CinemaBuilder from "./containers/CinemaBuilder/CinemaBuilder";


class App extends Component {
        render() {
            return (
            <BrowserRouter>
                <Switch>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/" exact component={CinemaBuilder}/>
                </Switch>
            </BrowserRouter>
            )
        }
}

export default App;
