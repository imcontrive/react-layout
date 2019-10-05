import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "./Product";

class Home extends Component {
  render() {
    const { products } = this.props.productsInfo;
    return (
      <div className="isWrapper">
        <div className="grid">
          {products
            ? products.map((product, ind) => (
                <Product product={product} key={ind} />
              ))
            : ""}
        </div>
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
