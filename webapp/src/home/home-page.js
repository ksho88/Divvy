import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'

export function Home () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <Fragment>
       <iframe src="https://giphy.com/embed/hx3VJAZMCaqVSOly3s" width="480" height="174" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tech-code-coding-hx3VJAZMCaqVSOly3s">via GIPHY</a></p>
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        This worked on my machine at home ...
      </Fragment>
    )
  }

  return (
    <Fragment>
      <TxTable data={data.transactions} />
    </Fragment>
  )
}
