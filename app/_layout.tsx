import { Stack } from "expo-router";
import Home from "./(tabs)/Home";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)/Home" />
    </Stack>
  );
}

// export default function RootLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="../views/Home"
//         options={{ title: "Satisfying You" }}
//       />
//     </Stack>
//   );
// }
