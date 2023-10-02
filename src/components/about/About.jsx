import React from 'react'
import {RiFindReplaceLine}  from "react-icons/ri"
import {Link} from "react-router-dom"
import me from "../../assets/founder.JPG"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>

            <article>
                <h4>Sabji Pati</h4>
                <p>We are Sabji Pati. The place for fresh vegetables on the entire Planet.</p>

                <p>Explore the various type of vegetables. Click below to see the Caret</p>

                <Link to="/">
                <RiFindReplaceLine/>
                </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>

                    <div>
                        <img src={me} alt='Founder'/>
                        <h3>Sankalp Dubey</h3>
                    </div>

                    <p>I am Sankalp Dubey, the founder of Sabji Pati.</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About