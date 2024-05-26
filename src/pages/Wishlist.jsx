import React from "react";
import { useSelector } from "react-redux";
import wishListImage from "../assets/wishlist.png";
import { Link } from "react-router-dom";
import { WishItem, Services } from "../components";

const Wishlist = () => {
  const { wishItems } = useSelector((state) => state.wishlist);
  return (
    <>
      {wishItems.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-accent-content">Name</th>
                  <th className="text-accent-content">Size</th>
                  <th className="text-accent-content">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((item, index) => (
                  <WishItem item={item} key={index} counter={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center" >
          <img className="inline" src = {wishListImage} alt="wishlist-image"/>
          <p className="py-5">Empty Wishlist</p>
          <p className="pb-5">You have no items in your wishlist. Start adding!</p>
          <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
        </div>
      )}
      <Services/>

    </>
  );
};

export default Wishlist;
