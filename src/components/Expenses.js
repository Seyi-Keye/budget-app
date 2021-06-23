import ExpenseItem from './ExpenseItem';

const Expenses = ({expenses}) => {
  return (
    <div className="expenses">
      { expenses.map(({title, amount, date}, ind) => <ExpenseItem key ={ind} title={title} amount={amount} date={date} />)}
    </div>
  )
}

export default Expenses;
