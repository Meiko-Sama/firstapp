import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "" }]}>
      <Text style={styles.text1} />
      {/* Para chamar com class ou ID a gente cria uma variavel e chama ela lá embaixo. EX: styles é a nossa variavel.(nome da nossa classe/ID) */}
      <Text style={[styles.text1, { color: "white" }]} />
      {/* Essa estilização é tanto por class/id e também dentro da própria TAG. */}
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
