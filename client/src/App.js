import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = "https://api.carbonintensity.org.uk/intensity"
  const headers = {
      'Accept':'application/json'
  }

  useEffect(() => {
    fetch(url,
      {
          method: "GET",
          headers: headers
      })
      .then((res) => res.json())
      .then((usefulData) => {
        console.log(usefulData)
        setLoading(false)
        setData(usefulData)
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      })
  }, [])

  return (
    <>
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
        {!loading && <pre>{JSON.stringify(data.data[0], null, 2)}</pre>}
      </div>
    </>
  )
}

export default App;
