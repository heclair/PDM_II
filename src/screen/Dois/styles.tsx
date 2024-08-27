import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },

  topSection: {
    flexDirection: "row",
    flex: 0.5,
  },

  topLeftSection: {
    backgroundColor: "lime",
    flex: 0.5,
  },

  topRightSection: {
    backgroundColor: "aquamarine",
    flex: 0.5,
  },

  bottomSection: {
    backgroundColor: "salmon",
    flex: 0.5,
  },
});

export default styles;
