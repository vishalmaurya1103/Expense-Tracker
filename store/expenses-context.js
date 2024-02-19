import { createContext, useReducer } from "react";

const DUMMY_EXPENCES = [
  {
    id: "e1",
    description: "New Cloths",
    amount: 5550,
    date: new Date("2024-2-16"),
  },
  {
    id: "e2",
    description: "New Bike",
    amount: 700,
    date: new Date("2024-2-17"),
  },
  {
    id: "e3",
    description: "New Game",
    amount: 7300,
    date: new Date("2024-2-18"),
  },
  {
    id: "e4",
    description: "New Player ",
    amount: 7670,
    date: new Date("2024-2-19"),
  },
  {
    id: "e5",
    description: "New Car",
    amount: 750,
    date: new Date("2024-2-26"),
  },
  {
    id: "e6",
    description: "New Bike",
    amount: 700,
    date: new Date("2024-2-27"),
  },
  {
    id: "e7",
    description: "New Game",
    amount: 7300,
    date: new Date("2024-2-28"),
  },
  {
    id: "e8",
    description: "New Player ",
    amount: 7670,
    date: new Date("2024-3-1"),
  },
  {
    id: "e9",
    description: "New Car",
    amount: 750,
    date: new Date("2024-3-2"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatebalExpensesIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatebalExpenses = state[updatebalExpensesIndex];
      const upadtedItem = { ...updatebalExpenses, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatebalExpensesIndex] = upadtedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENCES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
