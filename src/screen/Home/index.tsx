import { View, Text, Button } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    showTime();
  });

  const showTime = () => {
    setTime(
      `Agora são ${new Date().getHours()} horas e ${new Date().getMinutes()} minutos`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boa noite!</Text>
      <Button title="Horário" onPress={showTime} />
      <Text style={styles.msg}>{time}</Text>
    </View>
  );
}
