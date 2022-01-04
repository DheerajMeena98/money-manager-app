import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransactionHistory} = props

  const {title, amount, type, id} = eachTransaction
  const onDeleteTransactionHistory = () => {
    deleteTransactionHistory(id)
  }

  return (
    <li className="each-transaction-item-container">
      <p className="each-title-text"> {title} </p>
      <p className="each-title-text"> {amount} </p>
      <p className="each-title-text"> {type} </p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteTransactionHistory}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
