import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import React, { useState } from "react";

export default function Seis() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleSave = () => {
    setDisplayText(`${name} - ${age}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSave} />
      {displayText ? <Text style={styles.result}>{displayText}</Text> : null}
    </View>
  );
}
