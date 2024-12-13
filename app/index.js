import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import logo from "../assets/logo.png";
import Button from "../components/button";
import Input from "../components/input";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode="stretch"
        style={[styles.logo, { width: 220, height: 55 }, { marginBottom: 50 }]}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType="numeric"
      />

      <Button bgColor="#4DB6AC" text="Login" to="/(home)" />

      <Text style={styles.text} marginTop={15}>
        Don't have an account?
        <Link style={{ color: "#007aff" }} href="/register">
          {" "}
          Register Here
        </Link>
      </Text>

      <Link marginTop={10} style={{ color: "#007aff" }} href="/(home)">
        {" "}
        HOME
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
  button: {
    backgroundColor: "#4DB6AC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
