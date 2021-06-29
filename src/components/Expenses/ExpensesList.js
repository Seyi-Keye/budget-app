import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({ items }) => {

  if (items.length === 0) {
    return <p className="expenses-list__fallback">No item found</p>
  } else {
    return items.map(({title, amount, date}, ind) => {
      return <ExpenseItem
        title={title}
        amount={amount}
        date={date} 
      />
      }) 
  }
}

export default ExpensesList;
