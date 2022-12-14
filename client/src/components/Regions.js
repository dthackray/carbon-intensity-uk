import React from 'react'

const Regions = (data) => {
  const usefulData = data.data.data[0]
  const regions = usefulData.regions

  let shortNames = []

  for (let i = 0; i< regions.length; i++) {
    shortNames.push(regions[i].shortname)
  }

  return (
    <ul>
      {shortNames.map((region) => <li key={region}>{region}</li>)}
    </ul>
  )
}

export default Regions