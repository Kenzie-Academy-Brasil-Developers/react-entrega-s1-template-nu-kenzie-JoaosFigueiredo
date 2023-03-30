

export const TransactionCard = ({ transaction, removeNote }) => {
    const money = "R$ "
    const decimal = parseFloat(transaction.value)

    return(
        <div>
            {transaction.type == "Entrada" ? (
                <li className="greenOne">
                    <div className="transactionCardText" >
                        <h2 className="title-three" >{transaction.description}</h2>
                        <span>{transaction.type}</span>
                    </div>
                    <div className="transactionCardValue" >
                        <span>{ money + decimal.toFixed(2)}</span>
                        <button className="deleteButton" onClick={() => removeNote(transaction.id)}>Excluir</button>
                    </div>
                </li>
            ):(
                <li className="greyOne">
                    <div className="transactionCardText" >
                        <h2 className="title-three" >{transaction.description}</h2>
                        <span>{transaction.type}</span>
                    </div>
                    <div className="transactionCardValue" >
                        <span> { money + decimal.toFixed(2)}</span>
                        <button className="deleteButton" onClick={() => removeNote(transaction.id)}>Excluir</button>
                    </div>
                </li>
            )}
        </div>
    )
}