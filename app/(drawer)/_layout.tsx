import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomDrawerContent from "@/components/CustomDrawerContent";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#2b1d62" },
        }}
        drawerContent={CustomDrawerContent}
      />
    </GestureHandlerRootView>
  );
}
