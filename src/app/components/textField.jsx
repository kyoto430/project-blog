import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, error, onChange }) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : ' is-valid')
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextField.defaultProps = {
  type: 'text',
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
}

export default TextField
