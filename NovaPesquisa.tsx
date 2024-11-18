import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
  
const novaPesquisa = () => {
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [imagem, setImagem] = useState<string | null>(null)

  const [nomeValido, setNomeValido] = useState(false)
  const [dataValida, setDataValida] = useState(false)
  const [imagemValida, setImagemValida] = useState(false)

  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);

    if (selectedDate) {
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = selectedDate.getFullYear();

      setData(`${day}/${month}/${year}`);
    }
  };

  const opcoesImagem = () => {
    Alert.alert(
      "Escolha uma opção",
      "Selecione de onde deseja obter a imagem",
      [
        { text: "Tirar Foto", onPress: tirarFoto },
        { text: "Escolher da Galeria", onPress: escolherImagem },
      ],
      { cancelable: true }
    );
  };

  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
  
    if (status !== "granted") {
      alert("Permissão para acessar a câmera foi negada.");
      return;
    }
  
    let resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
  
    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  }

  const escolherImagem = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  }

  const Testar = () => {
    let erro = false
    if(nome == ""){
      setNomeValido(true)
      erro = true  
    } else{
      setNomeValido(false)
    }
    if(data == ""){
      setDataValida(true)
      erro = true 
    } else {
      setDataValida(false)
    }
    if(imagem == null){
      setImagemValida(true) 
      erro = true 
    } else {
      setImagemValida(false)
    }

    if(!erro){
      router.navigate("/LoginScreen")
    }
  }

  return (
    <View style={estilos.view}>
      <View style={estilos.cCaixas}>

        <View>
          <Text style={estilos.texto}>Nome</Text>
          <TextInput style={estilos.caixa} value={nome} onChangeText={setNome}/>
          {nomeValido? (
            <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>)
          : null}
        </View>

        <View>
          <Text style={estilos.texto}>Data</Text>
          <TouchableOpacity style={estilos.caixaData} onPress={showDatePickerModal}>
            <Text style={estilos.textoData}>{data}</Text>
            <Image style={estilos.imgCalendario} source={require("@/assets/images/calendar.png")}/>
          </TouchableOpacity>
          {dataValida? (
            <Text style={estilos.erro}>Preencha a data</Text>)
          : null}
        </View>

        <View>
          <Text style={estilos.texto}>Imagem</Text>
          <TouchableOpacity style={estilos.caixaImg} onPress={opcoesImagem}>
            {imagem? (
              <Image source={{ uri: imagem }} style={estilos.Imagem}/>)
              : <Text style={estilos.textoImg}>Câmera/Galeria de imagens</Text>
            }
          </TouchableOpacity>
          {imagemValida? (
            <Text style={estilos.erro}>Escolha uma imagem</Text>)
          : null}
        </View>

        <TouchableOpacity style={estilos.bt} onPress={Testar}>
          <Text style={estilos.btTexto}>CADASTRAR</Text>
        </TouchableOpacity>

        {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
        )}
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: "#372775",
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  texto: {
    fontSize: 20,
    color: "white",
    fontFamily: "AveriaLibre-Regular"
  },
  caixa: {
    backgroundColor: "white",
    width: 450,
    height: 35,
    color: "#3F92C5",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20
  },
  caixaData: {
    backgroundColor: "white",
    width: 450,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10
  },
  textoData: {
    color: "#3F92C5",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20,
    height: 35,
    width: 400
  },
  imgCalendario: {
    width: 30,
    height: 30,
    opacity: 0.5,
  },
  caixaImg: {
    backgroundColor: "white",
    width: 250,
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  textoImg: {
    fontFamily: "AveriaLibre-Regular",
    color: "#939393",
    fontSize: 15
  },
  Imagem: {
    width: 60,
    height: 60
  },
  cCaixas: {
    width: 450,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  bt: {
    width: 450,
    height: 35,
    backgroundColor: "#37BD6D",
    alignItems: "center",
    justifyContent: "center"
  },
  btTexto: {
    color: "white",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22
  },
  erro: {
    color: "#FD7979",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 15
  }
})
  

export default novaPesquisa;

  