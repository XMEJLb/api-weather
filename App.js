import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text></Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
