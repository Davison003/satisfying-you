import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "AveriaLibre-Regular": require("../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2b1d62" },

        headerTintColor: "#372775",
        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "AveriaLibre-Regular",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          title: "Nova Conta",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
          },
        }}
      />
      <Stack.Screen name="Pesquisa" options={{ headerShown: false }} />
      <Stack.Screen name="Agradecimentos" options={{ headerShown: false }} />
      <Stack.Screen
        name="Relatorio"
        options={{
          title: "Relatório",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
          },
        }}
      />
      <Stack.Screen
        name="(drawer)"
        options={{
          headerStyle: { backgroundColor: "#2b1d62" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActionSearch"
        options={{
          title: "Carnaval",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
          },
        }}
      />
      <Stack.Screen
        name="ModifySearch"
        options={{
          title: "Modificar Pesquisa",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
          },
        }}
      />
      <Stack.Screen
        name="NovaPesquisa"
        options={{
          headerTitle: "Nova pesquisa",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2B1D62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
            fontSize: 28,
          },
        }}
      />
      <Stack.Screen
        name="RecuperarSenha"
        options={{
          headerTitle: "Recuperação de senha",
          headerTintColor: "#372775",
          headerStyle: { backgroundColor: "#2B1D62" },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontFamily: "AveriaLibre-Regular",
            fontSize: 28,
          },
        }}
      />
    </Stack>
  );
}
