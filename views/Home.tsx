import EventCard from "@/components/EventCard";
import NavBar from "@/components/NavBar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Searchbar } from "react-native-paper";

const data = [
  {
    name: "secomp 2023",
    date: "10/10/2023",
    image: require("../assets/images/john.jpg"),
  },
  {
    name: "meninas digitais",
    date: "01/04/2022",
    image: require("../assets/images/gabe_newell_meme.jpg"),
  },
  {
    name: "ubuntu 2022",
    date: "05/06/2022",
    image: require("../assets/images/uganda-knuckes.png"),
  },
];

const Home = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.mainContainer}>
      <NavBar title="Home" iconName="home" onPress={() => {}} />
      <View style={styles.container}>
        {/* <Icon source="text-search" size={30} /> */}
        <Searchbar
          style={styles.searchbarContainer}
          placeholder="Insira o termo de busca..."
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>
      <View style={styles.carrousel}>
        {data.map((item) => (
          <EventCard
            style={{ padding: 100 }}
            key={item.name}
            title={item.name}
            date={item.date}
            image={item.image}
          />
        ))}
      </View>
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => {}}>
          <Text style={styles.btnText}>Nova Pesquisa</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "#372775" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
  },
  container: {
    display: "flex",
    // marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
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
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
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
      width: 5,
      height: 5,
    },

    // shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
