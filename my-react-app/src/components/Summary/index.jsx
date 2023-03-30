import { TransactionCard } from "./TransactionCard"

export const Summary = ({ listTransactions, removeNote }) => {
    return(
        <>
        <h2 className="title-three" >Resumo financeiro</h2>
        {listTransactions.length > 0 ? (
            <ul>
                {listTransactions.map((transaction) => {
                    return <TransactionCard key={transaction.id} transaction = {transaction} removeNote = {removeNote} />
                })}
            </ul> 
        ):(
            <h1 className="title-two" >Você ainda não possui nenhum lançamento</h1>
        )}
        </>
    )
}