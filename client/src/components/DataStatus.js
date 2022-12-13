import React from 'react'

const DataStatus = (...props) => {
  return (
    <div>
        {props.loading && <p>Loading...</p>}
        {!props.loading && <p>Fetched data</p>}
    </div>
  )
}

export default DataStatus