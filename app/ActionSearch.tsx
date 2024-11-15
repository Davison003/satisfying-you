//Importa
import { TouchableOpacity, View, Image, StyleSheet} from "react-native";

//Definição
const ActionSearch = () => {

  return (
    <View style={estilo.fundo}>

      <View style={estilo.alinhamento}>
      <TouchableOpacity>
        <Image
              style={estilo.imagem}
              source={require("@/assets/images/modificar.png")}
            />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
              style={estilo.imagem}
              source={require("@/assets/images/coletar.png")}
            />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
              style={estilo.imagem}
              source={require("@/assets/images/relatorio.png")}
            />
      </TouchableOpacity>
      </View>
      
        
    </View>

  )

}

const alt = 200
const larg = 230

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#372775",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  alinhamento: {
    justifyContent: 'space-around',
    alignContent: 'center',
    flex: 1
  },
  imagem: {
      height: alt,
      width: larg,
  }
});


//Exportação
export default ActionSearch