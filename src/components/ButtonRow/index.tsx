import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import styles from "./styles";

type ButtonRowProps = {
  children: ReactNode;
  children2: ReactNode;
};

export default function ButtonRow({ children, children2 }: ButtonRowProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{children2}</Text>
      </TouchableOpacity>
    </View>
  );
}
