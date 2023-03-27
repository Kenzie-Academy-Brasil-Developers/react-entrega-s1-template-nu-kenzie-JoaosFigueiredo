import { useState } from 'react'
import { Header } from './components/Header'
import { TransactionForm } from './components/TransactionForm'
import { TransactionsSummary } from './components/Summary'
import { AccountBalance } from './components/Balance'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [count, setCount] = useState(0)
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
        <div>
          <TransactionForm addNewTransaction = {addNewTransaction}/>
          <AccountBalance valueSum = {valueSum}/>
        </div>
        <div>
          <TransactionsSummary listTransactions={listTransactions} removeNote = {removeNote}/>
        </div>
      </main>
    </div>
  )
}

export default App