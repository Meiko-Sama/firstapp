import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/img/background.jpg")}
      resizeMode="cover"
    >
      <View>
        <Text style={styles.text}>B O M - D I A! ! !</Text>
        <TextInput style={styles.input} />

        <Image
          source={require("./src/assets/img/heart.jpg")}
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#9494d6",
  },
  input: {
    width: 300,
    padding: 10,

    color: "#fff",

    borderBottomWidth: 1,
    borderBottomColor: "#9494d6",
  },
  image: {
    width: 100,
    height: 100,
    bottom: -40,
    borderRadius: 20,
  },
});

// <View style={[styles.container, { backgroundColor: "#393961" }]}>
//   <Text style={styles.text}>B O M - D I A! ! !</Text>
//   <TextInput style={styles.input} />

//   <Image
//     source={require("./src/assets/img/heart.jpg")}
//     style={styles.image}
//   />
// </View>
