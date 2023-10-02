import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/founder.JPG"
 
const Founder = () => {

  const options = {
    initial:{
     x: "-100%",
     opacity: 0,
    },
    whileInView: {
      x:0,
      opacity:1,
    }
  }
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt='Founder' height={200} width={200}/>
            <h3>Sankalp Dubey</h3>

            <p>
              Hey, Everyone I am Sankalp Dubey, founder of Sabji Pati.
              <br/>
              Our aim is to provide organic vegetables for good health.
            </p>
        </motion.div>


    </section>
  )
}

export default Founder 