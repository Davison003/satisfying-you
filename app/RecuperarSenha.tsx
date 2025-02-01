import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import { auth } from "../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const recuperarSenha = () => {
  let emailValido;

  const [email, setEmail] = useState("");
  const [mensagemErro, setMensagemErro] = useState(false);

  const Teste = () => {
    emailValido = email.includes("@") && email.endsWith(".com");
    if (emailValido) {
      const userCred = sendPasswordResetEmail(auth, email);

      router.navigate("/LoginScreen");
      setMensagemErro(false);
    } else {
      setMensagemErro(true);
    }
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cCaixas}>
        <View>
          <Text style={estilos.texto}>E-mail</Text>
          <TextInput
            style={estilos.caixa}
            value={email}
            onChangeText={setEmail}
          />
          {mensagemErro ? (
            <Text style={estilos.erro}>E-mail parece ser inválido</Text>
          ) : null}
        </View>
        <TouchableOpacity style={estilos.bt} onPress={Teste}>
          <Text style={estilos.btTexto}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: "#372775",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 45,
  },
  texto: {
    fontSize: 22,
    color: "white",
    fontFamily: "AveriaLibre-Regular",
  },
  caixa: {
    backgroundColor: "white",
    width: 350,
    height: 40,
    color: "#3F92C5",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22,
  },
  cCaixas: {
    width: 350,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  btTexto: {
    color: "white",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22,
  },
  bt: {
    width: 350,
    backgroundColor: "#37BD6D",
    textAlign: "center",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  erro: {
    color: "#FD7979",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20,
  },
});

export default recuperarSenha;
