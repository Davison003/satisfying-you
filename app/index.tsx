import Login from "@/components/Login";
import { Text, View, StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  bg: {
    backgroundColor: "purple",
  },
});

export default function Index() {
  return (
    <View style={mainStyles.bg}>
      <Login />
    </View>
  );
}
