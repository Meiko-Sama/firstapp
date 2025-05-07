import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const changeText = () => {
    console.log("Foi digitado algo no TEXT INPUT");
  };

  return (
    <View style={[styles.container, { backgroundColor: "#393961" }]}>
      <Text style={styles.text}>B O M - D I A! ! !</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor={"white"}
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={changeText}
      />
      {/*PLACEHOLDER: Coloca um texto informativo dentro do input*/}
      {/*PLACEHOLDERTEXTCOLOR: Muda a cor do PLACEHOLDER*/}
      {/*SECURETEXTENTRY: */}
      {/*INPUTMODE: Coloca o tipo de texto que pode ser colocado no campo*/}
      {/*AUTOCAPITALIZE: Deixa a primeira letra do input Maiúscula*/}
      {/*MULTILINE: Ele deixa colocar mais linhas dentro do input*/}
      {/*ONCHANGETEXT: Conta quantas vezes/caracteres o input foi utilizado*/}
    </View>
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

    color: "#465d85",

    borderBottomWidth: 1,
    borderBottomColor: "#223e6e",
  },
});
