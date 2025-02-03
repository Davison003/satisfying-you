import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useSelector } from "react-redux";
import { deleteDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const ModifySearch = () => {
  // Definição
  const [nome, setNome] = useState(useSelector((state) => state.survey.name));
  const [data, setData] = useState(useSelector((state) => state.survey.date));
  const [imagem, setImagem] = useState(null);

  const [nomeValido, setNomeValido] = useState(false);
  const [dataValida, setDataValida] = useState(false);
  const [imagemValida, setImagemValida] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const router = useRouter();

  const id = useSelector((state) => state.survey.id);
  const email = useSelector((state) => state.login.email);

  useEffect(() => {
    async function getImgFromFireStore() {
      const sv = await getDoc(doc(db, "users", email, "surveys", id));
      // console.log(sv.data().image);
      setImagem(sv.data().image);
    }

    getImgFromFireStore();
  }, []);

  const handleDelete = async () => {
    console.log("Pesquisa apagada!");

    try {
      await deleteDoc(doc(db, "users", email, "surveys", id));
      setIsModalVisible(false);
      router.replace("./(drawer)/Home");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    const surveyRef = doc(db, "users", email, "surveys", id);
    try {
      await updateDoc(surveyRef, {
        name: nome,
        date: data,
        image: imagem,
      });
      router.replace("./(drawer)/Home");
    } catch (err) {
      console.log(err);
    }
  };

  const resizeImage = async (uri) => {
    const resizedImage = await ImageManipulator.manipulateAsync(
      uri,
      [
        {
          resize: {
            width: 150,
            height: 150,
            resizeMethod: "auto",
          },
        },
      ],
      {
        compress: 0.8,
        format: ImageManipulator.SaveFormat.JPEG,
      }
    );

    // console.log(resizedImage);
    const imgUri = await fetch(resizedImage.uri);
    const imgBlob = await imgUri.blob();
    // console.log(imgBlob);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
    };
    reader.readAsDataURL(imgBlob);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
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

    console.log(resultado);
    if (!resultado.canceled) {
      resizeImage(resultado.assets[0].uri);
    }
  };

  const escolherImagem = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      resizeImage(resultado.assets[0].uri);
    }
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.cCaixas}>
        <View>
          <Text style={estilos.texto}>Nome</Text>
          <TextInput
            style={estilos.caixa}
            value={nome}
            onChangeText={setNome}
          />
          {nomeValido ? (
            <Text style={estilos.erro}>Preencha o nome da pesquisa</Text>
          ) : null}
        </View>

        <View>
          <Text style={estilos.texto}>Data</Text>
          <TouchableOpacity
            style={estilos.caixaData}
            onPress={showDatePickerModal}
          >
            <Text style={estilos.textoData}>{data}</Text>
            <Image
              style={estilos.imgCalendario}
              source={require("@/assets/images/calendar.png")}
            />
          </TouchableOpacity>
          {dataValida ? (
            <Text style={estilos.erro}>Preencha a data</Text>
          ) : null}
        </View>

        <View>
          <Text style={estilos.texto}>Imagem</Text>
          <TouchableOpacity style={estilos.caixaImg} onPress={opcoesImagem}>
            {imagem ? (
              <Image source={{ uri: imagem }} style={estilos.Imagem} />
            ) : (
              <Text style={estilos.textoImg}>Câmera/Galeria de imagens</Text>
            )}
          </TouchableOpacity>
          {imagemValida ? (
            <Text style={estilos.erro}>Escolha uma imagem</Text>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 100,
          }}
        >
          <TouchableOpacity style={estilos.bt} onPress={handleUpdate}>
            <Text style={estilos.btTexto}>SALVAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "column", alignItems: "center" }}
            onPress={() => setIsModalVisible(true)}
          >
            <Image source={require("@/assets/images/lixeira.png")} />
            <Text style={estilos.btTexto}>Apagar</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="none"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={estilos.modalSobrepor}>
            <View style={estilos.modalConteudo}>
              <Text style={estilos.modalTexto}>
                Tem certeza de apagar essa pesquisa?
              </Text>

              <View style={estilos.modalBotaoAlinhamento}>
                <TouchableOpacity
                  style={estilos.modalBotaoSim}
                  onPress={handleDelete}
                >
                  <Text style={estilos.modalTextoBotao}>SIM</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={estilos.modalBotaoCancelar}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={estilos.modalTextoBotao}>CANCELAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

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
    alignItems: "center",
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
  caixaData: {
    backgroundColor: "white",
    width: 350,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  textoData: {
    color: "#3F92C5",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22,
    height: 40,
    width: 300,
  },
  imgCalendario: {
    width: 30,
    height: 30,
    opacity: 0.5,
  },
  caixaImg: {
    backgroundColor: "white",
    width: 250,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  textoImg: {
    fontFamily: "AveriaLibre-Regular",
    color: "#939393",
    fontSize: 16,
  },
  Imagem: {
    width: 80,
    height: 80,
  },
  cCaixas: {
    width: 350,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bt: {
    width: 350,
    height: 40,
    backgroundColor: "#37BD6D",
    alignItems: "center",
    justifyContent: "center",
  },
  btTexto: {
    color: "white",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 22,
  },
  erro: {
    color: "#FD7979",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 20,
  },
  // fundo: {
  //   flex: 1,
  //   backgroundColor: "#372775",
  //   padding: 20,
  //   flexDirection: "column",
  // },
  // alinhamento: {
  //   fontFamily: "AveriaLibre-Regular",
  //   backgroundColor: "#372775",
  //   padding: 20,
  // },
  // titulo: {
  //   fontFamily: "AveriaLibre-Regular",
  //   color: "#FFFFFF",
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
  // texto: {
  //   fontFamily: "AveriaLibre-Regular",
  //   color: "#3F92C5",
  //   backgroundColor: "#FFFFFF",
  //   justifyContent: "center",
  //   padding: 10,
  //   marginBottom: 15,
  // },
  // conteudo: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // icone: {
  //   opacity: 0.41,
  //   marginLeft: 180,
  // },
  // imagem: {
  //   marginLeft: 120,
  // },
  // botaoSalvar: {
  //   backgroundColor: "#37BD6D",
  //   height: 50,
  //   width: 333,
  //   marginLeft: 20,
  //   padding: 15,
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  // },
  // textoBotaoSalvar: {
  //   fontFamily: "AveriaLibre-Regular",
  //   color: "#FFFFFF",
  //   fontSize: 18,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  modalSobrepor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalConteudo: {
    width: 300,
    backgroundColor: "#2B1F5C",
    padding: 20,
    alignItems: "center",
  },
  modalTexto: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  modalBotaoAlinhamento: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalBotaoSim: {
    backgroundColor: "#FF8383",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  modalBotaoCancelar: {
    backgroundColor: "#3F92C5",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalTextoBotao: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 20,
  },
});

// Exportação
export default ModifySearch;
