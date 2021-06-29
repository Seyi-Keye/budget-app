import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onFormCancel }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [showForm, setShowForm] = useState(false)

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date)
    }
    onSaveExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  const handleCancelButton = (e) => {
    setShowForm(false)
  };

  const openAddExpenseForm = () => {
    setShowForm(true)
  };

  return  showForm ?    
  (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date} />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={handleCancelButton}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  ) :
  <button onClick={openAddExpenseForm}>Add Expense</button>
}

export default ExpenseForm;
