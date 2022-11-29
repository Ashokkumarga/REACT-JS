import React from "react";

class Product extends React.Component {
  state = {
    Product_qty: 1,
    object1: {
      Product_Name: "APPLE iPhone 13 (Starlight, 128 GB)",
      Product_img:
        "https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70 ",
      Product_Price: 65999,
      Product_qty0: 1,
      Product_Total: 65999,
    },
  };
  incrhandler = (incr) => {
    this.setState({});
  };

  render() {
    return (
      <>
        <hr></hr>
        <h1>PRODUCT COMPONENT </h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.object1.Product_Name}</td>
              <td>
                <img
                  src={this.state.object1.Product_img}
                  alt=""
                  height="220px"
                />
              </td>
              <td>{this.state.object1.Product_Price}</td>
              <td>
                <i
                  className="fa fa-minus-circle"
                  onClick={this.dcrhandler.bind(this.state.Product_qty - 1)}
                ></i>{" "}
                {this.state.Product_qty}{" "}
                <i
                  className="fa fa-plus-circle"
                  onClick={this.incrhandler.bind(this.state.Product_qty + 1)}
                ></i>
              </td>
              <td>
                {this.state.object1.Product_qty0 *
                  this.state.object1.Product_Price}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default Product;
