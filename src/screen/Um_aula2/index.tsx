import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import React from "react";
import ButtonNav from "../../components/ButtonNav";

const Um_aula2: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>CADASTRO</Text>
        <ButtonNav children={"Home"} children2={"Um"} nav1="Home" nav2="Um" />
        <ButtonNav children={"Dois"} children2={"Tres"} nav1="Dois" nav2="Tres" />
        <ButtonNav children={"Quatro"} children2={"Cinco"} nav1="Quatro" nav2="Cinco" />
        <ButtonNav children={"Seis"} children2={"Sete"} nav1="Seis" nav2="Sete" />
        <ButtonNav children={"Oito"} children2={"Nove"} nav1="Oito" nav2="Nove" />
        <ButtonNav children={"Dez"} children2={"Onze"} nav1="Onze" nav2="Onze" />
      </View>
    </SafeAreaView>
  );
};

export default Um_aula2;
