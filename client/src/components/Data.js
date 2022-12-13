import React from 'react'

const Data = (data) => {
  return (
    <div>
      <pre>{JSON.stringify(data.data.data[0], null, 2)}</pre>
    </div>
  )
}

export default Data