import { useEffect } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";

const useSplash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(StackActions.replace("MainApp"));
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return {};
};

export default useSplash;
