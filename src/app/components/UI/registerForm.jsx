import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import API from '../../api'

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', ligues: '' })
  const [errors, setErrors] = useState({})
  const [ligues, setLigues] = useState()

  useEffect(() => {
    API.ligues.fetchAll().then((data) => setLigues(data))
  }, [])

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одну цифру',
      },
      min: {
        message: 'Пароль должен содержать минимум из 8 символов',
        value: 8,
      },
    },
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="mb-4">
        <label htmlFor="validationServer04" className="form-label">
          State
        </label>
        <select
          className="form-select is-invalid"
          id="validationServer04"
          aria-describedby="validationServer04Feedback"
          required
        >
          <option selected={data.ligue === ''} disabled value="">
            Choose...
          </option>
          {ligues &&
            Object.keys(ligues).map((ligueName) => (
              <option
                selected={ligues[ligueName]._id === data.ligue}
                key={ligues[ligueName]._id}
                value={ligues[ligueName]._id}
              >
                {ligues[ligueName].name}
              </option>
            ))}
        </select>
        <div id="validationServer04Feedback" className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100 mx-auto"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  )
}

export default RegisterForm
