// Importação
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; // Importação da biblioteca de ícones
import App from './LoginScreen';

// Definição
const NovaConta = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleCadastro = () => {
    // Verificação de e-mail simples
    if (!email.includes('@') || !email.endsWith('.com')) {
      setMessage('Por favor, insira um e-mail válido.')
      return
    }

    // Verificação de senhas
    if (password !== repeatPassword) {
      setMessage('O campo repetir senha difere da senha.')
      return
    }

    // Verifica se todos os campos estão preenchidos
    if (email && password && repeatPassword) {
      setMessage('Conta criada com sucesso!')
    } else {
      setMessage('Por favor, preencha todos os campos.')
    }
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        <Text style={estilos.titulo}>Nova Conta</Text>
      </View>

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
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a1a5e',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    marginLeft: 10
  },
  form: {
    backgroundColor: '#3e2c78',
    padding: 20,
    borderRadius: 10
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  mensagemErro: {
    color: '#FF6347',
    marginBottom: 10
  },
  botaoCadastrar: {
    backgroundColor: '#28a745', // Verde para o botão "Cadastrar"
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18
  }
})

// Exportação
export default App
