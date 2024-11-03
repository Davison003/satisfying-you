import { Text, View, StyleSheet } from "react-native";
import DrawerNav from "@/components/DrawerNav";
import { Button } from "react-native-paper";

import Home from "../views/Home";

const mainStyles = StyleSheet.create({
  bg: {
    backgroundColor: "purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Index() {
  return <Home />;
}
