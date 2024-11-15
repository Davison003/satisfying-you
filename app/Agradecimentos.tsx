import { Text, View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Thanks() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.back();
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={estilos.raiz}>
      <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
      <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  raiz: {
    flex: 1,
    backgroundColor: "#372775",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 22,
    // fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    fontFamily: "AveriaLibre-Regular",
  },
});
