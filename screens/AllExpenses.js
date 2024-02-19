import { useContext } from "react";
import ExpensesOutput from "../component/Expenses Output/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="total"
      fallbackText="No Registerd Expense found!!"
    />
  );
}

export default AllExpenses;
