import Card from "../UI/Card.js";
import ExpenseDate from "../UI/ExpenseDate.js";

function Expense(props) {
  const expense = {
    name: props.expenseData[4],
    amount: props.expenseData[2],
    date: props.expenseData[5],
    category: props.expenseData[1],
    creditCard: props.expenseData[6],
  };

  return (
    <Card>
      <header>{expense.name}</header>
      <p>{expense.amount}</p>
      <p>{expense.date}</p>
      <p>{expense.category}</p>
      <p>{expense.creditCard}</p>
    </Card>
  );
}

// <ExpenseDate date={expense.date} />

export default Expense;
