import { Text, View, StyleSheet } from "react-native";
import { Appbar, Button, Icon } from "react-native-paper";

export default function NavBar(props: any) {
  const _goBack = () => {
    console.log("went back");
  };

  const openDrawer = () => {
    console.log("opened drawer");
  };

  return (
    <Appbar.Header style={styles.appBar} dark={true}>
      {props.title !== "Home" ? (
        <Appbar.BackAction onPress={_goBack} />
      ) : (
        <Appbar.Action icon={"dots-horizontal"} onPress={props.onPress} />
      )}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  navContainer: {
    backgroundColor: "#2b1d62",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // padding: 16,
    gap: 50,
  },

  btn: {
    color: "#fff",
  },

  title: {
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: 16,
  },

  appBar: {
    backgroundColor: "#2b1d62",
  },
});
