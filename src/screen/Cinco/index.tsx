import { View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import React from "react";
import logo from "../../assets/adaptive-icon.png";

export default function Cinco() {
  const createAlert = () => Alert.alert("Boa noite!", "", [{ text: "OK" }]);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topLeftSection}>
          <TouchableOpacity onPress={createAlert}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.topRightSection}>
          <View style={styles.topRightTopSection}>
            <TouchableOpacity onPress={createAlert}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.topRightBottomSection}>
            <TouchableOpacity onPress={createAlert}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity onPress={createAlert}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
