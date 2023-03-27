import { TransactionCard } from "./TransactionCard"

export const TransactionsSummary = ({ listTransactions, removeNote }) => {
    return(
        <>
        <h2>Resumo financeiro</h2>
        {listTransactions.length > 0 ? (
            <ul>
            {listTransactions.map((transaction) => {
                return <TransactionCard key={transaction.id} transaction = {transaction} removeNote = {removeNote} />
            })}
        </ul> 
        ):(
            <h1>Você ainda não possui nenhum lançamento</h1>
        )}
        </>
    )
}