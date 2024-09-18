import { StyleSheet } from "react-native";

import Colors from "@/utils/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue_2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default styles;
