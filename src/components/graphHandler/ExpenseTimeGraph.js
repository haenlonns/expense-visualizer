import Plot from "react-plotly.js";

//new Date(expense)

function ExpenseTimeGraph(props) {
  const totalSpending = props.expenses.map((expense) => expense[3]);
  const dateOfTotal = props.expenses.map((expense) => expense[5]);

  let plotData = {
    x: [1, 2, 3, 4],
    y: [1, 2, 3, 4],
    name: "Total Spending May",
    type: "line",
  };

  return (
    <Plot
      data={plotData}
      layout={{ width: 500, height: 500, title: "Total Spending May" }}
    />
  );
}

export default ExpenseTimeGraph;
