import { StatusBar } from "expo-status-bar";
import Login from "./pages/login";
import HalLogin from "./pages/hal.login";


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HalLogin/>
    </>
  );
}