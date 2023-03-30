import { useState } from 'react'
import { Header } from './components/Header'
import { TransactionForm } from './components/TransactionForm'
import { Summary } from './components/Summary'
import { Balance } from './components/Balance'
import { v4 as uuidv4 } from 'uuid'
import "./styles/index.css"

function App() {
  const [listTransactions, storeTransactions] = useState([]);
  const valueSum = listTransactions.reduce((previousValue, element) => {
    const stringToNumber = parseFloat(element.value)
    
    if (element.type == "Entrada") {
      return previousValue + stringToNumber
    } else {
      return previousValue -stringToNumber
    }
  }, 0)

  const addNewTransaction = (data) => {
    const newTransaction = {...data, id: uuidv4()}
    const newTransactionList = [...listTransactions, newTransaction]
    storeTransactions(newTransactionList)
  }

  const removeNote = (transactionId) => {
    const newSummary = listTransactions.filter(transaction => transaction.id !== transactionId)
    storeTransactions(newSummary)
  }

  return (
    <div>
      <Header/>
      <main>
        <div className='formBalanceWrapper'>
          <TransactionForm addNewTransaction = {addNewTransaction}/>
          <Balance listTransactions={listTransactions} valueSum = {valueSum}/>
        </div>
        <div className="summaryWrapper" >
          < Summary listTransactions={listTransactions} removeNote = {removeNote}/>
        </div>
      </main>
    </div>
  )
}

export default App