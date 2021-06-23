import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {title: 'Eating out', amount: 10000, date: new Date(2021, 7, 2)},
    {title: 'React course', amount: 5000, date: new Date(2021, 6, 4)},
    {title: 'Japa Fees', amount: 10000, date: new Date(2021, 5, 20)},
    {title: 'Tithe', amount: 2000, date: new Date(2021, 3, 22)},
  ];
  return (
    <div>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
