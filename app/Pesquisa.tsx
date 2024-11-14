import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const thanksRoute = "/Agradecimentos";
  const emotionImgSize = [75, 75];
  const router = useRouter();

  return (
    <View style={estilos.raiz}>
      <TouchableOpacity
        style={estilos.escondido}
        onPress={() => {
          console.log("voltou");
          router.back();
        }}
      ></TouchableOpacity>

      <View style={estilos.titulo}>
        <Text style={estilos.textao}>O que você achou da Pesquisa 2024?</Text>
      </View>

      <View style={estilos.botoes}>
        <Link href={thanksRoute} asChild>
          <TouchableOpacity style={estilos.escolha}>
            <Image
              style={{ height: emotionImgSize[0], width: emotionImgSize[1] }}
              source={require("@/assets/images/excelente.png")}
            />
            <Text style={estilos.feedback}>Excelente</Text>
          </TouchableOpacity>
        </Link>

        <Link href={thanksRoute} asChild>
          <TouchableOpacity style={estilos.escolha}>
            <Image
              style={{ height: emotionImgSize[0], width: emotionImgSize[1] }}
              source={require("@/assets/images/bom.png")}
            />
            <Text style={estilos.feedback}>Bom</Text>
          </TouchableOpacity>
        </Link>

        <Link href={thanksRoute} asChild>
          <TouchableOpacity style={estilos.escolha}>
            <Image
              style={{ height: emotionImgSize[0], width: emotionImgSize[1] }}
              source={require("@/assets/images/neutro.png")}
            />
            <Text style={estilos.feedback}>Neutro</Text>
          </TouchableOpacity>
        </Link>

        <Link href={thanksRoute} asChild>
          <TouchableOpacity style={estilos.escolha}>
            <Image
              style={{ height: emotionImgSize[0], width: emotionImgSize[1] }}
              source={require("@/assets/images/ruim.png")}
            />
            <Text style={estilos.feedback}>Ruim</Text>
          </TouchableOpacity>
        </Link>

        <Link href={thanksRoute} asChild>
          <TouchableOpacity style={estilos.escolha}>
            <Image
              style={{ height: emotionImgSize[0], width: emotionImgSize[1] }}
              source={require("@/assets/images/pessimo.png")}
            />
            <Text style={estilos.feedback}>Péssimo</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  raiz: {
    flex: 1,
    backgroundColor: "#372775",
    padding: 10,
  },
  escondido: {
    // backgroundColor: "red",
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    // position: "absolute",
    cursor: "pointer",
  },
  titulo: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    fontFamily: "AveriaLibre-Regular",
  },
  textao: {
    fontSize: 30,
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
  },
  botoes: {
    flex: 2 / 3,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  escolha: {
    flexDirection: "row",
    alignItems: "center",
    left: 30,
  },
  feedback: {
    left: 50,
    fontSize: 25,
    color: "white",
    fontWeight: "semibold",
    fontFamily: "AveriaLibre-Regular",
  },
});
