import { StyleSheet } from "react-native";
import Colors from "./Colors";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.black,
    marginBottom: 2,
  },
  tabBarIndicator: {
    backgroundColor: Colors.blue,
  },
  tabBarLabel: {
    fontWeight: "700",
    fontSize: 14,
  },
});

export default {
  lazy: true,
  tabBarStyle: styles.tabBar,
  tabBarIndicatorStyle: styles.tabBarIndicator,
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarActiveTintColor: Colors.blue,
  tabBarInactiveTintColor: Colors.white,
};
