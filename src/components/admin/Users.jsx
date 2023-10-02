import React from 'react'
import me from "../../assets/founder.JPG"


const Users = () => {

    const arr = [1, 2, 3, 4]
  return (
    <section className='tableClass'>
     <main>
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Role</th>
          <th>Since</th>
          
        </tr>
      </thead>

      <tbody>
      {
        arr.map((i)=>(
          <tr key={i}>
          <td>#ggergrds</td>
          <td>Sankalp dubey</td>
          <td>
          <img src={me} alt='me'/>

          </td>
          <td>Admin</td>
          <td>{"01-05-2002"}</td>
          
        </tr>
        ))
      }
      </tbody>
    </table>
    </main>
    </section>
  )
}

export default Users