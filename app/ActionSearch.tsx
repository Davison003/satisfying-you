//Importa
import { useRouter, useNavigation } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

//Definição
const ActionSearch = () => {
  const router = useRouter();
  const nav = useNavigation();

  const surveyName = useSelector((state: any) => state.survey.name);

  useEffect(() => {
    nav.setOptions({ title: `${surveyName}` });
  }, []);
  return (
    <View style={estilo.fundo}>
      <View style={estilo.alinhamento}>
        <TouchableOpacity
          style={estilo.caixa}
          onPress={() => {
            router.push("/ModifySearch");
          }}
        >
          <Image
            style={estilo.imagem}
            source={require("@/assets/images/modifica.png")}
          />

          <Text style={estilo.texto}>Modificar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.caixa}
          onPress={() => {
            router.push("/Pesquisa");
          }}
        >
          <Image
            style={estilo.imagem}
            source={require("@/assets/images/coleta.png")}
          />

          <Text style={estilo.texto}>Coletar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.caixa}
          onPress={() => {
            router.push("/Relatorio");
          }}
        >
          <Image
            style={estilo.imagem}
            source={require("@/assets/images/relato.png")}
          />

          <Text style={estilo.texto}>Relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const alt = 100;
const larg = 100;

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#372775",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  alinhamento: {
    justifyContent: "space-between",
    gap: 20,
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  texto: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF",
    fontSize: 24,
    top: 8,
  },
  caixa: {
    backgroundColor: "#312464",
    borderRadius: 10,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    height: alt,
    width: larg,
  },
});

//Exportação
export default ActionSearch;
