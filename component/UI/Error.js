import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Error({ message }) {
  return (
    <View style={styles.conatiner}>
      <Text style={[styles.text, styles.title]}>An error occurred!!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default Error;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
