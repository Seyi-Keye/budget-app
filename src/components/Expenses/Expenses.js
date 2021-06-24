import { useState } from 'react';
import Card from '../Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2020');

  const handleExpenseFilter = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number(year));

  return (
    <div>
      <ExpensesFilter selected={year} onFilterSelect={handleExpenseFilter} />
      <Card className="expenses">
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;
