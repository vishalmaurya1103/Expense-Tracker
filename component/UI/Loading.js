import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Loading() {
  return (
    <View style = {styles.conatiner}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
