import Expense from "./Expense";

function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul>
      {props.expenses.map(
        (data) => (
          <Expense expenseData={data} />
        )
      )}
    </ul>
  );
}

export default ExpenseList;
