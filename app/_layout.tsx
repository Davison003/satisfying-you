import "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2b1d62" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Satisfying You" }} />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          title: "Nova Conta",
          headerStyle: { backgroundColor: "#2b1d62" },
        }}
      />
      <Stack.Screen name="Pesquisa" options={{ headerShown: false }} />
      <Stack.Screen name="Agradecimentos" options={{ headerShown: false }} />
      <Stack.Screen 
        name="relatorio" 
        options={{
          title: "Relatório", 
          headerStyle: { backgroundColor: "#2b1d62" },
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
