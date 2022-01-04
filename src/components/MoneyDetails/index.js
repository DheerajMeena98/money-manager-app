import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses

  return (
    <div className="balance-expenses-income-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="balance-image"
          alt="balance"
        />
        <div className="balance-card">
          <p className="balance-income-expenses-text"> Your Balance </p>
          <p
            className="balance-income-expenses-amount-text"
            testid="balanceAmount"
          >
            {' '}
            {`Rs ${balance}`}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="income-image"
          alt="income"
        />
        <div className="income-card">
          <p className="balance-income-expenses-text"> Your Income</p>
          <p
            className="balance-income-expenses-amount-text"
            testid="incomeAmount"
          >
            {' '}
            {`Rs ${income}`}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="expenses-image"
          alt="expenses"
        />
        <div className="expenses-card">
          <p className="balance-income-expenses-text"> Your Expenses </p>
          <p
            className="balance-income-expenses-amount-text"
            testid="expensesAmount"
          >
            {' '}
            {`Rs ${expenses}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
