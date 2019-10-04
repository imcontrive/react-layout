import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { products } = this.props.productsInfo;
    console.log(products, "swedrftgyhjk");
    return (
      <div className="isWrapper">
        {products
          ? products.map((product, ind) => (
              <div className="box" key={ind + 1}>
                {product.name}
              </div>
            ))
          : ""}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productsInfo: state.productsInfo
  };
}

export default connect(mapStateToProps)(Home);
