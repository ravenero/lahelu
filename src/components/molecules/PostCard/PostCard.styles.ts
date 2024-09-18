import { StyleSheet } from "react-native";

import Colors from "@/utils/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingVertical: 14,
  },
  containerAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  wrapperAccount: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "cover",
    alignSelf: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 14,
  },
  containerTitle: {
    paddingHorizontal: 12,
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 12,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  containerHastag: {
    paddingHorizontal: 12,
    flexDirection: "row",
  },
  containerInfo: {
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  wrapperInfo: {
    borderWidth: 1,
    borderColor: Colors.darkGray,
    flexDirection: "row",
    borderRadius: 8,
  },
  contentInfo: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  wrapperContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
