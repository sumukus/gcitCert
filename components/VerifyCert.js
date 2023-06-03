import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function VerifyCert() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>Enter the gcitCert ID:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the ID to verify it"
        />
      </View>

      <Button title="Verify gcitCert" color={Colors.secondary} />
    </View>
  );
}

export default VerifyCert;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Colors.text,
    fontSize: 16,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    padding: 5,
  },
  textInputContainer: {
    width: "90%",
    paddingBottom: 20,
  },
});
