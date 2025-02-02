import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const ModifySearch = () => {
  // Definição
  const [nome, setNome] = useState(
    useSelector((state: any) => state.survey.name)
  );
  const [data, setData] = useState(
    useSelector((state: any) => state.survey.date)
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const id = useSelector((state: any) => state.survey.id);
  const email = useSelector((state: any) => state.login.email);

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
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={estilo.fundo}>
      <View style={estilo.alinhamento}>
        <Text style={estilo.titulo}>Nome</Text>
        <TextInput
          style={estilo.texto}
          placeholder="Nome da pesquisa"
          placeholderTextColor="#3F92C5"
          value={nome}
          onChangeText={setNome}
          keyboardType="default"
        />

        <Text style={estilo.titulo}>Data</Text>
        <View style={estilo.texto}>
          <View style={estilo.conteudo}>
            <TextInput
              style={estilo.texto}
              value={data}
              placeholder="dd/mm/aaaa"
              placeholderTextColor="#3F92C5"
              onChangeText={setData}
              keyboardType="numeric"
            />
            <Ionicons
              name="calendar"
              size={24}
              color="#000"
              style={estilo.icone}
            />
          </View>
        </View>

        <Text style={estilo.titulo}>Imagem</Text>
        <View style={estilo.texto}>
          <View style={estilo.conteudo}>
            <Image
              style={estilo.imagem}
              source={require("@/assets/images/carnaval.png")}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={estilo.botaoSalvar}
        onPress={() => {
          handleUpdate();
          router.replace("./(drawer)/Home");
        }}
      >
        <Text style={estilo.textoBotaoSalvar}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilo.botaoDeletar}
        onPress={() => setIsModalVisible(true)}
      >
        <Image source={require("@/assets/images/lixeira.png")} />
        <Text style={estilo.titulo}>Apagar</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={estilo.modalSobrepor}>
          <View style={estilo.modalConteudo}>
            <Text style={estilo.modalTexto}>
              Tem certeza de apagar essa pesquisa?
            </Text>

            <View style={estilo.modalBotaoAlinhamento}>
              <TouchableOpacity
                style={estilo.modalBotaoSim}
                onPress={handleDelete}
              >
                <Text style={estilo.modalTextoBotao}>SIM</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={estilo.modalBotaoCancelar}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={estilo.modalTextoBotao}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#372775",
    padding: 20,
  },
  alinhamento: {
    fontFamily: "AveriaLibre-Regular",
    backgroundColor: "#372775",
    padding: 20,
  },
  titulo: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
  },
  texto: {
    fontFamily: "AveriaLibre-Regular",
    color: "#3F92C5",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    padding: 10,
    marginBottom: 15,
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icone: {
    opacity: 0.41,
    marginLeft: 180,
  },
  imagem: {
    marginLeft: 120,
  },
  botaoSalvar: {
    backgroundColor: "#37BD6D",
    height: 50,
    width: 333,
    marginLeft: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textoBotaoSalvar: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoDeletar: {
    backgroundColor: "#372775",
    marginVertical: 250,
    marginLeft: 280,
    alignItems: "center",
  },
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
