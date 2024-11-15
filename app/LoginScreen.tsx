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

// Definição do App
const App = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const router = useRouter();
  const verificarCampos = () => {
    const emailValido = email.includes("@") && email.endsWith(".com");
    if (!emailValido) {
      setMensagemErro("E-mail e/ou senha inválidos.");
    } else {
      setMensagemErro("");
      router.navigate("./(drawer)/Home");
    }
  };

  const limpar = () => {
    setEmail("");
    setSenha("");
    setMensagemErro("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Satisfying.you 😊</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {mensagemErro ? (
        <Text style={styles.mensagemErro}>{mensagemErro}</Text>
      ) : null}

      <TouchableOpacity style={styles.botaoEntrar} onPress={verificarCampos}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.espacamentoEntreBotoes} />

      <TouchableOpacity
        style={styles.botaoCriarConta}
        onPress={() => router.push("./RegisterScreen")}
      >
        <Text style={styles.textoBotao}>Criar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoEsqueciSenha}
        onPress={() => console.log("Esqueci minha senha")}
      >
        <Text style={styles.textoBotao}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C1874",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontFamily: "AveriaLibre-Regular", // Aplica a fonte personalizada
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: "AveriaLibre-Regular", // Aplica a fonte personalizada
    color: "#FFFFFF",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    padding: 10,
    marginBottom: 15,
    fontFamily: "AveriaLibre-Regular", // Aplica a fonte personalizada nos inputs
  },
  mensagemErro: {
    color: "#FF0000",
    fontFamily: "AveriaLibre-Regular", // Aplica a fonte personalizada na mensagem de erro
    marginBottom: 10,
  },
  botaoEntrar: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  espacamentoEntreBotoes: {
    height: 30,
  },
  botaoCriarConta: {
    backgroundColor: "#17A2B8",
    padding: 10,
    borderRadius: 0,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoEsqueciSenha: {
    backgroundColor: "#6C757D",
    padding: 10,
    borderRadius: 0,
    alignItems: "center",
  },
  textoBotao: {
    fontFamily: "AveriaLibre-Regular", // Aplica a fonte personalizada nos botões
    fontSize: 16,
    color: "#FFFFFF",
  },
});

// Exportação
export default App;
