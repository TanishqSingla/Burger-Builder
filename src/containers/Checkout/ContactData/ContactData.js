import React from "react";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type={"text"} name={"name"} placeholder={"Your Name"} />
          <input type="email" name="email" />
          <input type="text" name="street" placeholder={"Street"} />
          <input type="text" name="postal" placeholder={"Postal Code"} />
        </form>
      </div>
    );
  }
}
