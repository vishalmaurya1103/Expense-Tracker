import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, style, invalid, textInputConfig }) {
  let inputStyle = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiLine);
  }
  if (invalid) {
    inputStyle.push(styles.invalideInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.inValideLable]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: "black",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValideLable: {
    color: GlobalStyles.colors.error500,
  },
  invalideInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
