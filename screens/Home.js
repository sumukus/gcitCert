import { Text, Button, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import VerifyCert from "../components/VerifyCert";
import { PROJECT_ID } from "@env";

function Home({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.verifyCert}>
        <VerifyCert />
      </View>
      <View style={styles.loginContainer}>
        <Button title="Connect Metamask" color={Colors.secondary} />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  verifyCert: {
    flex: 2,
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
  },
});
