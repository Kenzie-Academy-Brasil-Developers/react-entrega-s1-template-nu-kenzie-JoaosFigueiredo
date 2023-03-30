export const Balance = ({ valueSum, listTransactions }) => {
    return(
        <>
            {listTransactions.length > 0 ? (
                <div className="balance">
                    <div className="valueWrapper" >
                        <h2 className="title-three" >Valor total: </h2>
                        <h2 className="title-three totalValue " >R$ {valueSum.toFixed(2)}</h2>
                    </div>
                    <span>O valor se refere ao saldo</span>
                </div>     
            ):(
                <></>
            )}
        </>
    )
}