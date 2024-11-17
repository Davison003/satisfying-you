import { useRouter } from "expo-router";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const cardSize = [250, 250];
const imgSize = [120, 120];

export default function Card(info: any) {
  const router = useRouter();
  // const img = require(`../assets/images/${info.image}`);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        router.push("/ActionSearch");
      }}
    >
      <Image source={info.image} alt={info.title} style={styles.imgStyle} />
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.date}>{info.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16,
    width: cardSize[0],
    height: cardSize[1],
  },

  title: {
    color: "#48a",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "AveriaLibre-Regular",
    textTransform: "uppercase",
  },
  date: {
    fontFamily: "AveriaLibre-Regular",
    fontSize: 16,
    opacity: 0.5,
    textAlign: "center",
    // fontWeight: "bold",
  },
  imgStyle: {
    width: imgSize[0],
    height: imgSize[1],
    borderRadius: 10,
    marginBottom: 5,
  },
});
