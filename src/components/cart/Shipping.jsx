import React from 'react'
import { Country, State, City} from "country-state-city"

const Shipping = () => {
  return (
   <section className='shipping'>
    <main>
        <h1>Shipping Details</h1>
       <form>
       <div>
            <label>H. No.</label>
            <input type='text' placeholder='Enter your House Number'></input>
        </div>
       
        
        <div>
            <label>Country</label>
            <select>
                <option value="">--Country--</option>
                {
                    Country && Country.getAllCountries().map((i)=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <label>State</label>
           <select>
           <option value="">--States--</option>
           {
            State && State.getStatesOfCountry("IN").map((i)=>(
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
            ))
           }
           </select>
        </div>
        <div>
            <label>City</label>
            <input type='text' placeholder='Enter your city'></input>
        </div>
        <div>
            <label>Ph. No.</label>
            <input type='text' placeholder='Contact Number'></input>
        </div>
        <div>
            <label>Pin Code</label>
            <input type='text' placeholder='Enter your pin code'></input>
        </div>

        <button type='submit'>Confirm Order</button>
       </form>
    </main>
   </section>
  )
}

export default Shipping