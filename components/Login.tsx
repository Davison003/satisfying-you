import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "purple",
  },
});

export default function Login(am: number, b: string) {
  return (
    <View style={styles.bg}>
      <Text>login</Text>
    </View>
  );
}
