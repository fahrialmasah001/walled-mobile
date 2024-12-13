import { StatusBar } from "expo-status-bar";
import Login from "./pages/login";
import HalLogin from "./pages/hal.login";
import TopUp from "./pages/top.up";


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TopUp />
    </>
  );
}