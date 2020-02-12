import { Grid } from 'grommet'
import React from 'react'

import Spinner from '../../components/Spinner'
import useFetch from '../../hooks/useFetch'

import Card from './components/Card'

export default function RickAndMorty() {
  const { data: charactersList, loading: loadingFetch = true } = useFetch({
    endpoint: '/rick-and-morty/characters',
  })

  return (
    <>
      {loadingFetch ? (
        <Spinner />
      ) : (
        <Grid columns="medium" gap="medium" rows="medium">
          {charactersList?.map(character => (
            <Card character={character} key={character.id} />
          ))}
        </Grid>
      )}
    </>
  )
}
