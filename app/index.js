import { Link, router } from "expo-router";
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
import { NavigationContainer } from "@react-navigation/native";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function App() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      loginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    try {
      loginSchema.parse(form);
      console.log(form, "form submit!");
      const res = await axios.post(
        "http://192.168.30.92:8080/auth/login",
        form
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      router.replace("/(home)");
      console.log(res.data.data.token, "token");

    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.errors) {
        const errors = {};
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        });
        setErrors(errors);
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      }
    }
  };

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
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />

      {errorMsg.email ? (
        <Text style={styles.error}>{errorMsg.email}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {errorMsg.password ? (
        <Text style={styles.errorMsg}>{errorMsg.password}</Text>
      ) : null}

      <Button
        handlepress={handleSubmit}
        bgColor="#4DB6AC"
        text="Login"
        to="/(home)"
      />

      <Text style={styles.text} marginTop={15}>
        Don't have an account?
        <Link style={{ color: "#007aff" }} href="/register">
          {" "}
          Register Here
        </Link>
      </Text>

      <Text style={styles.text} marginTop={15} marginBottom={15}>
        <Link style={{ color: "#007aff" }} href="/forgotpw">
          {" "}
          Forgot Password?
        </Link>
      </Text>

      <Text>
        <Link marginTop={10} style={{ color: "#007aff" }} href="/(home)">
          {" "}
          HOME
        </Link>
      </Text>

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
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  },
});
