import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.first}>PARABENSSSSSS</Text>
      {/* ESTILIZAÇÃO POR GRUPO  */}

      <Text style={{ color: "white", fontSize: 20 }}> * ❤❤🍰🍰🎂🎂 * </Text>
      {/* ESTILIZAÇÃO POR LINHA  */}

      <Text style={[styles.third, { color: "white" }]}>Stephany</Text>
      {/* ESTILIZAÇÃO POR GRUPO E LINHA */}

      <View style={[styles.container, styles.card]}></View>
      {/* MULTIPLOS GRUPOS */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff96f6",
    alignItems: "center",
    justifyContent: "center",
  },
  first: {
    color: "white",
    fontStyle: "italic",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 30,
    fontSize: 40,
  },
  third: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
