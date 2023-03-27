export const TransactionCard = ({ transaction, removeNote }) => {
    const decimal = parseFloat(transaction.value)

    return(
        <div>
            {transaction.type == "Entrada" ? (
                <li className="greenOne">
                    <div>
                        <h2>{transaction.description}</h2>
                        <span>{transaction.type}</span>
                    </div>
                    <div>
                        <span>{decimal.toFixed(2)}</span>
                        <button onClick={() => removeNote(transaction.id)}>Excluir transação</button>
                    </div>
                </li>
            ):(
                <li className="greyOne">
                    <div>
                        <h2>{transaction.description}</h2>
                        <span>{transaction.type}</span>
                    </div>
                    <div>
                        <span>{decimal.toFixed(2)}</span>
                        <button onClick={() => removeNote(transaction.id)}>Excluir transação</button>
                    </div>
                </li>
            )}
        </div>
    )
}