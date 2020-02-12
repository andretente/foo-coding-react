import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Grid, Heading, Select } from 'grommet'
import React, { useEffect, useState } from 'react'

import Spinner from '../../components/Spinner'

import getDataByYears from './utils'

const FETCH_SURVEY_RESULTS = gql`
  query ReactHistoricalResults($tool: ToolID!) {
    survey(survey: js) {
      tool(id: $tool) {
        experience {
          allYears {
            awarenessInterestSatisfaction {
              awareness
              interest
              satisfaction
            }
            year
          }
        }
      }
    }
  }
`
export default function StateOfJS() {
  const [tool, setTool] = useState('React')
  const [fetchData, { loading, data }] = useLazyQuery(FETCH_SURVEY_RESULTS)

  useEffect(() => {
    fetchData({ variables: { tool: tool.toLowerCase() } })
  }, [fetchData, tool])

  const dataByYears = getDataByYears(data)

  return (
    <>
      <Heading alignSelf="center" level="4">
        Select one of the options to see the survey results
      </Heading>
      <Select
        options={[
          'React',
          'Vuejs',
          'Angular',
          'Typescript',
          'Gatsby',
          'Svelte',
          'Reason',
        ]}
        value={tool}
        onChange={({ option }) => setTool(option)}
      />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Heading alignSelf="center" level="2">
            {tool}
          </Heading>
          <Grid columns="medium" gap="small" rows="medium">
            {dataByYears?.map(
              ({
                year,
                awarenessInterestSatisfaction: {
                  awareness,
                  interest,
                  satisfaction,
                },
              }) => (
                <div key={year}>
                  <h1>{year}</h1>
                  <p>
                    Awareness:
                    {awareness}
                  </p>
                  <p>
                    Interest:
                    {interest}
                  </p>
                  <p>
                    Satisfaction:
                    {satisfaction}
                  </p>
                </div>
              ),
            )}
          </Grid>
        </div>
      )}
    </>
  )
}
