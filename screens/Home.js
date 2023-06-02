import { Text, View, StyleSheet } from "react-native";

function Home() {
  return (
    <View style={styles.rootContainer}>
      <Text style={{ color: "red" }}>Home Screen</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
