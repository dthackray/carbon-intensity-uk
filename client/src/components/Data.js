import React from 'react'
import DateAndTime from './DateAndTime'

const Data = (data) => {
  const usefulData = data.data.data[0]

  return (
    <div>
      <DateAndTime from={usefulData.from} to={usefulData.to} />
      <pre>{JSON.stringify(data.data.data[0], null, 2)}</pre>
    </div>
  )
}

export default Data