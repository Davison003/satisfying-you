import { Text, View, StyleSheet, Image} from "react-native";
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";

export default function Thanks() {

    const router = useRouter();

    return(
        <View style={estilos.raiz}>
            <Image style={estilos.grafico} source={require('@/assets/images/grafico.png')}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    raiz: {
      flex: 1,
      backgroundColor: "#372775",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 20
    },
    grafico: {
        height: 720,
        width: 720,
        alignSelf: "center",
        marginBottom: 50,
        resizeMode: "contain",
        left: 5
    }
  });
  