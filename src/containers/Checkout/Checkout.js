import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route, Switch} from "react-router-dom";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import ContactData from "./ContactData/ContactData";


class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);

        const ingredients = {};

        for (let param of query.entries()) {
            ingredients[param[0]] = parseInt(param[1]);
        }
        this.setState({ingredients})
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    };

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <Fragment>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData ingredients={this.state.ingredients} />
                    )}
                />
            </Fragment>
        )

    }


};

export default Checkout;