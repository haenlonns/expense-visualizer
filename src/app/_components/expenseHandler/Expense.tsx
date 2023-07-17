import Card from "../UI/Card";
import ExpenseDate from "../UI/ExpenseDate";

function Expense(props: any) {
  const expense: {
    name: string;
    amount: number;
    date: Date;
    category: string;
    creditCard: string;
  } = {
    name: props.expenseData[0],
    amount: props.expenseData[1],
    date: props.expenseData[2],
    category: props.expenseData[3],
    creditCard: props.expenseData[4],
  };

  return (
    <Card>
      <header>{expense.name}</header>
      <p>{expense.amount}</p>
      <ExpenseDate date={expense.date} />
      <p>{expense.category}</p>
      <p>{expense.creditCard}</p>
    </Card>
  );
}

export default Expense;
