import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";

export default function Sete() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleSave = () => {
    setDisplayText(`${email} - ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>E-Mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        maxLength={8}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      {displayText ? <Text style={styles.result}>{displayText}</Text> : null}
    </SafeAreaView>
  );
}
