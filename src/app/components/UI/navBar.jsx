import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="nav d-flex flex-row justify-content-between">
      <div className='d-flex'>
      <li className="nav-item">
        <Link className="nav-link text-white" aria-current="page" to="/">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" aria-current="page" to="/articles">
          Статьи
        </Link>
      </li>
      </div>
      <li className="nav-item">
        <Link className="nav-link text-white" aria-current="page" to="/login">
          Войти
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
