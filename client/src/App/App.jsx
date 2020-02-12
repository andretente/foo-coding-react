import { ApolloProvider } from '@apollo/react-hooks'
import { Router } from '@reach/router'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import React from 'react'

// Routes
import Giphy from '../routes/Giphy/Giphy'
import Home from '../routes/Home'
import RickAndMorty from '../routes/RickAndMorty'
import StateOfJS from '../routes/StateOfJS'
import Todo from '../routes/TodoList'

import Navigation from './Navigation'
import './app.scss'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.stateofjs.com/graphql',
  }),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Navigation />
        <main className="app__main">
          <Router>
            <Home path="/" />
            <Todo path="todo" />
            <Giphy path="giphy" />
            <RickAndMorty path="rick-and-morty" />
            <StateOfJS path="state-of-js" />
          </Router>
        </main>
      </ApolloProvider>
    </div>
  )
}

export default App
