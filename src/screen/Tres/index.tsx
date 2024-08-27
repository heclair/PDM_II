import { View } from "react-native";
import styles from "./styles";
import React from "react";

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topLeftSection} />
        <View style={styles.topRightSection}>
          <View style={styles.topRightTopSection} />
          <View style={styles.topRightBottomSection} />
        </View>
      </View>
      <View style={styles.bottomSection} />
    </View>
  );
}
