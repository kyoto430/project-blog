import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-success" {...rest}>
      <i className={'bi bi-star' + (status ? '-fill' : '')}></i>
    </button>
  )
}

BookMark.propTypes = {
  status: PropTypes.bool,
}

export default BookMark
