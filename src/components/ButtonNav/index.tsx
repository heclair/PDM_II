import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles_nav";

type ButtonNavProps = {
  children: React.ReactNode;
  children2: React.ReactNode;
  nav1: string;
  nav2: string;
};

export default function ButtonNav({ children, children2, nav1, nav2 }: ButtonNavProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate(nav1)}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate(nav2)}
      >
        <Text style={styles.buttonText}>{children2}</Text>
      </TouchableOpacity>
    </View>
  );
}
