import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },

  logo: {
    alignSelf: "center",
    width: 64,
    height: 64,
    resizeMode: "contain",
  },

  topSection: {
    flexDirection: "row",
    flex: 0.5,
  },

  topLeftSection: {
    backgroundColor: "lime",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  topRightSection: {
    flex: 0.5,
    flexDirection: "column",
  },

  topRightTopSection: {
    backgroundColor: "teal",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  topRightBottomSection: {
    backgroundColor: "skyblue",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomSection: {
    backgroundColor: "salmon",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
