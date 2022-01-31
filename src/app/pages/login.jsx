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
              <h3 className="mb-4">Register</h3>
              <RegisterForm />
              <p>
                Alredy have account?{' '}
                <a role="button" onClick={toggleFormType}>
                  Sing In
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Login</h3>
              <LoginForm />
              <p>
                Don't have account?{' '}
                <a a role="button" onClick={toggleFormType}>
                  Sing Up
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
