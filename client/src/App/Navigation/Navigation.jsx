import { Link } from '@reach/router'
import React from 'react'
import './navigation.scss'

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__item" to="/">
        Home
      </Link>
      <Link className="navigation__item" to="todo">
        Todo
      </Link>
      <Link className="navigation__item" to="giphy">
        Giphy
      </Link>
      <Link className="navigation__item" to="rick-and-morty">
        Rick and Morty
      </Link>
      <Link className="navigation__item" to="state-of-js">
        State of JS
      </Link>
    </nav>
  )
}
