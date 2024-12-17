import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Alert,
  Modal,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import logo from "../assets/logo.png";
import Button from "../components/button";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Register() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        presentationStyle="formSheet"
        style={styles.modal}
        contentContainerStyle={styles.modalContent}
        onRequestClose={() => {
          Alert.alert("Terms and Conditions has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={[
              styles.modalTitle,
              { fontWeight: "bold", fontSize: 20, marginBottom: 10 },
            ]}
          >
            Terms and Conditions
          </Text>
        </View>

        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.modalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                {"\n\n"}Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
                {"\n\n"}Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Image
        source={logo}
        resizeMode="stretch"
        style={[styles.logo, { width: 220, height: 55 }, { marginBottom: 50 }]}
      />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
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
      />

      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        keyboardType="url"
      />

      <View style={{ flexDirection: "row" }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
          marginBottom={20}
        />
        <Text style={styles.text}>
          {" "}
          I have read and agree to the{" "}
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={{ color: "#007aff" }}>Terms and Conditions</Text>
          </Pressable>
        </Text>
      </View>

      <Button bgColor="#4DB6AC" text="Register" />

      <Text style={styles.text} marginTop={15}>
        Have an account?
        <Link style={{ color: "#007aff" }} href="/">
          {" "}
          Login Here
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
