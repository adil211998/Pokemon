import { LogBox } from "react-native";
import { RootStack } from "./src/navigation/RootStack";

export default function App() {
  LogBox.ignoreAllLogs()
  return (
  <RootStack />
  )
}
