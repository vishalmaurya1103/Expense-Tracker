import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../component/Expenses Output/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDaysMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";
import Loading from "../component/UI/Loading";
import Error from "../component/UI/Error";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expenseCtx = useContext(ExpenseContext);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError("Fetching expense failed!!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <Error message={error} />;
  }

  if (isFetching) {
    return <Loading />;
  }

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
