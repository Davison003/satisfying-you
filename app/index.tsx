import { useRouter, Link } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const LoginPage = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Pagina Login</Text>

      <Link href="/Pesquisa" asChild>
        <TouchableOpacity>
          <Text style={{ backgroundColor: "#aed" }}> pesquisa</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/LoginScreen" asChild>
        <TouchableOpacity>
          <Text style={{ backgroundColor: "#e4f" }}> login </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/RegisterScreen" asChild>
        <TouchableOpacity>
          <Text style={{ backgroundColor: "#ab0" }}> new account </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={() => router.replace("./(drawer)/Home")}>
        <Text style={{ backgroundColor: "#ead" }}>toca auqi</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => router.replace("./(drawer)/Home")}>
        <Text style={{ backgroundColor: "#ead" }}>toca auqi</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default LoginPage;
