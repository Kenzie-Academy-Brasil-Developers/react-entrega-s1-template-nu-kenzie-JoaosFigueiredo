export const AccountBalance = ({ valueSum }) => {
    return(
        <div className="balance">
            <div>
                <h2>Valor total: </h2>
                <h2 className="totalValue">R$ {valueSum.toFixed(2)}</h2>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}