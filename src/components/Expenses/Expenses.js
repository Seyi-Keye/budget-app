import { useState } from 'react';
import Card from '../Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2020');

  const handleExpenseFilter = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number(year));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterSelect={handleExpenseFilter} />
        <ExpensesChart expenses={filteredExpenses } />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;
