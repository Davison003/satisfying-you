//Importa
import { TouchableOpacity, View, Image, StyleSheet} from "react-native";

//Definição
const App = () => {

  return (
    <View style={teste.fundo}>

      
      <TouchableOpacity>
        <Image
              style={teste.modificar}
              source={require("@/assets/images/modificar.png")}
            />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
              style={teste.coletar}
              source={require("@/assets/images/coletar.png")}
            />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
              style={teste.relatorio}
              source={require("@/assets/images/relatorio.png")}
            />
      </TouchableOpacity>
      
        
    </View>

  )

}

const teste = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#372775",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  modificar: {
      height: 238,
      width: 271,
      alignItems: "flex-start",
      marginLeft: 61,
      marginRight: 61,
      marginBottom: 50,
      resizeMode: "contain",
      left: 5
  },
  coletar: {
      height: 238,
      width: 271,
      alignItems: "center",
      marginLeft: 61,
      marginRight: 61,
      marginBottom: 50,
      resizeMode: "contain",
      left: 5
  },
  relatorio: {
      height: 238,
      width: 271,
      alignItems: "flex-end",
      marginLeft: 61,
      marginRight: 61,
      marginBottom: 50,
      resizeMode: "contain",
      left: 5
  }
});


//Exportação
export default App