import Colors from "../../utils/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
});

export default styles;
