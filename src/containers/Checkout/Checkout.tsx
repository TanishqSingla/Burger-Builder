import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { storeState } from "../../store/reducers/burgerBuilder";

class Checkout extends React.Component {
  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutConfirmed = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelled}
          checkoutConfirmed={this.checkoutConfirmed}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: storeState) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);