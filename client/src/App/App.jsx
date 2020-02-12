import { Router } from '@reach/router'
import React from 'react'

// Routes
import Giphy from '../routes/Giphy/Giphy'
import Home from '../routes/Home'
import RickAndMorty from '../routes/RickAndMorty'
import Todo from '../routes/TodoList'

import Navigation from './Navigation'
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
