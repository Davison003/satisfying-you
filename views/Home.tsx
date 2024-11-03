import EventCard from "@/components/EventCard";
import NavBar from "@/components/NavBar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Searchbar } from "react-native-paper";

const data = [
  {
    name: "secomp 2023",
    date: "10/10/2023",
    image: "@/assets/images/john.jpg",
  },
  {
    name: "meninas digitais",
    date: "01/04/2022",
    image: "@/assets/images/gabe_newel_meme.jpg",
  },
  {
    name: "ubuntu 2022",
    date: "05/06/2022",
    image: "@/assets/images/uganda-knuckles.webp",
  },
];

const Home = () => {
  const [text, setText] = React.useState("");

  return (
    <View>
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
            key={item.name}
            title={item.name}
            date={item.date}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: "#ae3",
    width: "80%",
    marginTop: 10,
  },
  carrousel: {
    display: "flex",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#372775",
  },
});

export default Home;
