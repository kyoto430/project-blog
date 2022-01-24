import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  return (
    <div className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
      {length ? <h3>Статей: {length}</h3> : <h3>Статьи отсутствуют!</h3>}
    </div>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
}

export default SearchStatus
