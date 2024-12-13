import { View, StyleSheet, TextInput, Text } from "react-native";

function Input() {
  return (
    <View style={styles.container}>
      <Text>SQss</Text>
      <TextInput multiline={true} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});

export default Input;
