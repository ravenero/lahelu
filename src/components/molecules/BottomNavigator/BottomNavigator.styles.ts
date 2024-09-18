import { Platform, StyleSheet } from "react-native";

import Colors from "@/utils/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.black,
    borderColor: Colors.black,
    borderTopWidth: 1,
    ...Platform.select({
      ios: {
        paddingTop: 16,
        paddingBottom: 30,
      },
      android: {
        paddingTop: 15,
        paddingBottom: 11,
      },
    }),
  },
});

export default styles;
