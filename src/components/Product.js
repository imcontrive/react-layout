import React, { Component } from "react";

class Product extends Component {
  state = {
    selectedQuant: null,
    pricePerSelectedQuantity: null,
    discountedPrice: null
  };

  handleChange = ({ target: { name, value } }) => {
    const { discountRate, pricePerKg } = this.props.product;

    let pricePerSelectedQuantity = null;
    let discountedPrice = null;

    if (value) {
      pricePerSelectedQuantity = (value / 1000) * pricePerKg;
    }

    if (pricePerSelectedQuantity) {
      discountedPrice =
        pricePerSelectedQuantity -
        pricePerSelectedQuantity * (discountRate / 100);

      this.setState({
        selectedQuant: value,
        pricePerSelectedQuantity,
        pricePerSelectedQuantity,
        discountedPrice: discountedPrice
      });
    }
  };

  componentDidMount() {
    const { quantity } = this.props.product;
    const { selectedQuant } = this.state;

    if (!selectedQuant && quantity) {
      this.setState({ selectedQuant: quantity[0] });
    }
  }

  // componentDidUpdate() {
  //   console.log(
  //     this.state.pricePerSelectedQuantity,
  //     this.state.discountedPrice
  //   );
  // }

  render() {
    const {
      name,
      category,
      discountRate,
      isVeg,
      imageUrl,
      pricePerKg,
      currencyFormat,
      isFreeShipping,
      id,
      delivery,
      quantity,
      quantityFormat
    } = this.props.product;
    // console.log(isVeg, "isVeg");

    const {
      selectedQuant,
      pricePerSelectedQuantity,
      discountedPrice
    } = this.state;

    return (
      <div className="productContainer">
        <div className="discount common">
          <p>get {discountRate}% off</p>
          <i className="fas fa-certificate"></i>
        </div>

        <div className="imageContainer common">
          <img src={imageUrl} alt={name} width="100%" />
        </div>

        <div>
          {isVeg ? (
            <span className="vegetarianicon">
              <div className="isVegIcon common">
                <div className="isVeg"></div>
              </div>
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="prodCat common">
          <p className="common">{category}</p>
        </div>
        {/* dropdown  price and quantity*/}
        <div className="nameContainer common">
          <p className="prodName common">{name}</p>
        </div>

        <div className="list">
          <span className="custom-dropdown common">
            <select name="quantity" onChange={this.handleChange}>
              {quantity
                ? quantity.map((list, index) => {
                    return (
                      <option key={index} value={list}>
                        {list} {quantityFormat} - {currencyFormat}{" "}
                        {discountedPrice}
                      </option>
                    );
                  })
                : ""}
            </select>
          </span>
        </div>
        <section className="endContainer">
          <div className="price">
            <p>MRP:</p>
            <p className="striked">
              {currencyFormat} {pricePerSelectedQuantity}
            </p>
            <p className="sale-price">
              {currencyFormat} {discountedPrice}
            </p>
          </div>

          <div className="delivery">
            <div>
              <i className="fas fa-truck-moving"></i>
              <p>Standard Delivery: {delivery[0].isStandard}</p>
            </div>
            <div>
              <i className="fas fa-shipping-fast"></i>
              <p>Express Delivery: {delivery[0].isExpress}</p>
            </div>
          </div>

          <div className="addToCart">
            <div className="quantityBox">
              <span>Qty</span>
              <input type="text" value="1" />
            </div>

            <button>
              <p>add</p>
              <i className="fas fa-shopping-basket"></i>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Product;
