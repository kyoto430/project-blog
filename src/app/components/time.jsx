import React from 'react'
import PropTypes from 'prop-types'

const Time = ({ update }) => {
  const renderTime = (number) => {
    const convertToHours = Math.floor(number / 60)
    if (number >= 60) {
      return `${convertToHours} ${convertToHours === 1 ? 'hour' : 'hours'}`
    } else {
      return `${number} ${number === 1 ? 'min' : 'mins'}`
    }
  }
  return (
    <p className="card-text">
      <small className="text-muted">
        Last updated {renderTime(update)} ago
      </small>
    </p>
  )
}

Time.propTypes = {
  update: PropTypes.number,
}

export default Time
