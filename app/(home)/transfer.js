import { View, Text, StyleSheet } from "react-native";

export default function Transfer() {
  return (
    <View style={styles.container}>
      <Text>Transfer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
