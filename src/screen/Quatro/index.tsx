import { View, Image } from "react-native";
import styles from "./styles";
import React from "react";
import logo from "../../assets/adaptive-icon.png";

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topLeftSection}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.topRightSection}>
          <View style={styles.topRightTopSection}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.topRightBottomSection}>
            <Image source={logo} style={styles.logo} />
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
}
