import React from "react";
import { connect, ConnectedProps } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

import * as burgerBuilderActions from "../../store/actions/index";

import Spinner from "../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router";
import {
  BurgerBuilderState,
  ingredients,
} from "../../store/reducers/burgerBuilder";

class BurgerBuilder extends React.Component<RouteComponentProps & mappedProps> {
  state = {
    purchasing: false,
    loading: false,
    error: null,
  };

  componentDidMount() {
    // axios
    //   .get("ingredients.json")
    //   .then((res) => {
    //     this.setState({ ingredients: res.data });
    //   })
    //   .catch((e) => {
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState(ingredients: ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey): number => {
        return ingredients[igkey];
      })
      .reduce((sum, e) => {
        return sum + e;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo: { [key: string]: boolean } = {
      salad: false,
      bacon: false,
      cheese: false,
      meat: false,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = this.props.ings[key] <= 0;
    }

    let orderSummary: JSX.Element | null = null;

    let burger = this.state.error ? <p>Network Error</p> : <Spinner />;
    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price.toFixed(2)}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = (state: BurgerBuilderState) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = {
  onIngredientAdded: (ingName: string) =>
    burgerBuilderActions.addIngredient(ingName),
  onIngredientRemoved: (ingName: string) =>
    burgerBuilderActions.removeIngredient(ingName),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type mappedProps = ConnectedProps<typeof connector>;

export default connector(withErrorHandler(BurgerBuilder, axios));
