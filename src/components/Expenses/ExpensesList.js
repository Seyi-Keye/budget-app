import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({ items }) => {

  if (items.length === 0) {
    return <p className="expenses__empty">No item found</p>
  } else {
    return items.map(({title, amount, date}, ind) => 
        <ul key={ind + 5}>
        <ExpenseItem
          title={title}
          amount={amount}
          date={date} 
        />
      </ul>
    );
  }
}

export default ExpensesList;
