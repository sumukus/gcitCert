import "./expo-crypto-shim";
import { StyleSheet, SafeAreaView, StatusBar as SB } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigators/MainNavigator";
import Colors from "./constants/Colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SB backgroundColor={Colors.secondary} barStyle="default" />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
