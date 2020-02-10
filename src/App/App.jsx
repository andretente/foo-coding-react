import React from 'react'
import { Router } from '@reach/router'

import Navigation from './Navigation'
// Routes
import Home from '../routes/Home'
import Todo from '../routes/TodoList'
import Giphy from '../routes/Giphy/Giphy'
import RickAndMorty from '../routes/RickAndMorty'
import './app.scss'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="app__main">
        <Router>
          <Home path="/" />
          <Todo path="todo" />
          <Giphy path="giphy" />
          <RickAndMorty path="rick-and-morty" />
        </Router>
      </main>
    </div>
  )
}

export default App
