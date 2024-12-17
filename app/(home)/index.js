import { Link, Stack } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../../assets/logo.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


function Header() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}

export default function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get("https://192.168.30.92:8080/profile", {
            headers: {
              Authorization: `Bearer ${value}`,
            },
          });
          const user = res.data.data;
          setUser(user);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#4DB6AC" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerTitle: (props) => <Header {...props} />,
        }}
      />
      {user?.nama && <Text>{user.nama}</Text>}
      <Text>Home Screen</Text>
      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
