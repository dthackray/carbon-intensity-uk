import React from 'react'
import { DateTime } from "luxon"

const DateAndTime = (from, to) => {
  const formatFrom = DateTime.fromISO(from.from).toLocaleString(DateTime.DATETIME_SHORT)
  const formatTo = DateTime.fromISO(from.to).toLocaleString(DateTime.TIME_SIMPLE)

  return (
    <div>
      <h1>{formatFrom} to {formatTo}</h1>
    </div>
  )
}

export default DateAndTime