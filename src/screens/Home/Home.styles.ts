import { StyleSheet } from "react-native";
import Colors from "@/utils/Colors";

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: Colors.darkBlack,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.white,
  },
});

export default styles;
