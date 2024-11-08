import EventCard from "@/components/EventCard";
import NavBar from "@/components/NavBar";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";

const data = [
  {
    name: "secomp 2023",
    date: "10/10/2023",
    image: require("@/assets/images/john.jpg"),
  },
  {
    name: "meninas digitais",
    date: "01/04/2022",
    image: require("@/assets/images/gabe_newell_meme.jpg"),
  },
  {
    name: "ubuntu 2022",
    date: "05/06/2022",
    image: require("@/assets/images/uganda-knuckes.png"),
  },
  {
    name: "secomp 2024",
    date: "10/10/2023",
    image: require("@/assets/images/john.jpg"),
  },
  {
    name: "meninas super digitais",
    date: "01/04/2022",
    image: require("@/assets/images/gabe_newell_meme.jpg"),
  },
  {
    name: "ubuntu 2023",
    date: "05/06/2022",
    image: require("@/assets/images/uganda-knuckes.png"),
  },
];

const LoginPage = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Pagina Login</Text>
      <TouchableOpacity onPress={() => router.replace("./(drawer)/Home")}>
        <Text style={{ backgroundColor: "#ead" }}>toca auqi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 20,
    // marginBottom: -20,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#372775",
  },

  searchbarContainer: {
    backgroundColor: "#fff",
    borderRadius: 0,
    // color: "#ae3",
    width: "80%",
    marginTop: 10,
  },
  carrousel: {
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
    gap: 20,
    flexDirection: "row",
    backgroundColor: "#372775",
  },
  btnStyle: {
    backgroundColor: "#37BD6D",
    borderRadius: 0,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    // todo: shadow on btn element
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginPage;
