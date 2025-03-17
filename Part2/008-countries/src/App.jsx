import { useState, useEffect } from 'react'
import axios from 'axios'

import Country from "./Country.jsx"

const App = () => {
  const [country, setCountry] = useState("")
  const [info, setInfo] = useState({})

  const handleCountryChange = (event) => {
    setCountry(event.target.value);

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        console.log(response)
        setInfo(response)
      })

  }

  return (
    <div>
      find countries: <input value={country} onChange={handleCountryChange} />
      <Country info={info}></Country>
    </div>
  )
}

export default App