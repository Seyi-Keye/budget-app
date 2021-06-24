import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {title: 'Eating out', amount: 10000, date: new Date(2021, 7, 2)},
  {title: 'React course', amount: 5000, date: new Date(2019, 6, 4)},
  {title: 'Japa Fees', amount: 10000, date: new Date(2021, 5, 20)},
  {title: 'Tithe', amount: 2000, date: new Date(2020, 3, 22)},
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)


  const onExpenseDataHandler = (data) => {
    setExpenses(data);
  };

  return (
    <div>
      <NewExpense onNewExpense={onExpenseDataHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
