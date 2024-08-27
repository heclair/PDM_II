import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import ButtonRow from "../../components/ButtonRow";

export default function Onze() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>CADASTRO</Text>
        <ButtonRow children={"Um"} children2={"Dois"}></ButtonRow>
        <ButtonRow children={"Três"} children2={"Quatro"}></ButtonRow>
        <ButtonRow children={"Cinco"} children2={"Seis"}></ButtonRow>
        <ButtonRow children={"Sete"} children2={"Oito"}></ButtonRow>
        <ButtonRow children={"Nove"} children2={"Dez"}></ButtonRow>
      </View>
    </SafeAreaView>
  );
}
