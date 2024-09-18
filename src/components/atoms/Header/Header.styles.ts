import { StyleSheet } from "react-native";
import Colors from "@/utils/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    padding: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerLogo: {
    flex: 1,
  },
  logo: {
    width: 90,
    height: 22,
    resizeMode: "contain",
  },
});

export default styles;
