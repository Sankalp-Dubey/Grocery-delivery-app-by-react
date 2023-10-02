import React from 'react'
import MenuCard from './MenuCard'
import aalooPic from '../../assets/aloo.jpg'
import lauki from '../../assets/lauki.jpg'
import shimla from '../../assets/shimla.jpg'



const Menu = () => {
    const addToCartHandler = (itemNum) => {};
  return (
   <section id='menu'>
   <h1>Menu</h1>


   <div>
   <MenuCard burgerSrc={aalooPic} itemNum={1} price={40} title="Aaloo" handler={addToCartHandler} delay={0.2}/>
   <MenuCard burgerSrc={lauki} itemNum={2} price={60} title="Lauki" handler={addToCartHandler} delay={0.4}/>
   <MenuCard burgerSrc={shimla} itemNum={3} price={30} title="Shimla Mirch" handler={addToCartHandler} delay={0.6}/>
   </div>

   </section>
  )
}

export default Menu