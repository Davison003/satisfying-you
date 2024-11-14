import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

// Função para carregar as fontes personalizadas
const loadFonts = async () => {
  await Font.loadAsync({
    'AveriaLibre-Regular': require('../assets/fonts/AveriaLibre-Regular.ttf'),
  });
};

const NewAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);

  const router = useRouter();

  // Função para carregar as fontes e ocultar a splash screen
  useEffect(() => {
    const prepare = async () => {
      await loadFonts(); // Carregar as fontes
      setFontLoaded(true); // Atualizar o estado para indicar que a fonte foi carregada
      SplashScreen.hideAsync(); // Esconde a splash screen após carregar a fonte
    };

    prepare();
  }, []);

  const handleCadastro = () => {
    // Verificação de e-mail simples
    if (!email.includes("@") || !email.endsWith(".com")) {
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }

    // Verificação de senhas
    if (password !== repeatPassword) {
      setMessage("O campo 'Repetir senha' difere da senha.");
      return;
    }

    // Verifica se todos os campos estão preenchidos
    if (email && password && repeatPassword) {
      // Redirecionar para a tela de Login
      router.push("/LoginScreen");
    } else {
      setMessage("Por favor, preencha todos os campos.");
    }
  };

  if (!fontLoaded) {
    return (
      <View style={estilos.container}>
        <Text style={estilos.texto}>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <View style={estilos.container}>
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

        <TouchableOpacity style={estilos.botaoCadastrar} onPress={handleCadastro}>
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
    padding: 20,
  },
  form: {
    backgroundColor: "#3e2c78",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada com o nome correto
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  mensagemErro: {
    color: "#FF6347",
    marginBottom: 10,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada com o nome correto
  },
  botaoCadastrar: {
    backgroundColor: "#28a745", // Verde para o botão "Cadastrar"
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada com o nome correto
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada com o nome correto
  },
});

export default NewAccount;
