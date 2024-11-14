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
        headerTintColor: "#fff",
        headerTitleStyle: { fontFamily: "AveriaLibre-Regular" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Satisfying You" }} />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          title: "Nova Conta",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: { fontFamily: "AveriaLibre-Regular" },
        }}
      />
      <Stack.Screen name="Pesquisa" options={{ headerShown: false }} />
      <Stack.Screen name="Agradecimentos" options={{ headerShown: false }} />
      <Stack.Screen
        name="Relatorio"
        options={{
          title: "Relatório",
          headerStyle: { backgroundColor: "#2b1d62" },
          headerTitleStyle: { fontFamily: "AveriaLibre-Regular" },
        }}
      />
      <Stack.Screen
        name="(drawer)"
        options={{
          headerStyle: { backgroundColor: "#2b1d62" },
          headerShown: false,
        }}
      />
    </Stack>
  );
}
