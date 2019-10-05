import info from "./../products.json";

const initState = {
  products: info.products
};

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
