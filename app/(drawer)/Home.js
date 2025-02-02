import EventCard from "@/components/EventCard";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import { collection, query, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useSelector } from "react-redux";

const Home = () => {
  const [text, setText] = React.useState("");
  const [surveys, setSurveys] = React.useState([]);

  const router = useRouter();
  const email = useSelector((state) => state.login.email);

  useEffect(() => {
    const userRef = doc(db, "users", email);
    const surveryCollectionRef = collection(userRef, "surveys");
    const q = query(surveryCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const surveysList = [];
      querySnapshot.forEach((doc) => {
        surveysList.push({ ...doc.data(), id: doc.id });
      });
      setSurveys(surveysList);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <DrawerToggleButton tintColor="white" /> */}
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Insira o termo de busca..."
        placeholderTextColor="gray"
      />

      <ScrollView
        style={styles.carrousel}
        contentContainerStyle={{ gap: 15, alignItems: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {surveys.length ? (
          surveys.map((item) => (
            <EventCard
              key={item.id}
              id={item.id}
              title={item.name}
              date={item.date}
              image={item.image}
            />
          ))
        ) : (
          <Text style={{ color: "white" }}>Nenhuma pesquisa encontrada.</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.newSurveyBtn}
        onPress={() => router.push("/NovaPesquisa")}
      >
        <Text style={styles.newSurveyBtnText}>NOVA PESQUISA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    paddingHorizontal: 10,
    paddingTop: 10,
    // flexDirection: "row",
  },
  searchInput: {
    backgroundColor: "white",
    color: "gray",
    padding: 10,
    // marginLeft: 10,
    marginBottom: 5,
    fontFamily: "AveriaLibre-Regular",
  },
  carrousel: {
    display: "flex",

    flexDirection: "row",
    backgroundColor: "#372775",
  },
  newSurveyBtn: {
    backgroundColor: "#4CAF50",
    padding: 5,
    borderRadius: 5,
    // marginTop: 20,
    marginBottom: 5,
    width: "100%",
    alignItems: "center",
    fontFamily: "AveriaLibre-Regular",
  },
  newSurveyBtnText: {
    fontFamily: "AveriaLibre-Regular",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
