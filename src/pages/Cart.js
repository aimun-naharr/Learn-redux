import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const state=useSelector(state=>state)
  const products=state.cart
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product, index)=><ProductCard key={index} product={product}/>)
      }
    </div>
  );
};

export default Cart;
