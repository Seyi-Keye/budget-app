import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import './ExpenseItem.css';

export const ExpenseItem = ({title, amount, date}) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">N{amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
