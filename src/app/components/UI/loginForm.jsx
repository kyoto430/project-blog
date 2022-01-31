import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

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

export default LoginForm
