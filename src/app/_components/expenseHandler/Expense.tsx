import Card from "../UI/Card";

function Expense(props: any) {

    const expense: {name: string; amount: number; date: Date; category: string} = {
        name: props.expenseData[0],
        amount: props.expenseData[1],
        date: props.expenseData[2],
        category: props.expenseData[3]
    };

    return expense;
}

export default Expense;
