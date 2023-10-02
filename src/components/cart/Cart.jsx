import React from 'react'
import aalooPic from '../../assets/aloo.jpg'
import lauki from '../../assets/lauki.jpg'
import shimla from '../../assets/shimla.jpg'
import { Link } from 'react-router-dom'

  const CartItem = ({value, title, img, increment, decrement})=>(
    <div className='cartItem'>
    <div>
        <h4>{title}</h4>
        <img src={img} alt='Item'/>
    </div>
    <div>
        <button onClick={decrement}>-</button>
        <input type='number' value={value} readOnly></input>
        <button onClick={increment}>+</button>
    </div>
    </div>
  )

export const Cart = () => {

    const increment = (item)=> {};

    const decrement = (item)=> {};
  return (
   <section className='cart'>

    <main>
   <CartItem title={"Aaloo"} img={aalooPic} value={0} increment={()=> increment(1)} decrement={()=> decrement(1)}/>
   <CartItem title={"Shimla Mirch"} img={shimla} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)}/>
   <CartItem title={"Lauki"} img={lauki} value={0} increment={()=> increment(3)} decrement={()=> decrement(3)}/>

   <article>
    <div>
        <h4>Sub Total</h4>
        <p>₹{2000}</p>
    </div>
    <div>
        <h4>Tax</h4>
        <p>₹{2000 * 0.18}</p>
    </div>
    <div>
        <h4>Shipping Charges</h4>
        <p>₹{200}</p>
    </div>
    <div>
        <h4>Total</h4>
        <p>₹{2000 + 2000*0.18 + 200}</p>
    </div>

    <Link to="/shipping">Checkout</Link>
   </article>
    </main>
   </section>
  )
}
