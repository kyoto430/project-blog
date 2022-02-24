import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/UI/loginForm'
import RegisterForm from '../components/UI/registerForm'

const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 shadow">
          {formType === 'register' ? (
            <>
              <h3 className="mb-4">Регистрация</h3>
              <RegisterForm />
              <p>
              Уже есть аккаунт?
                <a role="button" onClick={toggleFormType}>
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Вход</h3>
              <LoginForm />
              <p>
                Нет аккаунта?
                <a role="button" onClick={toggleFormType}>
                  Зарегестрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
