import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "black" }]}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    padding: 10,
    width: 200,
    borderColor: "white",

    color: "white",
  },
  input2: {
    borderWidth: 0,
    textAlign: "center",
    marginTop: 50,
    width: 200,
    padding: 10,
    borderRadius: 15,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,

    color: "white",
  },
});
