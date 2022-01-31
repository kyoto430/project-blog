import React from 'react'
import PropTypes from 'prop-types'

const GroupHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ iter: item, order: 'asc' })
    }
  }
  const renderSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.iter === currentPath) {
      if (selectedSort.order === 'asc') {
        return <i className="bi bi-caret-down-fill"></i>
      } else {
        return <i className="bi bi-caret-up-fill"></i>
      }
    }
    return null
  }
  return (
    <div className="d-flex mt-1 flex-wrap">
      <div className="m-1 fw-bold fs-6">Сортировать по:</div>
      {Object.keys(columns).map((column) => (
        <span
          key={column}
          onClick={() => handleSort(columns[column].iter)}
          className="m-1 fs-6"
          style={{ textDecoration: 'underline' }}
          role={'button'}
        >
          {columns[column].title}
          {renderSortArrow(selectedSort, columns[column].iter)}
        </span>
      ))}
    </div>
  )
}

GroupHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
}

export default GroupHeader
