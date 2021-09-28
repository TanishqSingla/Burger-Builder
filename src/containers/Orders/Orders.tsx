import React from "react";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Order from "../../components/Order/Order";
import { ingredients } from "../../store/reducers/burgerBuilder";

interface orderData {
  country: string;
  deliveryMethod: string;
  email: string;
  name: string;
  street: number;
  zip: number;
}

interface order {
  id: string;
  ingredients: ingredients;
  orderData: orderData;
  price: number;
}

class Orders extends React.Component {
  state = {
    orders: [] as order[],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders: string[] = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((_) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
