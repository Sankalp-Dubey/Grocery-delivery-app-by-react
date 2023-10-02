import React from 'react'
import {AiFillYoutube,AiFillInstagram,AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
  <footer>
      <div>
      <h2>Sabji  Pati</h2>

      <p>We are trying to provide fresh and organic vegetables </p>
      <br/>

      <em>We give attention to genuine feedback</em>

      <strong>All right received @sabjipati</strong>
    </div>

    <aside>

        <h4>Follow Us</h4>

        <a href='https://youtube.com'><AiFillYoutube/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://github.com'><AiFillGithub/></a>
    </aside>
  </footer>
  )
}

export default Footer