import { useContext } from "react";
import ExpensesOutput from "../component/Expenses Output/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDaysMinusDays } from "../util/date";

function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="last 7 days"
      fallbackText="No Expense Registerd on last 7 Days."
    />
  );
}

export default RecentExpenses;
