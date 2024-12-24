import React,{ useState } from 'react';
import data from "../assets/product.json";
import { Products } from './Products';
import './Home.css';

export const Home = ({cart,setCart}) => {
  const [products] =  useState(data);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Products key={product.id} product= {product} cart={cart} setCart={setCart}/>
       
      ))}
    </div>
  )
}
