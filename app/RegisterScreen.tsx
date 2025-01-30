// Importação
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Definição
const NewAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleCadastro = async () => {
    setMessage("");
    // Verificação de e-mail simples
    if (!email.includes("@") || !email.endsWith(".com")) {
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }

    // Verificação de senhas
    if (password !== repeatPassword) {
      setMessage("O campo repetir senha difere da senha.");
      return;
    }

    // Verifica se todos os campos estão preenchidos
    if (email && password && repeatPassword) {
      // setMessage("Conta criada com sucesso!");

      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      userCred.user
        ? router.navigate("./LoginScreen")
        : setMessage("Erro ao criar a conta.");
    } else {
      setMessage("Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={estilos.container}>
      {/* <View style={estilos.header}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        <Text style={estilos.titulo}>Nova Conta</Text>
      </View> */}

      <View style={estilos.form}>
        <Text style={estilos.label}>E-mail</Text>
        <TextInput
          style={estilos.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />

        <Text style={estilos.label}>Senha</Text>
        <TextInput
          style={estilos.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

        <Text style={estilos.label}>Repetir senha</Text>
        <TextInput
          style={estilos.input}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholder="Repita sua senha"
          secureTextEntry={true}
        />

        {message ? <Text style={estilos.mensagemErro}>{message}</Text> : null}

        <TouchableOpacity
          style={estilos.botaoCadastrar}
          onPress={handleCadastro}
        >
          <Text style={estilos.textoBotao}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e2c78",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 20,
  },
  titulo: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 24,
    // marginLeft: 10,
  },
  form: {
    fontFamily: "AveriaLibre-Regular",
    backgroundColor: "#3e2c78",
    // padding: 20,
    borderRadius: 10,
  },
  label: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 16,
    // marginBottom: 5,
  },
  input: {
    fontFamily: "AveriaLibre-Regular",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mensagemErro: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FF6347",
    marginBottom: 10,
  },
  botaoCadastrar: {
    backgroundColor: "#28a745", // Verde para o botão "Cadastrar"
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBotao: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 18,
  },
});

// Exportação
export default NewAccount;
