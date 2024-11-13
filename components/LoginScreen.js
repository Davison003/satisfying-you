// Importação
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'

// Definição do App
const App = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')

  const login = () => {
    // Validação simples de email e senha
    if (email === 'jurandir.pereira@hotmail.com' && senha === 'senha123') {
      alert('Login realizado com sucesso!')
      setMensagemErro('')
    } else {
      setMensagemErro('E-mail e/ou senha inválidos.')
    }
  }

  const limpar = () => {
    setEmail('')
    setSenha('')
    setMensagemErro('')
  }

  return (
    <View style={estilos.view}>
      <Text style={estilos.titulo}>Satisfying.you 😊</Text>

      {mensagemErro ? <Text style={estilos.mensagemErro}>{mensagemErro}</Text> : null}

      <Text style={estilos.label}>E-mail:</Text>
      <TextInput 
        style={estilos.textInput} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
        placeholder="Digite seu e-mail"
      />

      <Text style={estilos.label}>Senha:</Text>
      <TextInput 
        style={estilos.textInput} 
        value={senha} 
        onChangeText={setSenha} 
        secureTextEntry 
        placeholder="Digite sua senha"
      />

      <View style={estilos.botoes}>
        <TouchableOpacity style={estilos.botao} onPress={login}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={limpar}>
          <Text style={estilos.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// Estilos
const estilos = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3b2a84'
  },
  titulo: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
  },
  textInput: {
    width: '90%',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 5,
  },
  mensagemErro: {
    color: '#FF6666',
    fontSize: 14,
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
  },
})

// Exportação
export default App