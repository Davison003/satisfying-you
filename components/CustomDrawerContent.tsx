import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { View } from "react-native";

const fontSizeLabel = 20;

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#2b1d62" }}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          pressColor="#ead"
          label={"usuario@dominio.com"}
          labelStyle={{
            fontFamily: "AveriaLibre-Regular",
            color: "white",
            borderBottomColor: "#fff",
            paddingBottom: 10,
            borderBottomWidth: 1,
            textAlign: "center",
            fontSize: fontSizeLabel,
          }}
          style={{ justifyContent: "center" }}
          onPress={() => {}}
        />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <DrawerItem
            icon={({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="file-document-outline"
                size={24}
                color="white"
              />
            )}
            pressColor="#ead"
            label={"Pesquisa"}
            labelStyle={{
              fontFamily: "AveriaLibre-Regular",
              color: "white",
              marginLeft: -20,
              fontSize: fontSizeLabel,
            }}
            onPress={() => {
              router.back();
              DrawerActions.closeDrawer();
            }}
          />
          <DrawerItem
            icon={({ focused, color, size }) => (
              <Octicons name="sign-out" size={24} color="white" />
            )}
            style={{ marginTop: 30 }}
            label="Sair"
            labelStyle={{
              fontFamily: "AveriaLibre-Regular",
              color: "white",
              marginLeft: -20,
              fontSize: fontSizeLabel,
            }}
            onPress={() => {
              router.replace("/");
              DrawerActions.closeDrawer();
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
