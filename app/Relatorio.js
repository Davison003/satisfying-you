import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { PieChart } from "react-native-chart-kit";

import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

export default function Thanks() {
  const [chartData, setChartData] = useState([]);

  const email = useSelector((state) => state.login.email);
  const surveyId = useSelector((state) => state.survey.id);

  const ratingColors = {
    excelente: "#6ebe43",
    bom: "#edaf23",
    neutro: "#ef7f37",
    ruim: "#ed4b3e",
    pessimo: "#cb2435",
  };

  useEffect(() => {
    async function getFeedback() {
      try {
        const survey = await getDoc(
          doc(db, "users", email, "surveys", surveyId)
        );
        const feedback = survey.data().feedback;
        // console.log(feedback);

        const data = Object.entries(feedback).map(([rating, amount]) => ({
          name: rating,
          value: amount,
          color: getColorRating(rating),
          legendFontColor: "#dFdFdF",
          legendFontSize: 20,
        }));

        // console.log(data);
        setChartData(data);
      } catch (err) {
        console.log("Erro ao pegar feedback", err);
      }
    }

    getFeedback();
  }, []);

  const getColorRating = (rating) => ratingColors[`${rating}`];

  return (
    <View style={estilos.raiz}>
      <PieChart
        data={chartData}
        width={Dimensions.get("window").width - 128}
        height={300}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        backgroundColor="transparent"
        accessor="value"
        absolute
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  raiz: {
    flex: 1,
    backgroundColor: "#372775",
    justifyContent: "center",
    alignItems: "center",
  },
  grafico: {
    height: 720,
    width: 720,
    alignSelf: "center",
    marginBottom: 50,
    resizeMode: "contain",
    left: 5,
  },
});
