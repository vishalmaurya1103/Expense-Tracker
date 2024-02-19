import { FlatList , Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function remderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={remderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
