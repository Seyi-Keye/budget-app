import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onNewExpense }) => {
  const onSaveExpenseData = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    onNewExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense;
