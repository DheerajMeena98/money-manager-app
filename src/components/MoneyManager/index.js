import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    inputTitle: '',
    inputType: '',
    inputAmount: 0,
  }

  onAddTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onAddType = event => {
    this.setState({inputType: event.target.value})
  }

  onAddAmount = event => {
    console.log(event.target.value)
    this.setState({inputAmount: event.target.value})
  }

  onSubmitTransactionDetails = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, inputType} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: inputTitle,
      amount: inputAmount,
      type: inputType,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
    }))
  }

  deleteTransactionHistory = id => {
    const {transactionList} = this.state
    const updatedList = transactionList.filter(eachTransaction => {
      if (eachTransaction.id !== id) {
        return eachTransaction
      }
      return null
    })

    this.setState({transactionList: updatedList})
  }

  render() {
    const {transactionList} = this.state
    let income = 0
    let expenses = 0

    transactionList.forEach(element => {
      if (element.type === 'Income') {
        income += parseInt(element.amount)
      } else {
        expenses += parseInt(element.amount)
      }
    })

    return (
      <div className="money-manager-bcg-container">
        <div className="money-manager-title-container">
          <h1 className="money-manager-profile-name"> Hi, Richard</h1>
          <p className="money-manager-welcome-text">
            {' '}
            Welcome back to your{' '}
            <span className="money-manager-text">Money Manager</span>{' '}
          </p>
        </div>

        <MoneyDetails income={income} expenses={expenses} />
        <div className="add-transaction-history-container">
          <form className="add-transaction-container">
            <h1 className="add-transaction-heading"> Add Transaction</h1>
            <div className="add-title-container">
              <label htmlFor="input-title" className="label-text">
                {' '}
                TITLE{' '}
              </label>
              <input
                type="text"
                id="input-title"
                onChange={this.onAddTitle}
                placeholder="TITLE"
                className="input-element"
              />
            </div>
            <div className="add-amount-container">
              <label htmlFor="input-amount" className="label-text">
                {' '}
                AMOUNT{' '}
              </label>
              <input
                type="text"
                id="input-amount"
                onChange={this.onAddAmount}
                className="input-element"
                placeholder="AMOUNT"
              />
            </div>
            <div className="add-type-container">
              <label htmlFor="input-type" className="label-text">
                {' '}
                TYPE{' '}
              </label>
              <select
                name="money"
                onClick={this.onAddType}
                className="input-element"
              >
                <option value="Income" defaultValue optionId="INCOME">
                  {' '}
                  Income{' '}
                </option>
                <option value="Expenses" optionId="EXPENSES">
                  {' '}
                  Expenses{' '}
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.onSubmitTransactionDetails}
            >
              {' '}
              Add{' '}
            </button>
          </form>
          <div className="history-bcg-container">
            <h1 className="history-headline"> History</h1>

            <ul className="transaction-list-unordered-container">
              <div className="title-amount-type-headline-container">
                <p className="title-text"> Title</p>
                <p className="amount-text">Amount</p>
                <p className="type-text"> Type</p>
              </div>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransactionHistory={this.deleteTransactionHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
