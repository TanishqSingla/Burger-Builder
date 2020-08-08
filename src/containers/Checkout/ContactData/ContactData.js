import React from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: "Tanishq Singla",
      address: {
        street: "Baker Street",
        zip: "123456",
        country: "London",
      },
      email: "test@email.com",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((e) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type={"text"} name={"name"} placeholder={"Your Name"} />
        <input type="email" name="email" placeholder={"Your Email"} />
        <input type="text" name="street" placeholder={"Street"} />
        <input type="text" name="postal" placeholder={"Postal Code"} />
        <Button btnType={"Success"} clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
