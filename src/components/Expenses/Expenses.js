import ExpenseItem from './ExpenseItem';
import Card from '../Card';

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      { expenses.map(({title, amount, date}, ind) => <ExpenseItem key ={ind} title={title} amount={amount} date={date} />)}
    </Card>
  )
}

export default Expenses;
