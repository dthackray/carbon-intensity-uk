import React from 'react'
import { useQuery } from 'react-query'
import Data from './Data'
import Regions from './Regions'

const DataStatus = () => {
  const url = "https://api.carbonintensity.org.uk/regional"
  const headers = {
      'Accept':'application/json'
  }

  const { isLoading, error, data } = useQuery("carbonData", () => 
    fetch(url,
      {
          method: "GET",
          headers: headers
      })
      .then((res) => res.json()))

    if (isLoading) return "Loading..."

    if (error) return "An error has occurred: " + error.message

  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <p>Fetched data</p>}
        {!isLoading && <Data data={data} />}
        {!isLoading && <Regions data={data} />}
    </div>
  )
}

export default DataStatus