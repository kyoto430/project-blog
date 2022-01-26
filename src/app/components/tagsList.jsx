import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

const TagsList = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag._id} {...tag} />
      ))}
    </>
  )
}

TagsList.propTypes = {
  tags: PropTypes.array,
}

export default TagsList
