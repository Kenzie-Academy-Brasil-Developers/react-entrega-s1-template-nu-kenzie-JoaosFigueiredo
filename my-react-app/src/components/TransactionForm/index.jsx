import { useState } from "react"
import "./style.module.css"

export const TransactionForm = ({ addNewTransaction }) => {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")

    const submitTransaction = (event) => {
        event.preventDefault()
        const formData = {description, value, type}
        addNewTransaction(formData)
    }

    return(
        <div className="formContainer" >
            <form onSubmit={submitTransaction}>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" required placeholder="Digite aqui sua descrição" value={description} onChange={(event) => setDescription(event.target.value)}/>
                <span>Ex: compra de roupas</span>
                <label htmlFor="transactionValue">Valor (R$)</label>
                <input type="number" name="transactionValue" className="valueInput" id="transactionValue" placeholder="R$ 1" required step="0.01" min="0.01" value={value} onChange={(event) => setValue(event.target.value)}/>
                <label htmlFor="transactionType">Tipo de valor</label>
                <select required className="transactionType" value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="">Escolha o tipo de transação</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
                <button className="buttons" type="submit">Inserir valor</button>
            </form>
        </div>
    )
}