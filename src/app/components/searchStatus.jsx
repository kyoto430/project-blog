import React from 'react'

const SearchStatus = ({ length }) => {
  return (
    <h2 className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
      {length ? `Статей:${length}` : `Статьи отсутствуют!`}
    </h2>
  )
}

export default SearchStatus
