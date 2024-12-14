import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",

          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={20} name="money-bill-wave" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: "Top Up",
          tabBarIcon: ({ color }) => (
            <AntDesign size={20} name="plus" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
