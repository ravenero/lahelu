import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "@/utils/Colors";

export const containerStyle = (isHastag: boolean): TextStyle => ({
  borderColor: isHastag ? Colors.darkGray : "",
  borderWidth: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 4,
  borderRadius: 50,
  paddingHorizontal: 10,
  backgroundColor: isHastag ? "" : Colors.orange,
});

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 14,
  } as ViewStyle,
});

export default styles;
