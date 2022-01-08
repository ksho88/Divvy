import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css, jsx } from '@emotion/core'


const styles = css`
  .header{
   font-weight: bold
   background-color: teal;
 }`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {
  return (
    
    <div>
      <table>
        <tbody>
          <h1>Hello Divvy</h1>
        <tr className='form-container'>
            <td>Date<input onSubmit='event.prevents' type='Date' /></td>
            <td >ID<input type='text' /></td>
            <td >User ID<input type='text' /></td>
            <td >Description<input type='text' /></td>
            <td >Merchant ID<input type='text' /></td>
            <td >Debit<input type='text' /></td>
            <td >Credit<input type='text' /></td>
            <td >Amount<input typ='text' /></td>
            <br></br>
            <br></br>
            <br></br>
            <input type='submit' value='submit' />
            <input type='submit' value='edit' />
            <input type='submit' value='Remove' />
            </tr> 
            <p>I swear this worked on my machine...</p>
       { 
            data.map(tx => {
              const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
              return (

                <tr data-testid={`transaction-${id}`} key={`transaction-${id}`}>
                  <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                  <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                  <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                  <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                  <td data-testid={makeDataTestId(id, 'debit')}>{debit}</td>
                  <td data-testid={makeDataTestId(id, 'credit')}>{credit}</td>
                  <td data-testid={makeDataTestId(id, 'amount')}>{amount}</td>
                </tr>
                
            
              )
            })
          }
          <h3>
            <iframe src="https://giphy.com/embed/3hvmlYNsOTFWE" width="480" height="311" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sun-mike-norris-3hvmlYNsOTFWE"></a></p>
          </h3>
        </tbody>
      </table>
    </div>
 

  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    d: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
