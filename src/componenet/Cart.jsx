// import { Button } from "bootstrap";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delCart, addCart } from "../redux/action/index";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handledelButton = (item) => {
    dispatch(delCart(item));
  };
  const handleaddButton = (item) => {
    dispatch(addCart(item));
  };
  const cartItems = (Product) => {
    return (
      <div>
        <div>
          <div className="px-4 my-5 bg-light rounded-3" key={Product.id}>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={Product.image}
                  alt={Product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{Product.title}</h3>
                <p className="lead fw-bolder">
                  {Product.qty}X${Product.price}=${Product.qty * Product.price}
                </p>

                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => {
                    handledelButton(Product);
                  }}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => {
                    handleaddButton(Product);
                  }}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 PY-5">
        <div className="row justify-content-center">
          <div className="row">
            <h1>YOUR CART IS EMPTY</h1>
          </div>
        </div>
      </div>
    );
  };

  const button1 = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button1()}
    </div>
  );
};

export default Cart;
