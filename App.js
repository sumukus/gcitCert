import "./expo-crypto-shim";
import { StyleSheet, SafeAreaView, StatusBar as SB } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./navigators/MainNavigator";
import Colors from "./constants/Colors";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function clearStorage() {
      AsyncStorage.clear();
    }
    try {
      clearStorage();
    } catch (err) {
      alert(err);
    }
  }, []);

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
