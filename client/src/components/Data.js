import React from 'react'
import DateAndTime from './DateAndTime'

const Data = (data) => {
  const usefulData = data.data.data[0]
  const regions = usefulData.regions

  let shortNames = []

  for (let i = 0; i< regions.length; i++) {
    shortNames.push(regions[i].shortname)
  }

  return (
    <div>
      <DateAndTime from={usefulData.from} to={usefulData.to} />
      {/* <pre>{JSON.stringify(shortNames, null, 2)}</pre> */}
    </div>
  )
}

export default Data