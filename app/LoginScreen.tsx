import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevenir que a tela de splash seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  try {
    // Carregar a fonte personalizada
    await Font.loadAsync({
      'AveriaLibre-Regular': require('../assets/fonts/AveriaLibre-Regular.ttf'), // Verifique o caminho correto da fonte
    });
  } catch (error) {
    console.log('Erro ao carregar a fonte:', error);
  }
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    loadFonts().then(() => {
      setFontLoaded(true);
      SplashScreen.hideAsync();  // Ocultar a tela de splash depois que as fontes carregarem
    });
  }, []);

  if (!fontLoaded) {
    return null; // Retorna null até que as fontes sejam carregadas e a tela de splash seja ocultada
  }

  // Função de verificação de e-mail e senha
  const verificarCampos = () => {
    const emailValido = email.includes('@') && email.endsWith('.com');
    if (!emailValido) {
      setMensagemErro('E-mail e/ou senha inválidos.');
    } else {
      setMensagemErro('');
    }
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

      {mensagemErro ? <Text style={styles.mensagemErro}>{mensagemErro}</Text> : null}

      <TouchableOpacity style={styles.botaoEntrar} onPress={verificarCampos}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.espacamentoEntreBotoes} />

      <TouchableOpacity style={styles.botaoCriarConta}>
        <Text style={styles.textoBotao}>Criar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoEsqueciSenha}>
        <Text style={styles.textoBotao}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C1874',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    padding: 10,
    marginBottom: 15,
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada nos inputs
  },
  mensagemErro: {
    color: '#FF0000',
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada na mensagem de erro
    marginBottom: 10,
  },
  botaoEntrar: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  espacamentoEntreBotoes: {
    height: 30,
  },
  botaoCriarConta: {
    backgroundColor: '#17A2B8',
    padding: 10,
    borderRadius: 0,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoEsqueciSenha: {
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 0,
    alignItems: 'center',
  },
  textoBotao: {
    fontFamily: 'AveriaLibre-Regular', // Aplica a fonte personalizada nos botões
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default App;
