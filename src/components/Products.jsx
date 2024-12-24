import React from 'react';
import "./Product.css";

export const Products = ({product,cart,setCart}) => {
    const name=product.name.length>8?product.name.substring(0,8)+"....":product.name;
    const addCart=()=>{
        setCart([...cart,product]);
    };
    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id !== product.id))
    };
  return (
    <div className="products">
        <div className="img">
          <img src={product.pic} alt={product.name} />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <p>price RS:{product.amt}</p>
          {
            cart.includes(product)? <button className="Removebtn"onClick={removeCart}>Remove from Cart</button>:<button onClick={addCart}>Add to Cart</button>
          }
        </div>
    </div>
    
     
  )
}
