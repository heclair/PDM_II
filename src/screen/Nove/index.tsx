import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function Nove() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [selectedRole, setSelectedRole] = useState("manager");
  const [displayText, setDisplayText] = useState("");

  const handleSave = () => {
    if (password === passwordConfirm) {
      setDisplayText(
        `${email} - ${password} - ${passwordConfirm} - ${selectedRole}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>CADASTRO</Text>
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
        <Text style={styles.label}>Confirmação de Senha</Text>
        <TextInput
          style={styles.input}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={true}
          maxLength={8}
        />
        <Text style={styles.label}>Selecionar Cargo</Text>
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Gestor" value="manager" />
          <Picker.Item label="Administrador" value="admin" />
          <Picker.Item label="Usuário" value="user" />
        </Picker>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
        {displayText ? <Text style={styles.result}>{displayText}</Text> : null}
      </View>
    </SafeAreaView>
  );
}
