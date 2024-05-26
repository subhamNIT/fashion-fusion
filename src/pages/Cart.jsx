import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import wishListImage from "../assets/wishlist.png";
import { CartItemsList, CartTotals, Services } from "../components";

const Cart = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);

  const isCartEmpty = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
    } else {
      navigate("/thank-you");
    }
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10">
          <div className="lg:col-span-8">
            <CartItemsList />
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals />
            {loginState ? (
              <button
                onClick={isCartEmpty}
                className="btn bg-blue-600 hover:bg-blue-500 text-white btn-block mt-8"
              >
                order now
              </button>
            ) : (
              <Link
                to="/login"
                className="btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8"
              >
                please login
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img className="inline" src={wishListImage} alt="wishlist-image" />
          <p className="py-5">Your cart is empty!</p>
          <p className="pb-5">
            Add items to it now.
          </p>
          <Link
            to="/shop"
            className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white"
          >
            Shop Now
          </Link>
        </div>
      )}
      <Services/>
    </>
  );
};

export default Cart;
