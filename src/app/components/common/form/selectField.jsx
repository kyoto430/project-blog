import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
  label,
  name,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const getInputClasses = () => {
    return 'form-select' + (error ? ' is-invalid' : '')
  }
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          _id: options[optionName]._id,
          name: options[optionName].name,
        }))
      : options

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.name} key={option._id}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
  name: PropTypes.string,
}

export default SelectField
