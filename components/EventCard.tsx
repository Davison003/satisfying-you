import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export default function Card(info: any) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={info.image} width={120} height={120} />
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.date}>{info.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 16,
  },

  title: {
    color: "#48a",
    fontSize: 18,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
  },
  date: {
    fontSize: 12,
    opacity: 0.5,
  },
});
